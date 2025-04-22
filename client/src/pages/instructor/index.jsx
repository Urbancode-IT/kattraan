import { useContext, useEffect, useState } from "react";
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
import "@/pages/instructor/index.css";
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
      <StudentViewCommonHeader />
      <div className="min-h-screen bg-white">
        <header className="bg-[#0d2b45] py-4 px-6 flex items-center justify-between text-white shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white bg-[#f43f5e] text-white text-2xl font-bold">
              {userName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                {userName} <span className="text-green-400">✔</span>
              </h2>
              <p className="text-md text-gray-300">
                ⭐ 4.5 | {totalStudents} Enrolled Students |
                {instructorCoursesList.length || 0} Courses
              </p>
            </div>
          </div>
          <Button
            onClick={handleCreateCourse}
            className="bg-[#f43f5e] hover:bg-[#e11d48] text-white px-5 py-2 rounded-md text-xl"
          >
            Create a course
          </Button>
        </header>
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 bg-[#0d2b45] text-white p-6 shadow-md border-r border-gray-800 min-h-screen hidden md:block">
            <p className="text-md text-white-500 mb-4">
              {format(currentTime, "eeee, MMMM d, yyyy")} |{" "}
              {currentTime.toLocaleTimeString()}
            </p>
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Button
                  key={item.value}
                  variant="ghost"
                  className={`w-full text-xl justify-start text-left px-3 py-2 rounded-lg ${
                    activeTab === item.value
                      ? "bg-[#facc15] text-[#0d2b45] font-semibold"
                      : "text-white bg-transparent hover:bg-[#1e3a8a]"
                  }`}
                  onClick={() =>
                    item.action ? item.action() : setActiveTab(item.value)
                  }
                >
                  <item.icon
                    className={`w-4 h-4 mr-3 ${
                      activeTab === item.value ? "text-[#0d2b45]" : "text-white"
                    }`}
                  />
                  {item.label}
                </Button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                {menuItems.map((item) => (
                  <TabsContent value={item.value} key={item.value}>
                    {item.component}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default InstructorDashboardPage;
