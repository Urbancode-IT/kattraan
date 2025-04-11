import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { Delete, Edit, Plus } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

function InstructorCourses({ listOfCourses }) {
  const navigate = useNavigate();
  const {
    setCurrentEditedCourseId,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
  } = useContext(InstructorContext);

  const handleCreateCourse = () => {
    setCurrentEditedCourseId(null);
    setCourseLandingFormData(courseLandingInitialFormData);
    setCourseCurriculumFormData(courseCurriculumInitialFormData);
    navigate("/instructor/create-new-course");
  };

  return (
    <Card>
      <CardHeader className="flex justify-between flex-wrap items-center gap-4">
        <CardTitle className="text-2xl font-bold">📚 All Courses</CardTitle>
        <Button onClick={handleCreateCourse} className="flex gap-2">
          <Plus className="w-4 h-4" />
          Create New Course
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {listOfCourses && listOfCourses.length > 0 ? (
                listOfCourses.map((course) => (
                  <TableRow
                    key={course._id}
                    className="hover:bg-muted transition-all"
                  >
                    <TableCell className="font-semibold text-base">
                      {course?.title}
                    </TableCell>
                    <TableCell>
                      <Badge variant="info">
                        👥 {course?.students?.length || 0}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="success">
                        ₹{(course?.students?.length || 0) * course?.pricing}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        onClick={() =>
                          navigate(`/instructor/edit-course/${course?._id}`)
                        }
                        variant="outline"
                        size="sm"
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        <Delete className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan="4" className="text-center py-6 text-muted">
                    No courses available. Start by creating one!
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

export default InstructorCourses;
