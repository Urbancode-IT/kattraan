import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context";

// Pages and Components
import AuthPage from "./pages/auth";
import InstructorAuthPage from "./pages/instructor-auth";
import RouteGuard from "./components/route-guard";
import InstructorDashboardPage from "./pages/instructor";
import StudentViewCommonLayout from "./components/student-view/common-layout";
import StudentHomePage from "./pages/student/home";
import InstructorHomePage from "./pages/instructor/home";
import NotFoundPage from "./pages/not-found";
import AddNewCoursePage from "./pages/instructor/add-new-course";
import StudentViewCoursesPage from "./pages/student/courses";
import StudentViewCourseDetailsPage from "./pages/student/course-details";
import PaypalPaymentReturnPage from "./pages/student/payment-return";
import StudentCoursesPage from "./pages/student/student-courses";
import StudentViewCourseProgressPage from "./pages/student/course-progress";

// Legal Pages
import LegalLayout from "./pages/legal/legal-layout";
import Terms from "./pages/legal/terms";
import Privacy from "./pages/legal/privacy";
import Disclaimer from "./pages/legal/disclaimer";
import ContactPage from "./pages/contact";


function App() {
  const { auth } = useContext(AuthContext);

  return (
    <Routes>

      {/* ✅ Role-Based Smart Redirect */}
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
            <Navigate to="/auth" replace />
          )
        }
      />

      {/* ✅ Public Pages for Students & Instructors */}
      <Route path="/" element={<StudentViewCommonLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<StudentHomePage />} />
        <Route path="instructor-home" element={<InstructorHomePage />} />
        <Route path="instructor-auth" element={<InstructorAuthPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      {/* ✅ Legal Pages with Sidebar Layout */}
      <Route path="/legal" element={<LegalLayout />}>
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="disclaimer" element={<Disclaimer />} />
      </Route>

      {/* 🔐 Auth Page */}
      <Route
        path="/auth"
        element={
          <RouteGuard
            element={<AuthPage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />

      {/* 🔐 Instructor Dashboard Routes */}
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

      {/* 🔐 Student Authenticated Pages */}
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

export default App;
