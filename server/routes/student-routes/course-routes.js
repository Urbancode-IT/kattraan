const express = require("express");
const {
  getStudentViewCourseDetails,
  getAllStudentViewCourses,
  checkCoursePurchaseInfo,
  getFeaturedCourses,
  getCourseReviews,
  addCourseReview,
  editCourseReview,
  deleteCourseReview,
} = require("../../controllers/student-controller/course-controller");

const authenticate = require("../../middleware/auth-middleware");
const checkRole = require("../../middleware/role-middleware");
const router = express.Router();

// RESTful: List all courses (with filters as query params)
router.get("/courses", getAllStudentViewCourses);

// RESTful: Get course details
router.get("/courses/:courseId", getStudentViewCourseDetails);

// RESTful: Get featured courses
router.get("/courses/featured", getFeaturedCourses);

// RESTful: Check if current user purchased course (use /me)
router.get(
  "/courses/:courseId/purchase-info",
  authenticate,
  checkRole(["learner"]),
  checkCoursePurchaseInfo
);

// Course reviews

// RESTful: Reviews as nested resource under courses
router.get("/courses/:courseId/reviews", getCourseReviews);
router.post(
  "/courses/:courseId/reviews",
  authenticate,
  checkRole(["learner"]),
  addCourseReview
);

router.put(
  "/courses/:courseId/reviews/:reviewId",
  authenticate,
  checkRole(["learner"]),
  editCourseReview
);

router.delete(
  "/courses/:courseId/reviews/:reviewId",
  authenticate,
  checkRole(["learner"]),
  deleteCourseReview
);

module.exports = router;
