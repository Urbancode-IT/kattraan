import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users, BarChart2, BookOpen } from "lucide-react";
import { FaRupeeSign } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

function InstructorDashboard({ listOfCourses }) {
  function calculateTotalStudentsAndProfit() {
    const { totalStudents, totalProfit, studentList } = listOfCourses.reduce(
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

  const stats = [
    {
      icon: Users,
      label: "Total Students",
      value: totalStudents,
      color: "bg-blue-100 text-blue-800",
    },
    {
      icon: FaRupeeSign,
      label: "Total Revenue",
      value: `₹${totalProfit}`,
      color: "bg-green-100 text-green-800",
    },
    {
      icon: BookOpen,
      label: "Courses",
      value: listOfCourses.length,
      color: "bg-purple-100 text-purple-800",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.label}</CardTitle>
              <item.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{item.value}</div>
              <Badge className={`mt-2 ${item.color}`}>{item.label}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Course Performance Placeholder */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Course Performance</CardTitle>
            <BarChart2 className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">
            📊 Chart displaying enrollment vs. profit per course will go here.
          </div>
        </CardContent>
      </Card>

      {/* Student Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Enrollments</CardTitle>
          <p className="text-sm text-muted-foreground">
            List of students and their respective courses
          </p>
        </CardHeader>
        <Separator />
        <CardContent>
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader className="sticky top-0 bg-background z-10">
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentList.length > 0 ? (
                  studentList.map((student, index) => (
                    <TableRow
                      key={index}
                      className="hover:bg-muted transition-colors"
                    >
                      <TableCell className="font-medium">
                        {student.courseTitle}
                      </TableCell>
                      <TableCell>{student.studentName}</TableCell>
                      <TableCell>{student.studentEmail}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center py-6">
                      No students enrolled yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default InstructorDashboard;
