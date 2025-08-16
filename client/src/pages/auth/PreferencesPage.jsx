
import Header from "@/components/student-view/header";
import Footer from "@/components/student-view/footer";
import PreferencesForm from "../../components/auth/PreferencesForm";

export default function PreferencesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <PreferencesForm />
      </div>
      <Footer />
    </>
  );
}
