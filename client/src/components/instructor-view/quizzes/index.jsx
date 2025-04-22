import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit2, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function InstructorQuizzes() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      // Placeholder for real API call
      return [
        { id: 1, title: 'React Basics Quiz', questions: 10 },
        { id: 2, title: 'JavaScript Mastery Quiz', questions: 15 },
        { id: 3, title: 'HTML & CSS Quiz', questions: 8 },
      ];
    };

    const loadQuizzes = async () => {
      const data = await fetchQuizzes();
      setQuizzes(data);
    };

    loadQuizzes();
  }, []);

  const handleDeleteQuiz = (quizId) => {
    setQuizzes(quizzes.filter((q) => q.id !== quizId));
    // TODO: Add API call here
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-2xl font-bold">📝 All Quizzes</CardTitle>
        <Button className="flex gap-2">
          <PlusCircle className="h-5 w-5" />
          Add New Quiz
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border">
            <thead className="bg-muted border-b font-semibold text-gray-600">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Questions</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {quizzes.length > 0 ? (
                quizzes.map((quiz) => (
                  <tr key={quiz.id} className="hover:bg-gray-50 transition-all">
                    <td className="px-4 py-3 font-medium text-gray-800">{quiz.title}</td>
                    <td className="px-4 py-3">
                      <Badge variant="info">{quiz.questions} Questions</Badge>
                    </td>
                    <td className="px-4 py-3 text-right space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDeleteQuiz(quiz.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-6 text-muted">
                    No quizzes found. Click "Add New Quiz" to create one.
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

export default InstructorQuizzes;
