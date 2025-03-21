import { Navigate, useLocation } from "react-router-dom";
import { Fragment } from "react";

function RouteGuard({ authenticated, user, element }) {
  const location = useLocation();

  console.log(authenticated, user, "useruser");

  // Check if user is authenticated
  if (!authenticated && !location.pathname.includes("/auth")) {
    return <Navigate to="/auth" />;
  }

  // If user is authenticated and their role is not instructor, prevent access to instructor-related pages
  if (
    authenticated &&
    user?.role !== "instructor" &&
    (location.pathname.includes("instructor") || location.pathname.includes("/auth"))
  ) {
    return <Navigate to="/home" />;
  }

  // If the user is an instructor and they are not accessing instructor-related pages
  if (
    authenticated &&
    user?.role === "instructor" &&
    !location.pathname.includes("instructor")
  ) {
    return <Navigate to="/instructor" />;
  }

  // If the user is not authenticated and trying to access /auth, allow access
  if (authenticated && location.pathname.includes("/auth")) {
    return <Navigate to="/home" />;
  }

  return <Fragment>{element}</Fragment>;  
}

export default RouteGuard;

