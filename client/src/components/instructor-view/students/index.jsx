import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Users, Mail, Edit3, Trash2 } from 'lucide-react';

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
        setStudents(students.filter(student => student.id !== studentId));
        // Add API call to delete student from backend
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Students</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Courses Enrolled
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Progress
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.courses}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{`${student.progress}%`}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Button className="text-indigo-600 hover:text-indigo-900 mr-2">
                                        <Edit3 className="h-5 w-5" />
                                    </Button>
                                    <Button className="text-red-600 hover:text-red-900">
                                        <Trash2 className="h-5 w-5" />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default InstructorStudents;
