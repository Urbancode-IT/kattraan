
import Header from "@/components/student-view/header";
import Footer from "@/components/student-view/footer";
import UpdateProfileForm from "../../components/auth/UpdateProfileForm";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <UpdateProfileForm />
      </div>
      <Footer />
    </>
  );
}
