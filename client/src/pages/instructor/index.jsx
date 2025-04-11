import { useContext, useEffect, useState } from "react";
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

function InstructorDashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [currentTime, setCurrentTime] = useState(new Date());
  const { resetCredentials } = useContext(AuthContext);
  const { instructorCoursesList, setInstructorCoursesList } = useContext(InstructorContext);

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
    { icon: BarChart, label: "Dashboard", value: "dashboard", component: <InstructorDashboard listOfCourses={instructorCoursesList} /> },
    { icon: Book, label: "Courses", value: "courses", component: <InstructorCourses listOfCourses={instructorCoursesList} /> },
    { icon: Layers, label: "Quizzes", value: "quizzes", component: <InstructorQuizzes /> },
    { icon: Clipboard, label: "Assessments", value: "assessments", component: <InstructorAssessments /> },
    { icon: FileText, label: "Reports", value: "reports", component: <InstructorReports /> },
    { icon: Users, label: "Students", value: "students", component: <InstructorStudents /> },
    { icon: MessageSquare, label: "Messages", value: "messages", component: <InstructorMessages /> },
    { icon: Calendar, label: "Calendar", value: "calendar", component: <InstructorCalendar /> },
    { icon: Book, label: "Resources", value: "resources", component: <InstructorResources /> },
    { icon: FileText, label: "Announcements", value: "announcements", component: <InstructorAnnouncements /> },
    { icon: Clipboard, label: "Feedback", value: "feedback", component: <InstructorFeedback /> },
    { icon: Calendar, label: "Scheduling", value: "scheduling", component: <InstructorScheduling /> },
    { icon: FileText, label: "Certificates", value: "certificates", component: <InstructorCertificates /> },
    { icon: LogOut, label: "Logout", value: "logout", component: null, action: handleLogout },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-md hidden md:flex flex-col">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-extrabold text-gray-800">Kattraan Panel</h2>
          <p className="text-sm text-gray-500 mt-1">
            {format(currentTime, "eeee, MMMM d, yyyy")}<br />
            <span className="font-mono">{currentTime.toLocaleTimeString()}</span>
          </p>
        </div>
        <nav className="flex-1 p-4 overflow-y-auto">
          {menuItems.map((item) => (
            <Button
              key={item.value}
              variant={activeTab === item.value ? "secondary" : "ghost"}
              className="w-full justify-start mb-2 text-left"
              onClick={() => item.action ? item.action() : setActiveTab(item.value)}
            >
              <item.icon className="w-4 h-4 mr-2" />
              {item.label}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
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
  );
}

export default InstructorDashboardPage;
