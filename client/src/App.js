import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./components/loginform";
import SignUpForm from "./components/signup";
import ForgotPassword from "./components/forgotpassword";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route to Login */}
        <Route path="/" element={<Navigate to="/login" />} />
        {/* Login, Signup, and Forgot Password Routes */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        {/* Fallback for undefined routes */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
