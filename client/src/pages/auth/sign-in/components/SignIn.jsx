// src/pages/auth/sign-in/components/SignIn.jsx
import React from "react";
import CommonForm from "@/components/common-form";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { signInFormControls } from "@/config";  // Adjust the path according to where config.js is located


const SignIn = ({ signInFormData, setSignInFormData, handleLoginUser, isButtonDisabled }) => {
  return (
    <Card className="p-6 space-y-4">
      <CardHeader>
        <CardTitle>Sign in to your account</CardTitle>
        <CardDescription>Enter your email and password to access your account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <CommonForm
          formControls={signInFormControls}
          buttonText={"Sign In"}
          formData={signInFormData}
          setFormData={setSignInFormData}
          isButtonDisabled={isButtonDisabled}
          handleSubmit={handleLoginUser}
        />
      </CardContent>
      <div className="mt-4 text-center">
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600">Sign Up</Link>
        </p>
      </div>
    </Card>
  );
};

export default SignIn;
