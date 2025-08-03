
import Header from "@/components/student-view/header";
import Footer from "@/components/student-view/footer";
import RegisterForm from "../../components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <RegisterForm />
      </div>
      <Footer />
    </>
  );
}
