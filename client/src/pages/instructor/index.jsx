import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import {
  BarChart,
  Book,
  MessageSquare,
  Calendar,
  Users,
  FileText,
  LogOut,
  Layers,
  Clipboard,
  Bell,
} from "lucide-react";

import Footer from "@/components/student-view/footer";
import StudentViewCommonHeader from "@/components/student-view/header";

// Component imports
import InstructorDashboard from "@/components/instructor-view/dashboard";
import InstructorCourses from "@/components/instructor-view/courses";
import InstructorQuizzes from "@/components/instructor-view/quizzes";
import InstructorAssessments from "@/components/instructor-view/assessments";
import InstructorReports from "@/components/instructor-view/reports";
import InstructorStudents from "@/components/instructor-view/students";
import InstructorMessages from "@/components/instructor-view/messages";
import InstructorCalendar from "@/components/instructor-view/calendar";
import InstructorResources from "@/components/instructor-view/resources";
import InstructorAnnouncements from "@/components/instructor-view/announcements";
import InstructorFeedback from "@/components/instructor-view/feedback";
import InstructorScheduling from "@/components/instructor-view/scheduling";
import InstructorCertificates from "@/components/instructor-view/certificates";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AuthContext } from "@/context/auth-context";
import { InstructorContext } from "@/context/instructor-context";
import { fetchInstructorCourseListService } from "@/services";
import { list } from "postcss";


function InstructorDashboardPage() {
 
  const [activeTab, setActiveTab] = useState("dashboard");
  const [currentTime, setCurrentTime] = useState(new Date());
  const { resetCredentials } = useContext(AuthContext);
  const { instructorCoursesList, setInstructorCoursesList } =
    useContext(InstructorContext);

  async function fetchAllCourses() {
    const response = await fetchInstructorCourseListService();
    if (response?.success) setInstructorCoursesList(response.data);
  }

  useEffect(() => {
    fetchAllCourses();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    resetCredentials();
    sessionStorage.clear();
  };

  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "dashboard",
      component: <InstructorDashboard listOfCourses={instructorCoursesList} />,
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
      component: <InstructorCourses listOfCourses={instructorCoursesList} />,
    },
    {
      icon: Layers,
      label: "Quizzes",
      value: "quizzes",
      component: <InstructorQuizzes />,
    },
    {
      icon: Clipboard,
      label: "Assessments",
      value: "assessments",
      component: <InstructorAssessments />,
    },
    {
      icon: FileText,
      label: "Reports",
      value: "reports",
      component: <InstructorReports />,
    },
    {
      icon: Users,
      label: "Students",
      value: "students",
      component: <InstructorStudents />,
    },
    {
      icon: MessageSquare,
      label: "Messages",
      value: "messages",
      component: <InstructorMessages />,
    },
    {
      icon: Calendar,
      label: "Calendar",
      value: "calendar",
      component: <InstructorCalendar />,
    },
    {
      icon: Book,
      label: "Resources",
      value: "resources",
      component: <InstructorResources />,
    },
    {
      icon: FileText,
      label: "Announcements",
      value: "announcements",
      component: <InstructorAnnouncements />,
    },
    {
      icon: Clipboard,
      label: "Feedback",
      value: "feedback",
      component: <InstructorFeedback />,
    },
    {
      icon: Calendar,
      label: "Scheduling",
      value: "scheduling",
      component: <InstructorScheduling />,
    },
    {
      icon: FileText,
      label: "Certificates",
      value: "certificates",
      component: <InstructorCertificates />,
    },
    {
      icon: LogOut,
      label: "Logout",
      value: "logout",
      component: null,
      action: handleLogout,
    },
  ];
  const { auth } = useContext(AuthContext);
  const userName = auth.user?.userName || "Instructor";

  function calculateTotalStudentsAndProfit() {
    const { totalStudents, totalProfit, studentList } =
      instructorCoursesList.reduce(
        (acc, course) => {
          const studentCount = course.students.length;
          acc.totalStudents += studentCount;
          acc.totalProfit += course.pricing * studentCount;

          course.students.forEach((student) => {
            acc.studentList.push({
              courseTitle: course.title,
              studentName: student.studentName,
              studentEmail: student.studentEmail,
            });
          });

          return acc;
        },
        {
          totalStudents: 0,
          totalProfit: 0,
          studentList: [],
        }
      );

    return {
      totalProfit,
      totalStudents,
      studentList,
    };
  }

  const { totalProfit, totalStudents, studentList } =
    calculateTotalStudentsAndProfit();

  const navigate = useNavigate();
  const handleCreateCourse = () => {
    
    navigate("/instructor/create-new-course");
  };

  return (
    <>
      
      
      <div className="min-h-screen bg-white">
        <header className="bg-sky-900 py-4 px-6 flex items-center justify-between text-white shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center border border-white border-opacity-20 bg-white  text-2xl font-bold bg-opacity-10 backdrop-blur-md rounded-b-full">
              {userName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl text-gray-300 font-semibold">
                {userName}
              </h2>
              <p className="text-md text-gray-300">
                <span className="text-yellow-500">☆</span>  4.5 | {totalStudents} Enrolled Students |
                {instructorCoursesList.length || 0} Courses
              </p>
            </div>
          </div>
          <div>
          <p className="text-md text-gray-800 mb-4">
              {format(currentTime, "eeee, MMMM d, yyyy")} |{" "}
              {currentTime.toLocaleTimeString()}
            </p>
            
          </div>
          <div className="flex flex-row gap-4 items-center"> 
          <MessageSquare className="text-gray-300 hover:text-white"/>
          <Bell className="text-gray-300 hover:text-white"/>
            
          </div>
        </header>
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 bg-sky-900 text-white py-6 px-2 shadow-md border-r border-gray-800 min-h-screen hidden md:block">
            
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Button
                  key={item.value}
                  variant="ghost"
                  className={`w-full font-sans text-md justify-start text-left px-3 py-3 rounded-none hover:shadow-lg hover:bg-#0d2b45   transition duration-300 ease-in-out text-gray-100  ${
                    activeTab === item.value
                      ? " font-semibold  bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20  font-semibold hover:bg-opacity-20 transition"/* [#facc15] [#0d2b45]*/
                      : " bg-transparent hover:text-white hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-md hover:border hover:border-white hover:border-opacity-20 "
                  }`}
                  onClick={() =>
                    item.action ? item.action() : setActiveTab(item.value)
                  }
                >
                  <item.icon
                    className={"w-4 h-4 mr-3 "}
                  />
                  {item.label}
                </Button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto  bg-gray-200">
  <div className="max-w-screen-lg mx-auto px-4 py-6 sm:px-6 lg:px-8">
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      {menuItems.map((item) => (
        <TabsContent value={item.value} key={item.value}>
          <div className="space-y-6">
            {/* If your component has wide parts: */}
            <div className="overflow-x-auto">
              {item.component}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  </div>
</main>
        </div>
        <div className="bg-sky-900  px-6 flex items-center justify-between text-white shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-center py-2 text-sm text-gray-500 gap-2">
        <p>Copyrights ©2025 Kattraan. Build by Urbancode</p>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            🌐 Language
          </span>
          <span>Terms of use</span>
          <span>Privacy policy</span>
        </div>
      </div>
        </div>
      </div>
      
    </>
  );
}

export default InstructorDashboardPage;
