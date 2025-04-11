import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Edit3, Trash2, Mail } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function InstructorStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      return [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', courses: 3, progress: 90 },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', courses: 5, progress: 75 },
        { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', courses: 2, progress: 80 },
      ];
    };

    const loadStudents = async () => {
      const studentsData = await fetchStudents();
      setStudents(studentsData);
    };

    loadStudents();
  }, []);

  const handleDeleteStudent = (studentId) => {
    setStudents(students.filter((s) => s.id !== studentId));
    // Add actual API call to delete student
  };

  const getProgressBadgeColor = (progress) => {
    if (progress >= 85) return "success";
    if (progress >= 60) return "warning";
    return "error";
  };

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-2xl font-bold">👨‍🎓 Enrolled Students</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border">
            <thead className="bg-muted text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Courses</th>
                <th className="px-4 py-3 text-left">Progress</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b hover:bg-gray-50 transition-all"
                  >
                    <td className="px-4 py-3 font-medium text-gray-800">
                      {student.name}
                    </td>
                    <td className="px-4 py-3 text-blue-600 hover:underline">
                      <a href={`mailto:${student.email}`}>
                        <Mail className="inline w-4 h-4 mr-1" />
                        {student.email}
                      </a>
                    </td>
                    <td className="px-4 py-3">{student.courses}</td>
                    <td className="px-4 py-3">
                      <Badge variant={getProgressBadgeColor(student.progress)}>
                        {student.progress}%
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-right space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteStudent(student.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-muted">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

export default InstructorStudents;
