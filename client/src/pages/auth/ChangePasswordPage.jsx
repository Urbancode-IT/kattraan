
import Header from "@/components/student-view/header";
import Footer from "@/components/student-view/footer";
import ChangePasswordForm from "../../components/auth/ChangePasswordForm";

export default function ChangePasswordPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <ChangePasswordForm />
      </div>
      <Footer />
    </>
  );
}
