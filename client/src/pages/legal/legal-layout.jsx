import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "@/components/student-view/footer";
import Header from "@/components/student-view/header";

const links = [
  { name: "Terms & Conditions", path: "/legal/terms" },
  { name: "Privacy Policy", path: "/legal/privacy" },
  { name: "Disclaimer", path: "/legal/disclaimer" },
];

const LegalLayout = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Global Header */}
      <Header />

      {/* Legal Content Layout */}
      <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row mt-8 bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">

        {/* Sidebar */}
        <aside className="w-full md:w-72 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-100 p-6 sticky top-0 self-start">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Legal Documents</h2>
          <ul className="space-y-3 text-sm">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-4 py-2 rounded-md transition ${
                    location.pathname === link.path
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LegalLayout;
