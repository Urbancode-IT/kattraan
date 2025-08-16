import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

// Pages and Components
import AuthPage from "../pages/auth";
import InstructorAuthPage from "../pages/instructor-auth";
import RouteGuard from "../components/route-guard";
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

// Auth Pages
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import ProfilePage from "../pages/auth/ProfilePage";
import VerifyEmailPage from "../pages/auth/VerifyEmailPage";
import ChangePasswordPage from "../pages/auth/ChangePasswordPage";
import TwoFactorPage from "../pages/auth/TwoFactorPage";
import NotificationPage from "../pages/auth/NotificationPage";
import ReportIssuePage from "../pages/auth/ReportIssuePage";
import SessionsPage from "../pages/auth/SessionsPage";
import DevicesPage from "../pages/auth/DevicesPage";
import PreferencesPage from "../pages/auth/PreferencesPage";

function AppRoutes() {
  const { auth } = useContext(AuthContext);

  return (
    <Routes>
      {/* Role-Based Smart Redirect */}
      <Route
        path="/redirect"
        element={
          auth?.authenticate ? (
            auth?.user?.roles?.includes("instructor") ? (
              <Navigate to="/instructor" replace />
            ) : (
              <Navigate to="/home" replace />
            )
          ) : (
            <Navigate to="/auth/login" replace />
          )
        }
      />

      {/* Public Pages for Students & Instructors */}
      <Route path="/" element={<StudentViewCommonLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<StudentHomePage />} />
        <Route path="instructor-home" element={<InstructorHomePage />} />
        <Route path="instructor-auth" element={<InstructorAuthPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      {/* Legal Pages with Sidebar Layout */}
      <Route path="/legal" element={<LegalLayout />}>
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="disclaimer" element={<Disclaimer />} />
      </Route>

      {/* Auth Pages */}
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
      <Route path="/auth/profile" element={<ProfilePage />} />
      <Route path="/auth/verify-email" element={<VerifyEmailPage />} />
      <Route path="/auth/change-password" element={<ChangePasswordPage />} />
      <Route path="/auth/2fa" element={<TwoFactorPage />} />
      <Route path="/auth/notifications" element={<NotificationPage />} />
      <Route path="/auth/report-issue" element={<ReportIssuePage />} />
      <Route path="/auth/sessions" element={<SessionsPage />} />
      <Route path="/auth/devices" element={<DevicesPage />} />
      <Route path="/auth/preferences" element={<PreferencesPage />} />

      {/* Instructor Dashboard Routes */}
      <Route
        path="/instructor"
        element={
          <RouteGuard
            element={<InstructorDashboardPage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      <Route
        path="/instructor/create-new-course"
        element={
          <RouteGuard
            element={<AddNewCoursePage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      <Route
        path="/instructor/edit-course/:courseId"
        element={
          <RouteGuard
            element={<AddNewCoursePage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />

      {/* Student Authenticated Pages */}
      <Route
        path="/"
        element={
          <RouteGuard
            element={<StudentViewCommonLayout />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      >
        <Route path="courses" element={<StudentViewCoursesPage />} />
        <Route path="course/details/:id" element={<StudentViewCourseDetailsPage />} />
        <Route path="payment-return" element={<PaypalPaymentReturnPage />} />
        <Route path="student-courses" element={<StudentCoursesPage />} />
        <Route path="course-progress/:id" element={<StudentViewCourseProgressPage />} />
      </Route>

      {/* 404 Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
