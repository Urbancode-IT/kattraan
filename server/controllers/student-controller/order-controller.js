const { initiateTransaction } = require("../../helpers/paytm");
const Order = require("../../models/Order");
const Course = require("../../models/Course");
const StudentCourses = require("../../models/StudentCourses");

const createOrder = async (req, res) => {
  try {
    const { userId, courseId, coursePricing, courseTitle } = req.body;

    // Check if already enrolled
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

    // Free course — directly enroll
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
          paytmOrderId: null,
          isFreeCourse: true,
        },
        message: "Free course enrolled successfully",
      });
    }

    // Paid course — initiate Paytm transaction
    const orderId = "ORDER_" + Math.random().toString(36).substring(2, 15);
    const paytmResponse = await initiateTransaction(orderId, coursePricing, userId);

    const newOrder = new Order({
      userId,
      courseId,
      coursePricing,
      courseTitle,
      paymentId: orderId,
      orderStatus: "created",
      paymentMethod: "Paytm",
      paymentStatus: "pending",
    });

    await newOrder.save();

    res.status(201).json({
      success: true,
      data: {
        paytmOrderId: orderId,
        txnToken: paytmResponse.body.txnToken,
        isFreeCourse: false,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error creating Paytm order",
    });
  }
};

const capturePaymentAndFinalizeOrder = async (req, res) => {
  try {
    const { orderId } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // Check again if user already enrolled
    const existingEnrollment = await StudentCourses.findOne({
      userId: order.userId,
      "courses.courseId": order.courseId,
    });

    if (existingEnrollment) {
      order.orderStatus = "duplicate";
      await order.save();

      return res.status(400).json({
        success: false,
        message: "You are already enrolled in this course",
      });
    }

    // Skip verification for free
    if (order.coursePricing === 0) {
      return res.status(200).json({
        success: true,
        message: "Free course already enrolled",
      });
    }

    // ✅ In production, verify transaction status via Paytm's order status API
    // Here, we mark as paid directly for demo

    order.paymentStatus = "paid";
    order.orderStatus = "confirmed";
    await order.save();

    await enrollStudentInCourse(order.userId, order.courseId, order.courseTitle);

    res.status(200).json({ success: true, message: "Order confirmed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error capturing Paytm payment",
    });
  }
};

module.exports = { createOrder, capturePaymentAndFinalizeOrder };
const enrollStudentInCourse = async (userId, courseId, courseTitle) => {
  try {
    const studentCourse = await StudentCourses.findOneAndUpdate( {
      userId,
      "courses.courseId": courseId,
    }, {
      $setOnInsert: {
        userId,
        courses: [],
      },
    }, {
      upsert: true,
      new: true,
    });   

    if (!studentCourse) {
      throw new Error("Failed to create or update student courses");
    }
    const courseExists = studentCourse.courses.some(c => c.courseId === courseId);
    if (courseExists) {
      throw new Error("Student is already enrolled in this course");
    }   
    studentCourse.courses.push({ courseId, courseTitle });
    await studentCourse.save();
    return true;
  } catch (error) {
    console.error("Error enrolling student in course:", error);
    throw new Error("Failed to enroll student in course");
  }   
  };
