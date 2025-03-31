import CommonForm from "@/components/common-form";
import { AuthContext } from "@/context/auth-context";
import { useContext, useState } from "react";
import { signInFormControls, signUpFormControls } from "@/config";
import avatar1 from "../../assets/avatar/01.jpg";
import avatar2 from "../../assets/avatar/02.jpg";
import avatar3 from "../../assets/avatar/03.jpg";
import avatar4 from "../../assets/avatar/04.jpg";
import elementImg from "../../assets/element/02.svg";
import Footer from "@/components/student-view/footer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function InstructorAuthPage() {
  const [activeTab, setActiveTab] = useState("signin");

  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
    handleLoginUser,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const checkIfSignInFormIsValid = () =>
    signInFormData.userEmail && signInFormData.password;

  const checkIfSignUpFormIsValid = () =>
    signUpFormData.userName &&
    signUpFormData.userEmail &&
    signUpFormData.password &&
    signUpFormData.password === signUpFormData.confirmPassword;

  const handleInstructorRegister = (e) => handleRegisterUser(e, "instructor");

  const handleInstructorLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await handleLoginUser(e);
      if (data?.data?.user?.role?.includes("instructor")) {
        navigate("/instructor");
      } else {
        Swal.fire({
          icon: "error",
          title: "Access Denied",
          text: "You are not registered as an instructor.",
        });
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
          {/* Left Panel */}
          <div className="hidden md:flex md:w-1/2 flex-col justify-center items-center bg-purple-100 p-8">
            <h2 className="text-3xl font-bold mb-4 text-purple-800">
              Join as an Instructor
            </h2>
            <p className="text-gray-700 mb-6">
              Share your knowledge with thousands of learners!
            </p>
            <div
              className="w-full h-80 bg-cover bg-center mb-6"
              style={{ backgroundImage: `url(${elementImg})` }}
            ></div>
            <div className="flex gap-2 items-center">
              {[avatar1, avatar2, avatar3, avatar4].map((avatar, index) => (
                <img key={index} src={avatar} className="w-10 h-10 rounded-full" />
              ))}
              <p className="text-gray-700">Top instructors across the globe</p>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-1/2 p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                {activeTab === "signin"
                  ? "Instructor Login"
                  : "Instructor Sign Up"}
              </h3>
              <p className="text-sm text-gray-500">
                {activeTab === "signin"
                  ? "Log in with your instructor credentials."
                  : "Join us as an instructor by filling out your details."}
              </p>
            </div>

            <CommonForm
              formControls={
                activeTab === "signin"
                  ? signInFormControls
                  : signUpFormControls
              }
              buttonText={
                activeTab === "signin"
                  ? "Sign In"
                  : "Sign Up as Instructor"
              }
              formData={
                activeTab === "signin"
                  ? signInFormData
                  : signUpFormData
              }
              setFormData={
                activeTab === "signin"
                  ? setSignInFormData
                  : setSignUpFormData
              }
              isButtonDisabled={
                activeTab === "signin"
                  ? !checkIfSignInFormIsValid()
                  : !checkIfSignUpFormIsValid()
              }
              handleSubmit={
                activeTab === "signin"
                  ? handleInstructorLogin
                  : handleInstructorRegister
              }
            />

            <div className="text-center mt-5">
              <p className="text-sm text-gray-500">
                {activeTab === "signin"
                  ? "New instructor?"
                  : "Already have an instructor account?"}{" "}
                <button
                  className="text-purple-600 hover:underline"
                  onClick={() =>
                    setActiveTab(
                      activeTab === "signin" ? "signup" : "signin"
                    )
                  }
                >
                  {activeTab === "signin" ? "Create one" : "Sign In"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InstructorAuthPage;
