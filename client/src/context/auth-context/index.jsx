import { Skeleton } from "@/components/ui/skeleton";
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { checkAuthService, loginService, registerService } from "@/services";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState({ authenticate: false, user: null });
  const [loading, setLoading] = useState(true);

  // ✅ Math Challenge
  const [mathChallenge, setMathChallenge] = useState({ question: "", answer: "" });

  // ✅ Generate math question
  const generateMathChallenge = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setMathChallenge({
      question: `${num1} + ${num2}`,
      answer: String(num1 + num2),
    });
  };

  // ✅ Generate math question on mount
  useEffect(() => {
    generateMathChallenge();
  }, []);

  // ✅ Register Handler
  const handleRegisterUser = async (event) => {
    event.preventDefault();
    try {
      const data = await registerService(signUpFormData);
      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "Redirecting to Kattraan...",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        });

        setTimeout(() => navigate("/home"), 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: data.message || "Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text:
          error?.response?.data?.message ||
          error?.response?.data?.error ||
          "Server Error. Please try again.",
      });
      console.error("Registration error:", error);
    }
  };

  // ✅ Login Handler with Math Challenge Check
  const handleLoginUser = async (event) => {
    event.preventDefault();

    const userAnswer = String(signInFormData.mathAnswer || "").trim();
    const correctAnswer = String(mathChallenge.answer).trim();

    if (userAnswer !== correctAnswer) {
      Swal.fire({
        icon: "warning",
        title: "Incorrect Answer",
        text: "Please solve the math question correctly.",
      });
      generateMathChallenge();
      return;
    }

    try {
      const data = await loginService(signInFormData);
      if (data.success) {
        sessionStorage.setItem("accessToken", JSON.stringify(data.data.accessToken));
        setAuth({ authenticate: true, user: data.data.user });

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Redirecting to your Kattraan...",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        });

        setTimeout(() => navigate("/home"), 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: data.message || "Invalid email or password",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Error",
        text:
          error?.response?.data?.message ||
          error?.response?.data?.error ||
          "Server Error. Please try again.",
      });

      setAuth({ authenticate: false, user: null });
      console.error("Login error:", error);
    }
  };

  // ✅ Check Auth on Load
  const checkAuthUser = async () => {
    try {
      const data = await checkAuthService();
      if (data.success) {
        setAuth({ authenticate: true, user: data.data.user });
      } else {
        setAuth({ authenticate: false, user: null });
      }
    } catch {
      setAuth({ authenticate: false, user: null });
    } finally {
      setLoading(false);
    }
  };

  // ✅ Reset Credentials
  const resetCredentials = () => {
    setAuth({ authenticate: false, user: null });
  };

  useEffect(() => {
    checkAuthUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLoginUser,
        auth,
        resetCredentials,
        mathChallenge,
        generateMathChallenge,
      }}
    >
      {loading ? <Skeleton /> : children}
    </AuthContext.Provider>
  );
}
