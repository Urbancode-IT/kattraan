import Sidebar from "../student-view/sidebar";
import Topbar from "../student-view/header";
import Footer from "../student-view/footer";

export default function StudentDashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Topbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
