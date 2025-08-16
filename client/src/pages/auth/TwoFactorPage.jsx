
import Header from "@/components/student-view/header";
import Footer from "@/components/student-view/footer";
import TwoFactorForm from "../../components/auth/TwoFactorForm";

export default function TwoFactorPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <TwoFactorForm />
      </div>
      <Footer />
    </>
  );
}
