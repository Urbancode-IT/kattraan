import { GraduationCap, TvMinimalPlay, Search, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/auth-context";

// Function to generate random pastel background color
function getRandomBgColor(seed) {
  const colors = [
    "bg-red-200", "bg-green-200", "bg-yellow-200", "bg-blue-200",
    "bg-purple-200", "bg-pink-200", "bg-orange-200", "bg-teal-200"
  ];
  return colors[seed.charCodeAt(0) % colors.length];
}

function StudentViewCommonHeader() {
  const navigate = useNavigate();
  const { auth, resetCredentials } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  return (
    <header className="flex items-center justify-between px-6 py-3 shadow-md border-b bg-white flex-wrap gap-2">
      {/* Left Section */}
      <div className="flex items-center space-x-4 flex-wrap">
        <Link to="/home" className="flex items-center hover:text-black">
          <GraduationCap className="h-8 w-8 mr-2" />
          <span className="font-extrabold md:text-xl text-sm">Kattraan</span>
        </Link>

        <Button variant="ghost" onClick={() => navigate("/courses")} className="text-sm md:text-base">
          Explore Courses
        </Button>

        <Button variant="outline" onClick={() => navigate("/teach-me")} className="text-sm md:text-base">
          Teach Me Kattraan
        </Button>

        {/* Search Input */}
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button type="submit" className="absolute right-2 top-1 text-gray-500 hover:text-black">
            <Search className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* My Courses - only if authenticated */}
        {auth.authenticate && (
          <div onClick={() => navigate("/student-courses")} className="flex cursor-pointer items-center space-x-2">
            <span className="font-semibold text-sm md:text-base">My Courses</span>
            <TvMinimalPlay className="w-6 h-6" />
          </div>
        )}

        {/* Sign In Button (if not signed in) */}
        {!auth.authenticate && (
          <Button onClick={() => navigate("/auth")} className="text-sm md:text-base">
            Sign In
          </Button>
        )}

        {/* Profile Dropdown (only when signed in) */}
        {auth.authenticate && (
          <div className="relative">
            <div
              className={`w-9 h-9 flex items-center justify-center rounded-full text-white font-bold cursor-pointer ${bgColor}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {userInitial}
            </div>

            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-md p-3 space-y-2 z-50 text-sm">
                <li className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span className="font-semibold">{userName}</span>
                </li>
                <li className="text-gray-600 truncate">{userEmail}</li>
                <li className="border-t pt-2">
                  <Button className="w-full" variant="destructive" onClick={handleLogout}>
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
