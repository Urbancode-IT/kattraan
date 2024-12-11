import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/Home';
import LoginForm from '../components/Loginform'; // Make sure the component name and file name match exactly
import SignUp from '../components/Signup'; // Ensure file name case sensitivity is correct
import ForgotPassword from '../components/Forgotpassword'; // Ensure file name case sensitivity is correct

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* Handling unmatched routes, redirect to home page */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRouter;
