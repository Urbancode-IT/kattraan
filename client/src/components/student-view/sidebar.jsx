import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/home", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/student-courses", label: "My Courses" },
  { to: "/course-progress", label: "Progress" },
  { to: "/auth/profile", label: "Profile" },
];

export default function StudentSidebar() {
  const location = useLocation();
  return (
    <aside className="w-64 bg-white border-r min-h-full p-4">
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`px-4 py-2 rounded hover:bg-blue-100 transition font-medium ${location.pathname.startsWith(link.to) ? "bg-blue-50 text-blue-700" : "text-gray-700"}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
