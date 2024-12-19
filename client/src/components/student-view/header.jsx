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
