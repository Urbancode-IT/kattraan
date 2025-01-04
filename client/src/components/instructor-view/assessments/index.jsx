import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit2, Trash2 } from 'lucide-react';

function InstructorAssessments() {
    const [assessments, setAssessments] = useState([]);

    useEffect(() => {
        const fetchAssessments = async () => {
            return [
                { id: 1, title: 'Midterm Exam', questions: 20, dueDate: '2023-09-15' },
                { id: 2, title: 'Final Exam', questions: 30, dueDate: '2023-12-01' },
                { id: 3, title: 'Project Submission', questions: 5, dueDate: '2023-11-20' },
            ];
        };

        const loadAssessments = async () => {
            const assessmentsData = await fetchAssessments();
            setAssessments(assessmentsData);
        };

        loadAssessments();
    }, []);

    const handleDeleteAssessment = (assessmentId) => {
        setAssessments(assessments.filter(assessment => assessment.id !== assessmentId));
        // Add API call to delete assessment from backend
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold">Assessments</h1>
                <Button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    <PlusCircle className="mr-2" /> Add New Assessment
                </Button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full leading-normal">
                    <thead className="bg-gray-100">
                        <tr>
                            <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Title
                            </th>
                            <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Questions
                            </th>
                            <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Due Date
                            </th>
                            <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {assessments.map((assessment) => (
                            <tr key={assessment.id}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {assessment.title}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {assessment.questions}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {assessment.dueDate}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <Button className="text-blue-500 hover:text-blue-600 mr-2">
                                        <Edit2 className="h-5 w-5" />
                                    </Button>
                                    <Button className="text-red-500 hover:text-red-600">
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

export default InstructorAssessments;
