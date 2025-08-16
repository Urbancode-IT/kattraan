import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { InstructorContext } from "@/context/instructor-context";
import { courseCurriculumInitialFormData, courseLandingInitialFormData } from "@/config";
import { Delete, Edit, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash} from "react-icons/fa";

function InstructorCourses({ listOfCourses }) {
  const navigate = useNavigate();
  const {
    setCurrentEditedCourseId,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
  } = useContext(InstructorContext);

  const [searchTerm, setSearchTerm] = useState("");

  // Filter courses based on the search term
  const filteredCourses = listOfCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateCourse = () => {
    setCurrentEditedCourseId(null);
    setCourseLandingFormData(courseLandingInitialFormData);
    setCourseCurriculumFormData(courseCurriculumInitialFormData);
    navigate("/instructor/create-new-course");
  };

  return (
    <div className="w-full px-0 md:px-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-700 pl-2">My Courses</h2>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full font-semibold shadow transition flex items-center gap-2"
          onClick={() => navigate(`/instructor/create-new-course`)}
        >
          <Plus className="w-5 h-5" /> Add new Course
        </button>
      </div>
      <Card className="rounded-2xl shadow-lg border border-gray-100 bg-white w-full">
        <CardHeader className="px-8 py-6">
          <div className="flex justify-between items-center">
            <Input
              placeholder="Search Courses"
              className="w-1/3 rounded-lg"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select>
              <SelectTrigger className="w-40 rounded-lg">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 px-8 pb-10">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="bg-purple-600 text-white text-lg font-semibold">Course Title</TableHead>
                  <TableHead className="bg-purple-600 text-white text-lg font-semibold">Enrolled</TableHead>
                  <TableHead className="bg-purple-600 text-white text-lg font-semibold">Revenue</TableHead>
                  <TableHead className="bg-purple-600 text-white text-lg font-semibold">Status</TableHead>
                  <TableHead className="bg-purple-600 text-white text-lg font-semibold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCourses.length > 0 ? (
                  filteredCourses.map(course => (
                    <TableRow key={course._id} className="text-lg hover:bg-purple-50 transition-all">
                      <TableCell className="font-semibold text-gray-700 text-lg"> 
                        {course.title}
                      </TableCell>
                      <TableCell>
                        {course.students?.length || 0}
                      </TableCell>
                      <TableCell>
                        ₹{(course.students?.length || 0) * course.pricing}
                      </TableCell>
                      <TableCell>
                        <Badge variant="success" className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">Live</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          onClick={() => navigate(`/instructor/edit-course/${course._id}`)}
                          variant="outline"
                          size="sm"
                          className="rounded-full border-gray-300 hover:border-purple-400"
                        >
                          <FaEdit className="h-4 w-4 mr-1 text-gray-600 hover:text-purple-700" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full border-gray-300 hover:border-red-400 ml-2"
                        >
                          <FaTrash className="h-4 w-4 mr-1 text-red-700 hover:text-red-900" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan="5" className="text-center py-8 text-gray-400 text-lg">
                      No courses available. Start by creating one!
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

export default InstructorCourses;