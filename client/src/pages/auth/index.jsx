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
import Header from "@/components/student-view/header";


function AuthPage() {
  const [activeTab, setActiveTab] = useState("signup");

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

  const checkIfSignUpFormIsValid = () => {
    const { userName, userEmail, password, confirmPassword } = signUpFormData;

    const isNotEmpty = (value) => value && value.trim() !== '';
    const isValidEmail = (email) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isStrongPassword = (pwd) => pwd.length >= 6;

    return (
      isNotEmpty(userName) &&
      isValidEmail(userEmail) &&
      isStrongPassword(password) &&
      password === confirmPassword
    );
  };

  const handleVoiceCommand = ({ type, value }) => {
    if (type === "switch-tab") {
      setActiveTab(value === "sign up" ? "signup" : "signin");
    } else if (type === "set-email") {
      const setter = activeTab === "signin" ? setSignInFormData : setSignUpFormData;
      setter(prev => ({ ...prev, userEmail: value }));
    } else if (type === "set-password") {
      const setter = activeTab === "signin" ? setSignInFormData : setSignUpFormData;
      setter(prev => ({ ...prev, password: value }));
    } else if (type === "set-confirm-password") {
      setSignUpFormData(prev => ({ ...prev, confirmPassword: value }));
    } else if (type === "set-name") {
      setSignUpFormData(prev => ({ ...prev, userName: value }));
    } else if (type === "submit") {
      activeTab === "signin" ? handleLoginUser() : handleRegisterUser();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fa]">
      <Header />
      <div className="flex flex-1 justify-center items-center py-8">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden border border-gray-200">
          {/* Left Panel: Illustration */}
          <div className="hidden md:flex md:w-1/2 items-center justify-center bg-white p-10">
            <div className="w-full flex justify-center items-center">
              <img 
                src={elementImg} 
                alt="Sign up illustration" 
                className="w-[380px] h-[340px] max-w-full mx-auto drop-shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:rotate-[-3deg] animate-hero3d"
                style={{ perspective: '800px' }}
              />
            </div>
            <style>{`
              @keyframes hero3d {
                0% { transform: scale(1) rotateY(-8deg) rotateX(2deg); }
                50% { transform: scale(1.04) rotateY(8deg) rotateX(-2deg); }
                100% { transform: scale(1) rotateY(-8deg) rotateX(2deg); }
              }
              .animate-hero3d {
                animation: hero3d 4s ease-in-out infinite;
                will-change: transform;
              }
            `}</style>
          </div>
          {/* Right Panel: Auth Form */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16">
            <div className="mb-8">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2 text-left">
                {activeTab === "signin" ? "Sign in with email" : "Sign up with email"}
              </h3>
            </div>
            <CommonForm
              formControls={activeTab === "signin" ? signInFormControls : signUpFormControls}
              buttonText={activeTab === "signin" ? "Continue with email" : "Continue with email"}
              formData={activeTab === "signin" ? signInFormData : signUpFormData}
              setFormData={activeTab === "signin" ? setSignInFormData : setSignUpFormData}
              isButtonDisabled={
                activeTab === "signin"
                  ? !checkIfSignInFormIsValid()
                  : !checkIfSignUpFormIsValid()
              }
              handleSubmit={activeTab === "signin" ? handleLoginUser : handleRegisterUser}
              buttonClassName="w-full bg-[#A435F0] hover:bg-[#8710d8] text-white font-bold py-2 rounded-md mt-2"
            />
            {/* Offers and tips */}
            <div className="flex items-center mt-3 mb-4">
              <input type="checkbox" defaultChecked className="accent-purple-600 mr-2" id="offers" />
              <label htmlFor="offers" className="text-sm text-gray-700">Send me special offers, personalized recommendations, and learning tips.</label>
            </div>
            {/* Social login */}
            <div className="flex flex-col items-center my-4">
              <div className="w-full flex items-center mb-4">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="mx-4 text-gray-400 text-sm">Other sign up options</span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>
              <div className="flex gap-4 mb-2">
                <button className="border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-6 h-6" /></button>
                <button className="border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="w-6 h-6" /></button>
                <button className="border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="Apple" className="w-6 h-6" /></button>
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">
                By signing up, you agree to our <a href="#" className="text-purple-600 hover:underline">Terms of Use</a> and <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>.
              </div>
            </div>
            {/* Switch tab */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-700">
                {activeTab === "signin" ? "Don't have an account?" : "Already have an account?"}
                <button
                  className="ml-2 text-purple-700 hover:underline font-semibold"
                  onClick={() => setActiveTab(activeTab === "signin" ? "signup" : "signin")}
                >
                  {activeTab === "signin" ? "Sign up" : "Log in"}
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

export default AuthPage;
