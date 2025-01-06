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

import InstructorDashboard from "@/components/instructor-view/dashboard";
import InstructorCourses from "@/components/instructor-view/courses";
import InstructorQuizzes from "@/components/instructor-view/quizzes";
import InstructorAssessments from "@/components/instructor-view/assessments";
import InstructorReports from "@/components/instructor-view/reports";
import InstructorStudents from "@/components/instructor-view/students";
import InstructorMessages from "@/components/instructor-view/messages";
import InstructorCalendar from "@/components/instructor-view/calendar";
import InstructorResources from "@/components/instructor-view/resources";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AuthContext } from "@/context/auth-context";
import { InstructorContext } from "@/context/instructor-context";
import { fetchInstructorCourseListService } from "@/services";

function InstructorDashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [currentTime, setCurrentTime] = useState(new Date()); // Declare `currentTime` state
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
    const timer = setInterval(() => {
      setCurrentTime(new Date()); // Update the current time every second
    }, 1000);
    return () => clearInterval(timer); // Clean up the timer
  }, []);

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
    { icon: LogOut, label: "Logout", value: "logout", component: null, action: handleLogout },
  ];

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  return (
    <div className="flex h-full min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Kattraan Instructor</h2>
          <p className="text-sm text-gray-500">
            {format(currentTime, "eeee, MMMM d, yyyy")} | {currentTime.toLocaleTimeString()}
          </p>
          <nav>
            {menuItems.map((menuItem) => (
              <Button
                className="w-full justify-start mb-2"
                key={menuItem.value}
                variant={activeTab === menuItem.value ? "secondary" : "ghost"}
                onClick={() => menuItem.action ? menuItem.action() : setActiveTab(menuItem.value)}
              >
                <menuItem.icon className="mr-2 h-4 w-4" />
                {menuItem.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {menuItems.map((menuItem) => (
              <TabsContent value={menuItem.value} key={menuItem.value}>
                {menuItem.component}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default InstructorDashboardPage;
