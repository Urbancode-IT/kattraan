const Course = require("../../models/Course");
const StudentCourses = require("../../models/StudentCourses");
const Review = require("../../models/CourseReview");
const User = require("../../models/User");

const getAllStudentViewCourses = async (req, res) => {
  try {
    const {
      category = [],
      level = [],
      primaryLanguage = [],
      sortBy = "price-lowtohigh",
      keyword = "",
      instructorId = "",
      instructorName = "",
    } = req.query;

    let filters = {};
    if (category.length) {
      filters.category = { $in: category.split(",") };
    }
    if (level.length) {
      filters.level = { $in: level.split(",") };
    }
    if (primaryLanguage.length) {
      filters.primaryLanguage = { $in: primaryLanguage.split(",") };
    }
    if (instructorId) {
      filters.instructorId = instructorId;
    }
    if (instructorName) {
      filters.instructorName = instructorName;
    }
    if (keyword && keyword.trim().length > 0) {
      filters.$or = [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
        { subtitle: { $regex: keyword, $options: "i" } },
      ];
    }

    let sortParam = {};
    switch (sortBy) {
      case "price-lowtohigh":
        sortParam.pricing = 1;
        break;
      case "price-hightolow":
        sortParam.pricing = -1;
        break;
      case "title-atoz":
        sortParam.title = 1;
        break;
      case "title-ztoa":
        sortParam.title = -1;
        break;
      default:
        sortParam.pricing = 1;
        break;
    }

    const coursesList = await Course.find(filters).sort(sortParam);

    res.status(200).json({
      success: true,
      data: coursesList,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getStudentViewCourseDetails = async (req, res) => {
  try {
    const { courseId } = req.params;
    const courseDetails = await Course.findById(courseId);
    if (!courseDetails) {
      return res.status(404).json({
        success: false,
        message: "No course details found",
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      data: courseDetails,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const checkCoursePurchaseInfo = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.user._id;
    const studentCourses = await StudentCourses.findOne({ userId });
    if (!studentCourses) {
      return res.status(200).json({
        success: true,
        data: false, // Student hasn't purchased any courses
      });
    }
    const ifStudentAlreadyBoughtCurrentCourse = studentCourses.courses.some(
      (item) => item.courseId.toString() === courseId
    );
    res.status(200).json({
      success: true,
      data: ifStudentAlreadyBoughtCurrentCourse,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Error checking course purchase info.",
    });
  }
};

// Get featured/popular courses (top 8 by students enrolled, then by rating if available)
const getFeaturedCourses = async (req, res) => {
  try {
    // Sort by number of students enrolled (descending), then by pricing (descending)
    const coursesList = await Course.find({})
      .sort({ "students.length": -1, pricing: -1 })
      .limit(8);

    res.status(200).json({
      success: true,
      data: coursesList,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

// --- Get course reviews ---
const getCourseReviews = async (req, res) => {
  try {
    const { courseId } = req.params;
    const reviews = await Review.find({ courseId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: reviews });
  } catch (e) {
    res.status(500).json({ success: false, message: "Error fetching reviews" });
  }
};

// --- Add a review ---
const addCourseReview = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { rating, comment } = req.body;
    // Check for authentication
    if (!req.user || !req.user._id) {
      console.log("addCourseReview: req.user missing or _id not found");
      return res.status(401).json({
        success: false,
        message: "Unauthorized: user not authenticated",
      });
    }
    // userId from req.user (set by auth middleware)
    const userId = req.user._id;
    console.log("addCourseReview: userId from token:", userId);
    if (!rating) {
      console.log("addCourseReview: missing rating");
      return res
        .status(400)
        .json({ success: false, message: "Rating required" });
    }
    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      console.log("addCourseReview: course not found for courseId", courseId);
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    // Fetch userName and userEmail from User model
    const user = await User.findById(userId).select("userName userEmail");
    console.log("addCourseReview: fetched user:", user);
    if (!user) {
      console.log("addCourseReview: user not found for userId", userId);
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    // Prevent duplicate review by same user for same course
    const existing = await Review.findOne({ courseId, userId });
    console.log("addCourseReview: existing review:", existing);
    if (existing) {
      console.log(
        "addCourseReview: duplicate review for userId",
        userId,
        "courseId",
        courseId
      );
      return res
        .status(400)
        .json({ success: false, message: "You already reviewed this course" });
    }
    const review = await Review.create({
      courseId,
      userId,
      userName: user.userName,
      userEmail: user.userEmail,
      rating,
      comment,
    });
    console.log("addCourseReview: review created:", review);
    res.status(201).json({ success: true, data: review });
  } catch (e) {
    console.log("addCourseReview: error:", e);
    res.status(500).json({ success: false, message: "Error adding review" });
  }
};

// --- Edit a review ---
const editCourseReview = async (req, res) => {
  try {
    const { courseId, reviewId } = req.params;
    const { rating, comment } = req.body;
    // userId from req.user (set by auth middleware)
    const userId = req.user._id;
    // Only allow user to edit their own review
    const review = await Review.findOneAndUpdate(
      { _id: reviewId, courseId, userId },
      { rating, comment },
      { new: true }
    );
    if (!review) {
      return res
        .status(404)
        .json({ success: false, message: "Review not found or not yours" });
    }
    res.status(200).json({ success: true, data: review });
  } catch (e) {
    res.status(500).json({ success: false, message: "Error editing review" });
  }
};

// --- Delete a review ---
const deleteCourseReview = async (req, res) => {
  try {
    const { courseId, reviewId } = req.params;
    // userId from req.user (set by auth middleware)
    const userId = req.user._id;
    // Only allow user to delete their own review
    const review = await Review.findOneAndDelete({
      _id: reviewId,
      courseId,
      userId,
    });
    if (!review) {
      return res
        .status(404)
        .json({ success: false, message: "Review not found or not yours" });
    }
    res.status(200).json({ success: true, message: "Review deleted" });
  } catch (e) {
    res.status(500).json({ success: false, message: "Error deleting review" });
  }
};

module.exports = {
  getAllStudentViewCourses,
  getStudentViewCourseDetails,
  checkCoursePurchaseInfo,
  getFeaturedCourses,
  getCourseReviews,
  addCourseReview,
  editCourseReview,
  deleteCourseReview,
};
