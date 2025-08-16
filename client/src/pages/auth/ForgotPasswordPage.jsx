
import Header from "@/components/student-view/header";
import Footer from "@/components/student-view/footer";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <ForgotPasswordForm />
      </div>
      <Footer />
    </>
  );
}
