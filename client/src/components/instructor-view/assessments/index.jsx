import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit2, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    setAssessments(assessments.filter((a) => a.id !== assessmentId));
    // TODO: Add delete API call here
  };

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-2xl font-bold">📑 Assessments</CardTitle>
        <Button className="flex items-center gap-2">
          <PlusCircle className="w-5 h-5" />
          Add New Assessment
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border">
            <thead className="bg-muted border-b font-semibold text-gray-600">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Questions</th>
                <th className="px-4 py-3">Due Date</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assessments.length > 0 ? (
                assessments.map((assessment) => (
                  <tr key={assessment.id} className="hover:bg-gray-50 transition-all">
                    <td className="px-4 py-3 font-medium">{assessment.title}</td>
                    <td className="px-4 py-3">{assessment.questions}</td>
                    <td className="px-4 py-3">
                      <Badge variant="warning">{new Date(assessment.dueDate).toLocaleDateString()}</Badge>
                    </td>
                    <td className="px-4 py-3 text-right space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDeleteAssessment(assessment.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-muted">
                    No assessments found. Add one now!
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

export default InstructorAssessments;
