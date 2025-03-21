// src/pages/auth/sign-in/page.jsx
import React, { useContext, useState } from 'react';
import SignIn from './components/SignIn';
import AuthLayout from '../components/AuthLayout';
import { AuthContext } from "@/context/auth-context";



const SignInPage = () => {
  const { signInFormData, setSignInFormData, handleLoginUser } = useContext(AuthContext);

  const checkIfSignInFormIsValid = () => {
    return signInFormData && signInFormData.userEmail !== "" && signInFormData.password !== "";
  };

  return (
    <AuthLayout>
      <SignIn
        signInFormData={signInFormData}
        setSignInFormData={setSignInFormData}
        handleLoginUser={handleLoginUser}
        isButtonDisabled={!checkIfSignInFormIsValid()}
      />
    </AuthLayout>
  );
};

export default SignInPage;
