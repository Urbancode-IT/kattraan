
import Header from "@/components/student-view/header";
import Footer from "@/components/student-view/footer";
import LoginForm from "../../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LoginForm />
      </div>
      <Footer />
    </>
  );
}
