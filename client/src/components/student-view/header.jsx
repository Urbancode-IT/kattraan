import { Search, User, ShoppingCart, Globe } from "lucide-react";
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
    <header className="w-full sticky top-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center gap-2 px-1 py-2">
        {/* Logo */}
        <Link
          to="/home"
          className="flex items-center text-gray-900 font-extrabold text-2xl tracking-tight mr-2"
        >
          <span className="mr-1">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <rect
                width="32"
                height="32"
                rx="8"
                fill="#fff"
              />
              <path
                d="M8 24V8h16v16"
                fill="#fff"
              />
              <path
                d="M8 24V8h16v16"
                stroke="#A435F0"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="12"
                y="16"
                width="8"
                height="8"
                rx="2"
                fill="#A435F0"
              />
            </svg>
          </span>
          Kattraan
        </Link>
        {/* Explore */}
        <div className="relative">
          <Button
            variant="ghost"
            className="font-semibold text-gray-700 hover:text-purple-700 px-3"
            onClick={() =>
              setDropdownOpen(
                dropdownOpen === "explore" ? null : "explore"
              )
            }
          >
            Explore
            <svg
              className={`w-4 h-4 ml-1 transition-transform ${
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
                    className="text-left text-sm hover:text-purple-700 transition"
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
        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex-1 flex justify-center mx-2"
        >
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search for anything"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 bg-white rounded-full px-5 py-2 text-base focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
            />
            <button
              type="submit"
              className="absolute right-3 top-2 text-purple-600 hover:text-purple-800"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>
        {/* Nav Links */}
        <Button
          variant="ghost"
          className="font-semibold text-gray-700 hover:text-purple-700 px-3 hidden xl:inline-block"
          onClick={() => navigate("/pricing")}
        >
          Plans & Pricing
        </Button>
          <Button
            variant="ghost"
            className="font-semibold text-gray-700 hover:text-purple-700 px-3 hidden xl:inline-block"
            onClick={() => navigate("/business")}
          >
            Kattraan Business
          </Button>
        <Button
          variant="ghost"
          className="font-semibold text-gray-700 hover:text-purple-700 px-3 hidden xl:inline-block"
          onClick={() => navigate("/instructor-home")}
        >
          Teach on Kattraan
        </Button>
        {/* Cart Icon */}
        <button className="ml-2 p-2 rounded-full hover:bg-gray-100 transition">
          <ShoppingCart className="w-5 h-5 text-gray-700" />
        </button>
        {/* Language Selector */}
        <button className="ml-2 flex items-center gap-1 p-2 rounded-full hover:bg-gray-100 transition">
          <Globe className="w-5 h-5 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">EN</span>
        </button>
        {/* Auth Buttons */}
        {!auth.authenticate ? (
          <>
            <Button
              onClick={() => navigate("/auth")}
              className="font-semibold border border-purple-600 text-purple-700 bg-white hover:bg-purple-50 px-5 py-2 rounded-full ml-2"
            >
              Log in
            </Button>
            <Button
              onClick={() => navigate("/auth")}
              className="font-semibold bg-purple-600 text-white hover:bg-purple-700 px-5 py-2 rounded-full ml-2"
            >
              Sign up
            </Button>
          </>
        ) : (
          <div className="relative ml-2">
            <div
              className={`w-9 h-9 flex items-center justify-center rounded-full text-white font-bold cursor-pointer shadow-lg ring-2 ring-purple-200 ${bgColor}`}
              onClick={() =>
                setDropdownOpen(
                  dropdownOpen === "user" ? null : "user"
                )
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
    </header>
  );
}

export default StudentViewCommonHeader;
