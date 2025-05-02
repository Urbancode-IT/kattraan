const Razorpay = require("../../helpers/razorpay");
const Order = require("../../models/Order");
const Course = require("../../models/Course");
const StudentCourses = require("../../models/StudentCourses");

const createOrder = async (req, res) => {
  try {
    const { userId, courseId, coursePricing, courseTitle } = req.body;

    // First check if the user is already enrolled in this course
    const existingEnrollment = await StudentCourses.findOne({
      userId,
      "courses.courseId": courseId
    });

    if (existingEnrollment) {
      return res.status(400).json({
        success: false,
        message: "You are already enrolled in this course",
      });
    }

    // If course is free (price = 0), skip Razorpay and create order directly
    if (coursePricing === 0) {
      const newOrder = new Order({
        userId,
        courseId,
        coursePricing,
        courseTitle,
        paymentId: "free-course-no-payment",
        orderStatus: "confirmed",
        paymentMethod: "none",
        paymentStatus: "paid",
      });

      await newOrder.save();
      await enrollStudentInCourse(userId, courseId, courseTitle);

      return res.status(201).json({
        success: true,
        data: { 
          razorpayOrderId: null, 
          isFreeCourse: true 
        },
        message: "Free course enrolled successfully"
      });
    }

    // For paid courses, proceed with Razorpay flow
    const crypto = require("crypto");
    const uniqueReceipt = crypto.randomBytes(10).toString("hex");

    const options = {
      amount: coursePricing * 100,
      currency: "INR",
      receipt: `order_${uniqueReceipt}`,
    };

    const razorpayOrder = await Razorpay.orders.create(options);

    if (!razorpayOrder) {
      return res.status(500).json({
        success: false,
        message: "Failed to create Razorpay order",
      });
    }

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
      data: { razorpayOrderId: razorpayOrder.id, isFreeCourse: false },
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

    // Check if user is already enrolled in this course (safety net)
    const existingEnrollment = await StudentCourses.findOne({
      userId: order.userId,
      "courses.courseId": order.courseId
    });

    if (existingEnrollment) {
      // Update order status to prevent hanging orders
      order.orderStatus = "duplicate";
      await order.save();
      
      return res.status(400).json({
        success: false,
        message: "You are already enrolled in this course",
      });
    }

    // Skip payment verification for free courses
    if (order.coursePricing === 0) {
      return res.status(200).json({ 
        success: true, 
        message: "Free course already enrolled" 
      });
    }

    // For paid courses, verify payment with Razorpay
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

    // Enroll student in the course
    await enrollStudentInCourse(order.userId, order.courseId, order.courseTitle);

    res.status(200).json({ success: true, message: "Order confirmed" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error capturing payment" });
  }
};

module.exports = { createOrder, capturePaymentAndFinalizeOrder };
