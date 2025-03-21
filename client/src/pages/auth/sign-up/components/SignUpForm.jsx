// src/pages/auth/sign-up/components/SignUpForm.jsx
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CommonForm from "@/components/common-form";
import { Link } from "react-router-dom";
import { signUpFormControls  } from "@/config";  
const SignUpForm = ({ signUpFormData, setSignUpFormData, handleRegisterUser, isButtonDisabled }) => {
  return (
    <Card className="p-6 space-y-4">
      <CardHeader>
        <CardTitle>Create a new account</CardTitle>
        <CardDescription>Enter your details to get started</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <CommonForm
          formControls={signUpFormControls}
          buttonText={"Sign Up"}
          formData={signUpFormData}
          setFormData={setSignUpFormData}
          isButtonDisabled={isButtonDisabled}
          handleSubmit={handleRegisterUser}
        />
      </CardContent>
      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600">Sign In</Link>
        </p>
      </div>
    </Card>
  );
};

export default SignUpForm;
