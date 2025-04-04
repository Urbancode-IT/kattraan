import {
  GraduationCap,
  TvMinimalPlay,
  Search,
  User,
  Menu,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/auth-context";
import { courseCategories } from "@/config";

function getRandomBgColor(seed) {
  const colors = [
    "bg-red-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-blue-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-orange-200",
    "bg-teal-200",
  ];
  return colors[seed.charCodeAt(0) % colors.length];
}

function StudentViewCommonHeader() {
  const navigate = useNavigate();
  const { auth, resetCredentials } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const userName = auth.user?.userName || "User";
  const userEmail = auth.user?.userEmail || "email@example.com";
  const userInitial = userName.charAt(0).toUpperCase();
  const bgColor = getRandomBgColor(userInitial);

  const handleLogout = () => {
    resetCredentials();
    sessionStorage.clear();
    navigate("/auth");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    setSearchQuery("");
  };

  const handleNavigateToCoursesPage = (categoryId) => {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      category: [categoryId],
    };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate("/courses");
  };

  return (
    <header className="w-full bg-white border-b shadow-sm px-4 sm:px-6 py-3 flex items-center justify-between relative z-50">
      {/* LEFT: Logo + Explore Dropdown */}
      <div className="flex items-center gap-4">
        <Link
          to="/home"
          className="flex items-center text-black hover:text-blue-700 transition"
        >
          <GraduationCap className="h-7 w-7 mr-1" />
          <span className="font-extrabold text-lg sm:text-xl">Kattraan</span>
        </Link>

        {/* Explore Dropdown */}
        <div className="relative">
          <Button
            variant="ghost"
            className="flex items-center gap-1"
            onClick={() =>
              setDropdownOpen(dropdownOpen === "explore" ? null : "explore")
            }
          >
            Explore Courses
            <svg
              className={`w-4 h-4 transition-transform ${
                dropdownOpen === "explore" ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12a.75.75 0 01-.53-.22l-4-4a.75.75 0 111.06-1.06L10 10.19l3.47-3.47a.75.75 0 111.06 1.06l-4 4A.75.75 0 0110 12z"
                clipRule="evenodd"
              />
            </svg>
          </Button>

          {dropdownOpen === "explore" && (
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 z-50">
              <div className="grid grid-cols-1 gap-2">
                {courseCategories.map((category) => (
                  <button
                    key={category.id}
                    className="text-left text-sm hover:text-blue-600 transition"
                    onClick={() => {
                      handleNavigateToCoursesPage(category.id);
                      setDropdownOpen(null);
                    }}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CENTER: Search */}
      <form
        onSubmit={handleSearch}
        className="relative w-32 sm:w-48 md:w-64 lg:w-72"
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border border-gray-300 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="absolute right-3 top-2 text-gray-500 hover:text-black"
        >
          <Search className="w-4 h-4" />
        </button>
      </form>

      {/* RIGHT: Auth & User Section */}
      <div className="hidden sm:flex items-center space-x-4 relative">
        <Button variant="outline" onClick={() => navigate("/instructor-home")}>
          Teach Me Kattraan
        </Button>

        {auth.authenticate && (
          <div
            onClick={() => navigate("/student-courses")}
            className="flex items-center gap-2 cursor-pointer text-sm sm:text-base hover:text-blue-700"
          >
            <span className="font-semibold">My Courses</span>
            <TvMinimalPlay className="w-5 h-5" />
          </div>
        )}

        {!auth.authenticate ? (
          <Button onClick={() => navigate("/auth")}>Sign In</Button>
        ) : (
          <div className="relative">
            <div
              className={`w-9 h-9 flex items-center justify-center rounded-full text-white font-bold cursor-pointer ${bgColor}`}
              onClick={() =>
                setDropdownOpen(dropdownOpen === "user" ? null : "user")
              }
            >
              {userInitial}
            </div>
            {dropdownOpen === "user" && (
              <ul className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-md p-3 space-y-2 z-50 text-sm">
                <li className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span className="font-semibold">{userName}</span>
                </li>
                <li className="text-gray-600 truncate">{userEmail}</li>
                <li className="border-t pt-2">
                  <Button
                    className="w-full"
                    variant="destructive"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </Button>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>

      {/* MOBILE MENU */}
      <div className="flex items-center gap-3 sm:hidden">
        {!auth.authenticate ? (
          <Button
            onClick={() => navigate("/auth")}
            className="text-sm px-4 py-1.5"
          >
            Sign In
          </Button>
        ) : (
          <div
            className={`w-9 h-9 flex items-center justify-center rounded-full text-white font-bold cursor-pointer ${bgColor}`}
            onClick={() =>
              setDropdownOpen(dropdownOpen === "user" ? null : "user")
            }
          >
            {userInitial}
          </div>
        )}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md border-t sm:hidden z-40 px-6 py-4 space-y-3">
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => {
              navigate("/courses");
              setMenuOpen(false);
            }}
          >
            Explore Courses
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={() => {
              navigate("/instructor-home");
              setMenuOpen(false);
            }}
          >
            Teach Me Kattraan
          </Button>

          {auth.authenticate && (
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                navigate("/student-courses");
                setMenuOpen(false);
              }}
            >
              My Courses
            </Button>
          )}
        </div>
      )}
    </header>
  );
}

export default StudentViewCommonHeader;
