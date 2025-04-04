import { Navigate, useLocation } from "react-router-dom";
import { Fragment } from "react";

function RouteGuard({ authenticated, user, element }) {
  const location = useLocation();
  const isInstructor = user?.roles?.includes("instructor");

  // 🔐 If not logged in, block access to protected routes
  if (!authenticated && !location.pathname.includes("/auth")) {
    return <Navigate to="/auth" replace />;
  }

  // ❌ Prevent non-instructor users from accessing instructor routes
  if (
    authenticated &&
    !isInstructor &&
    location.pathname.startsWith("/instructor")
  ) {
    return <Navigate to="/home" replace />;
  }

  // ✅ Allow instructor access to instructor routes
  if (authenticated && isInstructor && location.pathname.startsWith("/auth")) {
    return <Navigate to="/instructor" replace />;
  }

  return <Fragment>{element}</Fragment>;
}

export default RouteGuard;
