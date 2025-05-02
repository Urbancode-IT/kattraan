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
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-3xl font-bold text-left text-[#0d2b45] p-3">My Courses<span className="ml-auto"></span></h2>
      <button className="bg-sky-900 text-white p-2 rounded-lg" onClick={() => navigate(`/instructor/create-new-course`)}>+ Add new Course</button></div>
      <Card>
        <CardHeader className="flex justify-between items-center">
          
          
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center">
            <Input
              placeholder="Search Courses"
              className="w-1/3"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
            </Select>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="bg-sky-900 text-white hover:none text-lg">Course Title</TableHead>
                  <TableHead  className="bg-sky-900 text-white text-lg">Enrolled</TableHead>
                  <TableHead  className="bg-sky-900 text-white text-lg">Revenue</TableHead>
                  <TableHead  className="bg-sky-900 text-white text-lg">Status</TableHead>
                  <TableHead  className="bg-sky-900 text-white text-lg text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCourses.length > 0 ? (
                  filteredCourses.map(course => (
                    <TableRow key={course._id} className=" text-lg hover:bg-muted transition-all">
                      <TableCell className="font-semibold text-gray-600 text-lg"> 
                        {course.title}
                      </TableCell>
                      <TableCell >
                         {course.students?.length || 0}
                       
                      </TableCell>
                      <TableCell>
                          ₹{(course.students?.length || 0) * course.pricing}
                      </TableCell>
                      <TableCell>
                        <Badge variant="success">
                          Live
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          onClick={() => navigate(`/instructor/edit-course/${course._id}`)}
                          variant="outline"
                          size="sm"
                        >
                          <FaEdit className="h-4 w-4 mr-1 text-gray-600 hover:text-gray-900" />
                          
                        </Button>
                        <Button variant="outline" size="sm">
                          <FaTrash className="h-4 w-4 mr-1 text-red-900 hover:text-red-600" />
                          
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
    </div>
  );
}

export default InstructorCourses;