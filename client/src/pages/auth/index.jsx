import CommonForm from "@/components/common-form";
import { AuthContext } from "@/context/auth-context";
import { useContext, useState } from "react";
import { signInFormControls, signUpFormControls } from "@/config";
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar1 from "../../assets/avatar/01.jpg";
import avatar2 from "../../assets/avatar/02.jpg";
import avatar3 from "../../assets/avatar/03.jpg";
import avatar4 from "../../assets/avatar/04.jpg";
import elementImg from "../../assets/element/02.svg";

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

  const checkIfSignInFormIsValid = () =>
    signInFormData.userEmail && signInFormData.password;

  const checkIfSignUpFormIsValid = () =>
    signUpFormData.userName &&
    signUpFormData.userEmail &&
    signUpFormData.password &&
    signUpFormData.password === signUpFormData.confirmPassword;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Panel */}
        <div className="hidden md:flex md:w-1/2 flex-col justify-center items-center bg-blue-100 p-8">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Welcome to our largest community</h2>
          <p className="text-gray-700 mb-6">Let’s learn something new today!</p>
          <div className="w-full h-80 bg-cover bg-center mb-6" style={{ backgroundImage: `url(${elementImg})` }}></div>
          <div className="flex gap-2 items-center">
            {[avatar1, avatar2, avatar3, avatar4].map((avatar, index) => (
              <img key={index} src={avatar} className="w-10 h-10 rounded-full" />
            ))}
            <p className="text-gray-700">4k+ Students joined us</p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">
              {activeTab === "signin" ? "Sign in to your account" : "Create a new account"}
            </h3>
            <p className="text-sm text-gray-500">
              {activeTab === "signin"
                ? "Enter your credentials to access your account."
                : "Fill the details to get started."}
            </p>
          </div>

          <CommonForm
            formControls={activeTab === "signin" ? signInFormControls : signUpFormControls}
            buttonText={activeTab === "signin" ? "Sign In" : "Sign Up"}
            formData={activeTab === "signin" ? signInFormData : signUpFormData}
            setFormData={activeTab === "signin" ? setSignInFormData : setSignUpFormData}
            isButtonDisabled={
              activeTab === "signin"
                ? !checkIfSignInFormIsValid()
                : !checkIfSignUpFormIsValid()
            }
            handleSubmit={activeTab === "signin" ? handleLoginUser : handleRegisterUser}
          />

          <div className="text-center mt-5">
            <p className="text-sm text-gray-500">
              {activeTab === "signin" ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => setActiveTab(activeTab === "signin" ? "signup" : "signin")}
              >
                {activeTab === "signin" ? "Create one" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
