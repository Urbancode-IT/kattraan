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

router.get("/get", getAllStudentViewCourses);
router.get("/get/details/:id", getStudentViewCourseDetails);
router.get("/purchase-info/:id/:studentId", checkCoursePurchaseInfo);
router.get("/featured", getFeaturedCourses);

// Course reviews

// Anyone can view reviews
router.get("/:courseId/reviews", getCourseReviews);

// Only authenticated users with 'student' role can add/edit/delete reviews
router.post("/:courseId/reviews", authenticate,checkRole(["learner"]), addCourseReview
);
router.put(
  "/:courseId/reviews/:reviewId",
  authenticate,
  checkRole(["learner"]),
  editCourseReview
);
router.delete(
  "/:courseId/reviews/:reviewId",
  authenticate,
  checkRole(["learner"]),
  deleteCourseReview
);

module.exports = router;
