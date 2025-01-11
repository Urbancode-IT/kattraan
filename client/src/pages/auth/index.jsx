import React, { useContext, useState } from "react";
import Swal from "sweetalert2";

import header from "@/components/student-view/header";
import footer from "@/components/student-view/footer";
import CommonForm from "@/components/common-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls } from "@/config";
import { AuthContext } from "@/context/auth-context";

import Illustration from "@/assets/illustration.png"; // Add your image path here

function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");
  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
    handleLoginUser,
  } = useContext(AuthContext);

  function handleTabChange(value) {
    setActiveTab(value);
  }

  function checkIfSignInFormIsValid() {
    return (
      signInFormData &&
      signInFormData.userEmail !== "" &&
      signInFormData.password !== ""
    );
  }

  function checkIfSignUpFormIsValid() {
    return (
      signUpFormData &&
      signUpFormData.userName !== "" &&
      signUpFormData.userEmail !== "" &&
      signUpFormData.password !== "" &&
      signUpFormData.confirmPassword !== "" &&
      signUpFormData.password === signUpFormData.confirmPassword
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10">
        {React.createElement(header)}
      </header>

      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Left Section - Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <img
            src={Illustration}
            alt="Learning Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Section - Authentication Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 ">
          <div className="w-full max-w-md">
            <Tabs
              value={activeTab}
              defaultValue="signin"
              onValueChange={handleTabChange}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="signin">
                <Card className="p-6 space-y-4">
                  <CardHeader>
                    <CardTitle>Welcome Back!</CardTitle>
                    <CardDescription>
                      Enter your credentials to access your account.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CommonForm
                      formControls={signInFormControls}
                      buttonText={"Sign In"}
                      formData={signInFormData}
                      setFormData={setSignInFormData}
                      isButtonDisabled={!checkIfSignInFormIsValid()}
                      handleSubmit={handleLoginUser}
                    />
                    <div className="text-center text-sm">
                      <a href="/forgot-password" className="text-blue-500 underline">
                        Forgot your password?
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="signup">
                <Card className="p-6 space-y-4">
                  <CardHeader>
                    <CardTitle>Create an Account</CardTitle>
                    <CardDescription>
                      Fill out the details below to get started.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CommonForm
                      formControls={signUpFormControls}
                      buttonText={"Sign Up"}
                      formData={signUpFormData}
                      setFormData={setSignUpFormData}
                      isButtonDisabled={!checkIfSignUpFormIsValid()}
                      handleSubmit={handleRegisterUser}
                    />
                    <div className="text-sm text-gray-600">
                      By signing up, you agree to our{" "}
                      <a href="/terms" className="text-blue-500 underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" className="text-blue-500 underline">
                        Privacy Policy
                      </a>.
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto">
        {React.createElement(footer)}
      </footer>
    </div>
  );
}

export default AuthPage;
