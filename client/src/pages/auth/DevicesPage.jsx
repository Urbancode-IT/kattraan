import Header from "@/components/student-view/header";
import Footer from "@/components/student-view/footer";

export default function DevicesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Trusted Devices</h2>
          <p>List of your trusted devices will appear here.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
