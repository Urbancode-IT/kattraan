const Razorpay = require("../../helpers/razorpay");
const Order = require("../../models/Order");
const Course = require("../../models/Course");
const StudentCourses = require("../../models/StudentCourses");

const createOrder = async (req, res) => {
  try {
    const { userId, courseId, coursePricing, courseTitle } = req.body;

    // Generate unique receipt
    const crypto = require("crypto");
    const uniqueReceipt = crypto.randomBytes(10).toString("hex");

    // Create Razorpay order
    const options = {
      amount: coursePricing * 100, // Convert to smallest currency unit
      currency: "INR",
      receipt: `order_${uniqueReceipt}`, // Ensure receipt length <= 40
    };

    const razorpayOrder = await Razorpay.orders.create(options);

    if (!razorpayOrder) {
      return res.status(500).json({
        success: false,
        message: "Failed to create Razorpay order",
      });
    }

    // Save the order to the database
    const newOrder = new Order({
      userId,
      courseId,
      coursePricing,
      courseTitle,
      paymentId: razorpayOrder.id,
      orderStatus: "created",
      paymentMethod: "Razorpay",
      paymentStatus: "pending",
    });

    await newOrder.save();

    res.status(201).json({
      success: true,
      data: { razorpayOrderId: razorpayOrder.id },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error creating order" });
  }
};

const capturePaymentAndFinalizeOrder = async (req, res) => {
  try {
    const { orderId, paymentId } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    // Verify the payment with Razorpay
    const paymentDetails = await Razorpay.payments.fetch(paymentId);
    if (!paymentDetails || paymentDetails.status !== "captured") {
      return res.status(400).json({
        success: false,
        message: "Payment not captured",
      });
    }

    // Update order status
    order.paymentStatus = "paid";
    order.orderStatus = "confirmed";
    await order.save();

    // Add the course to the student's purchased courses
    let studentCourses = await StudentCourses.findOne({ userId: order.userId });

    if (!studentCourses) {
      studentCourses = new StudentCourses({
        userId: order.userId,
        courses: [],
      });
    }

    studentCourses.courses.push({
      courseId: order.courseId,
      title: order.courseTitle,
      dateOfPurchase: new Date(),
    });

    await studentCourses.save();

    // Add the student to the course schema's student list
    await Course.findByIdAndUpdate(order.courseId, {
      $addToSet: {
        students: {
          studentId: order.userId,
          studentName: order.userName,
          studentEmail: order.userEmail,
          paidAmount: order.coursePricing,
        },
      },
    });

    res.status(200).json({ success: true, message: "Order confirmed" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error capturing payment" });
  }
};

module.exports = { createOrder, capturePaymentAndFinalizeOrder };
