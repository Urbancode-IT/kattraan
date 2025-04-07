import { Skeleton } from "@/components/ui/skeleton";
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import {
  checkAuthService,
  loginService,
  registerService,
  becomeInstructorService,
} from "@/services";
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

  // ✅ Register Handler
  const handleRegisterUser = async (event, onSuccessNavigateToSignIn) => {
    event.preventDefault();
    try {
      const formData = { ...signUpFormData };
      const data = await registerService(formData);

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "Redirecting to Sign In...",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        });

        setTimeout(() => {
          // ✅ Refresh the page after registration
          window.location.reload();
        }, 2000);
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

  // ✅ Login Handler
  const handleLoginUser = async (event) => {
    event.preventDefault();
    try {
      const data = await loginService(signInFormData);

      if (data.success) {
        const user = data.data.user;
        const token = data.data.accessToken;

        sessionStorage.setItem("accessToken", JSON.stringify(token));
        setAuth({ authenticate: true, user });

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Redirecting...",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        });

        setTimeout(() => {
          if (user?.roles?.includes("admin")) {
            navigate("/admin");
          } else if (user?.roles?.includes("instructor")) {
            navigate("/redirect");
          } else {
            navigate("/home");
          }
        }, 2000);
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

  // ✅ Become Instructor Handler
  const handleBecomeInstructor = async ({ userEmail, userName, password }) => {
    try {
      const data = await becomeInstructorService({
        userEmail,
        userName,
        password,
      });

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "You are now an Instructor",
          text: "Redirecting to dashboard...",
          timer: 2000,
          showConfirmButton: false,
        });

        // Update roles
        await checkAuthUser();
        setTimeout(() => navigate("/redirect"), 2000);
      } else {
        Swal.fire({
          icon: "info",
          title: "Info",
          text: data.message || "Already an instructor",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error?.response?.data?.message ||
          "Something went wrong while upgrading role.",
      });
    }
  };

  // ✅ Auth Check on Load
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
        handleBecomeInstructor,
        auth,
        resetCredentials,
      }}
    >
      {loading ? <Skeleton /> : children}
    </AuthContext.Provider>
  );
}
