import { TvMinimalPlay } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";

function StudentViewCommonHeader() {
  const navigate = useNavigate();
  const { resetCredentials } = useContext(AuthContext);

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
    navigate('/login'); // Assuming '/login' is your login route
  }

  return (
    <>
      <header className="flex items-center justify-between p-4 border-b relative">
        <nav className="flex items-center space-x-4">
          <Link to="/home" className="flex items-center hover:text-black">
            <span className="font-extrabold md:text-xl text-[14px]">
              Kattraan
            </span>
          </Link>
          <Button
            variant="ghost"
            onClick={() => navigate("/courses", { replace: true })}
            className="text-[14px] md:text-[16px] font-medium"
          >
            Explore Courses
          </Button>
          {/* Search Bar */}
        <div className="flex items-center relative w-full max-w-full md:max-w-[400px]">
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full pl-4 pr-12 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            🔍
          </button>
        </div>
        </nav>
        <div className="flex items-center space-x-4">
          <Button onClick={() => navigate("/student-courses")}>
            My Courses
            <TvMinimalPlay className="w-8 h-8 ml-2" />
          </Button>
          <Button onClick={handleLogout}>Sign Out</Button>
        </div>
      </header>
      
    </>
  );
}

export default StudentViewCommonHeader;
