import { Route, Routes, Navigate } from "react-router-dom";

// Pages and Components
import AuthPage from "../pages/auth/index";
import InstructorAuthPage from "../pages/instructor-auth";
import InstructorDashboardPage from "../pages/instructor";
import StudentViewCommonLayout from "../components/student-view/common-layout";
import StudentHomePage from "../pages/student/home";
import InstructorHomePage from "../pages/instructor/home";
import NotFoundPage from "../pages/not-found";
import AddNewCoursePage from "../pages/instructor/add-new-course";
import StudentViewCoursesPage from "../pages/student/courses";
import StudentViewCourseDetailsPage from "../pages/student/course-details";
import PaypalPaymentReturnPage from "../pages/student/payment-return";
import StudentCoursesPage from "../pages/student/student-courses";
import StudentViewCourseProgressPage from "../pages/student/course-progress";


// Legal Pages
import LegalLayout from "../pages/legal/legal-layout";
import Terms from "../pages/legal/terms";
import Privacy from "../pages/legal/privacy";
import Disclaimer from "../pages/legal/disclaimer";
import ContactPage from "../pages/contact";

// Pricing Page
import PricingPage from "../pages/student/home/pricing";
import BusinessPage from "@/pages/student/home/business";


function AppRoutes() {
  return (
    <Routes>
      {/* Public Pages for Students & Instructors */}
      <Route path="/" element={<StudentViewCommonLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<StudentHomePage />} />
        <Route path="instructor-home" element={<InstructorHomePage />} />
        <Route path="instructor-auth" element={<InstructorAuthPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="business" element={<BusinessPage />} />
        <Route path="courses" element={<StudentViewCoursesPage />} />
        <Route path="course/details/:id" element={<StudentViewCourseDetailsPage />} />
        <Route path="payment-return" element={<PaypalPaymentReturnPage />} />
        <Route path="student-courses" element={<StudentCoursesPage />} />
        <Route path="course-progress/:id" element={<StudentViewCourseProgressPage />} />
      </Route>

      {/* Legal Pages with Sidebar Layout */}
      <Route path="/legal" element={<LegalLayout />}>
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="disclaimer" element={<Disclaimer />} />
      </Route>

      {/* Auth Page */}
      <Route path="/auth" element={<AuthPage />} />

      {/* Instructor Dashboard Routes */}
      <Route path="/instructor" element={<InstructorDashboardPage />} />
      <Route path="/instructor/create-new-course" element={<AddNewCoursePage />} />
      <Route path="/instructor/edit-course/:courseId" element={<AddNewCoursePage />} />

      {/* 404 Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;