// src/pages/auth/sign-up/page.jsx
import React, { useContext, useState } from 'react';
import SignUpForm from './components/SignUpForm';
import AuthLayout from '../components/AuthLayout';
import { AuthContext } from "@/context/auth-context";

const SignUpPage = () => {
  const { signUpFormData, setSignUpFormData, handleRegisterUser } = useContext(AuthContext);

  const checkIfSignUpFormIsValid = () => {
    return signUpFormData && signUpFormData.userName !== "" && signUpFormData.userEmail !== "" && signUpFormData.password !== "";
  };

  return (
    <AuthLayout>
      <SignUpForm
        signUpFormData={signUpFormData}
        setSignUpFormData={setSignUpFormData}
        handleRegisterUser={handleRegisterUser}
        isButtonDisabled={!checkIfSignUpFormIsValid()}
      />
    </AuthLayout>
  );
};

export default SignUpPage;
