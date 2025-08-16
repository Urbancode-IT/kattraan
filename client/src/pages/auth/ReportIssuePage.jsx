
import Header from "@/components/student-view/header";
import Footer from "@/components/student-view/footer";
import ReportIssueForm from "../../components/auth/ReportIssueForm";

export default function ReportIssuePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <ReportIssueForm />
      </div>
      <Footer />
    </>
  );
}
