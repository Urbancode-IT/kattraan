import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context";
import RouteGuard from "./components/route-guard";

// Instructor Pages
import InstructorDashboardpage from "./pages/instructor";
import AddNewCoursePage from "./pages/instructor/add-new-course";

// Student Pages
import StudentViewCommonLayout from "./components/student-view/common-layout";
import StudentHomePage from "./pages/student/home";
import StudentViewCoursesPage from "./pages/student/courses";
import StudentViewCourseDetailsPage from "./pages/student/course-details";
import PaypalPaymentReturnPage from "./pages/student/payment-return";
import StudentCoursesPage from "./pages/student/student-courses";
import StudentViewCourseProgressPage from "./pages/student/course-progress";

// Auth Pages
import SignInPage from "@/pages/auth/sign-in/page"; 
import SignUpPage from "@/pages/auth/sign-up/page"; 

import NotFoundPage from "./pages/not-found";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <Routes>
      {/* Auth Routes - User should not be able to access SignIn/SignUp if authenticated */}
      <Route
        path="/auth"
        element={<RouteGuard element={<SignInPage />} authenticated={auth?.authenticate} user={auth?.user} />}
      />
      <Route
        path="/signin"
        element={
          <RouteGuard
            element={<SignInPage />}
            authenticated={!auth?.authenticate}  
                        user={auth?.user}
          />
        }
      />
      <Route
        path="/signup"
        element={
          <RouteGuard
            element={<SignUpPage />}
            authenticated={!auth?.authenticate} 
            user={auth?.user}
          />
        }
      />

      {/* Instructor Routes */}
      <Route
        path="/instructor"
        element={<RouteGuard element={<InstructorDashboardpage />} authenticated={auth?.authenticate} user={auth?.user} />}
      />
      <Route
        path="/instructor/create-new-course"
        element={<RouteGuard element={<AddNewCoursePage />} authenticated={auth?.authenticate} user={auth?.user} />}
      />
      <Route
        path="/instructor/edit-course/:courseId"
        element={<RouteGuard element={<AddNewCoursePage />} authenticated={auth?.authenticate} user={auth?.user} />}
      />

      {/* Student Routes */}
      <Route
        path="/"
        element={<RouteGuard element={<StudentViewCommonLayout />} authenticated={auth?.authenticate} user={auth?.user} />}
      >
        <Route path="" element={<StudentHomePage />} />
        <Route path="home" element={<StudentHomePage />} />
        <Route path="courses" element={<StudentViewCoursesPage />} />
        <Route path="course/details/:id" element={<StudentViewCourseDetailsPage />} />
        <Route path="payment-return" element={<PaypalPaymentReturnPage />} />
        <Route path="student-courses" element={<StudentCoursesPage />} />
        <Route path="course-progress/:id" element={<StudentViewCourseProgressPage />} />
      </Route>

      {/* Catch-all Route for Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
