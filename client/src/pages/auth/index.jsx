import CommonForm from "@/components/common-form";
import { AuthContext } from "@/context/auth-context";
import { useContext, useState } from "react";
// Importing images for avatars and the element visual
import avatar1 from "../../assets/avatar/01.jpg";
import avatar2 from "../../assets/avatar/02.jpg";
import avatar3 from "../../assets/avatar/03.jpg";
import avatar4 from "../../assets/avatar/04.jpg";
import elementImg from "../../assets/element/02.svg";
import { signInFormControls, signUpFormControls } from "@/config";  // Ensure the import is correct

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
      signUpFormData.password !== ""
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-light">
      <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center text-center bg-[#e6f0f9]">
          <h2 className="text-4xl font-bold text-[#333] mb-4">Welcome to our largest community</h2>
          <p className="text-lg text-[#777] mb-4">Let's learn something new today!</p>
          

          {/* Set SVG image as background */}
          <div
            className="bg-cover bg-center h-80 w-full mb-8"
            style={{ backgroundImage: `url(${elementImg})` }}
          />

          {/* Avatar Group */}
          <div className="flex justify-center items-center mt-5">
            <ul className="flex mb-2">
              <li className="w-10 h-10 rounded-full mr-2">
                <img className="w-full h-full rounded-full" src={avatar1} alt="avatar" />
              </li>
              <li className="w-10 h-10 rounded-full mr-2">
                <img className="w-full h-full rounded-full" src={avatar2} alt="avatar" />
              </li>
              <li className="w-10 h-10 rounded-full mr-2">
                <img className="w-full h-full rounded-full" src={avatar3} alt="avatar" />
              </li>
              <li className="w-10 h-10 rounded-full mr-2">
                <img className="w-full h-full rounded-full" src={avatar4} alt="avatar" />
              </li>
            </ul>
            <p className="text-[#777]">4k+ Students joined us, now it's your turn.</p>
          </div>
        </div>

        {/* Right Column: SignIn/SignUp Forms */}
        <div className="w-full md:w-1/2 p-6 flex justify-center items-center">
          <div className="w-full max-w-md">
            {/* Sign In Form */}
            {activeTab === "signin" && (
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold">Sign in to your account</h3>
                <p className="text-base text-[#777]">Enter your email and password to access your account.</p>
              </div>
            )}
            {/* Sign Up Form */}
            {activeTab === "signup" && (
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold">Create a new account</h3>
                <p className="text-base text-[#777]">Enter your details to get started.</p>
              </div>
            )}

            <div className="bg-white p-6 rounded-lg shadow-md">
              <CommonForm
                formControls={activeTab === "signin" ? signInFormControls : signUpFormControls}
                buttonText={activeTab === "signin" ? "Sign In" : "Sign Up"}
                formData={activeTab === "signin" ? signInFormData : signUpFormData}
                setFormData={activeTab === "signin" ? setSignInFormData : setSignUpFormData}
                isButtonDisabled={
                  activeTab === "signin" ? !checkIfSignInFormIsValid() : !checkIfSignUpFormIsValid()
                }
                handleSubmit={activeTab === "signin" ? handleLoginUser : handleRegisterUser}
              />

              {/* Switch between Sign In and Sign Up */}
              <div className="text-center mt-4">
                <p className="text-sm text-[#777]">
                  {activeTab === "signin"
                    ? "Don't have an account?"
                    : "Already have an account?"}{" "}
                  <button
                    onClick={() => setActiveTab(activeTab === "signin" ? "signup" : "signin")}
                    className="text-[#0066cc] underline"
                  >
                    {activeTab === "signin" ? "Create one" : "Sign In"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
