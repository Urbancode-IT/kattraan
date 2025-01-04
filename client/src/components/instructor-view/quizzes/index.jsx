import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit2, Trash2 } from 'lucide-react';

// Assuming the table components are styled or basic HTML elements are styled with Tailwind
function InstructorQuizzes() {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            // Placeholder for fetch call
            return [
                { id: 1, title: 'Quiz 1', questions: 10 },
                { id: 2, title: 'Quiz 2', questions: 15 },
                { id: 3, title: 'Quiz 3', questions: 8 },
            ];
        };

        const loadQuizzes = async () => {
            const quizzesData = await fetchQuizzes();
            setQuizzes(quizzesData);
        };

        loadQuizzes();
    }, []);

    const handleDeleteQuiz = (quizId) => {
        setQuizzes(quizzes.filter(quiz => quiz.id !== quizId));
        // Placeholder for an API call to delete quiz from backend
    };

    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Quizzes</h1>
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                    <PlusCircle className="mr-2" /> Add New Quiz
                </Button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Questions
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {quizzes.map((quiz) => (
                            <tr key={quiz.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{quiz.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{quiz.questions}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Button className="text-indigo-600 hover:text-indigo-900 mr-2">
                                        <Edit2 className="h-5 w-5" />
                                    </Button>
                                    <Button className="text-red-600 hover:text-red-900" onClick={() => handleDeleteQuiz(quiz.id)}>
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

export default InstructorQuizzes;
