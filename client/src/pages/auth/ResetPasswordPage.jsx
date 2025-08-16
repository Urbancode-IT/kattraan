
import Header from "@/components/student-view/header";
import Footer from "@/components/student-view/footer";
import ResetPasswordForm from "../../components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <ResetPasswordForm />
      </div>
      <Footer />
    </>
  );
}
