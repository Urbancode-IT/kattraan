import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming Button is a reusable component
import { Edit, Trash2, MessageCircle } from "lucide-react"; // Icons for edit, delete, and respond actions

const feedbackData = [
  {
    id: 1,
    studentName: "John Doe",
    courseName: "Web Development 101",
    feedbackMessage: "The course content is very comprehensive and well-structured. However, the pace was a bit fast for beginners.",
    date: "2023-09-10",
    response: "We appreciate your feedback! We will review the pace of the course in upcoming sessions.",
  },
  {
    id: 2,
    studentName: "Jane Smith",
    courseName: "Introduction to Python",
    feedbackMessage: "The Python course was great! I enjoyed the practical examples and hands-on coding exercises.",
    date: "2023-09-12",
    response: "Thank you for your positive feedback! We're glad you enjoyed the exercises.",
  },
  {
    id: 3,
    studentName: "Alice Johnson",
    courseName: "Digital Marketing Basics",
    feedbackMessage: "I found the course very informative, but I would love more content on SEO.",
    date: "2023-09-14",
    response: "Thanks for your suggestion! We will add more SEO content in the next update of the course.",
  },
];

function InstructorFeedback() {
  const [feedback, setFeedback] = useState(feedbackData);
  const [newResponse, setNewResponse] = useState("");

  const handleEdit = (id) => {
    // Edit logic
    console.log("Editing feedback with id:", id);
  };

  const handleDelete = (id) => {
    // Delete logic
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const handleRespond = (id) => {
    // Respond to feedback
    console.log("Responding to feedback with id:", id);
    // Add response logic here, update the response field, etc.
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Course Feedback</h2>
      </div>

      {/* Feedback List */}
      <div className="space-y-4">
        {feedback.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all duration-200">
            <h3 className="text-xl font-semibold text-gray-800">{item.courseName}</h3>
            <p className="text-sm text-gray-600">{item.studentName} - {item.date}</p>
            <p className="text-gray-700 mt-2">{item.feedbackMessage}</p>

            {/* Response */}
            <div className="mt-4">
              <strong>Instructor's Response:</strong>
              <p className="text-gray-600 mt-1">{item.response}</p>
            </div>

            <div className="flex justify-between mt-4">
              <Button
                className="bg-gray-300 text-black"
                onClick={() => handleEdit(item.id)}
              >
                <Edit className="w-4 h-4" />
              </Button>
              <Button
                className="bg-red-500 text-white"
                onClick={() => handleDelete(item.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
              <Button
                className="bg-blue-500 text-white"
                onClick={() => handleRespond(item.id)}
              >
                <MessageCircle className="w-4 h-4" />
                Respond
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Respond to Feedback */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Respond to Feedback</h3>
        <textarea
          className="w-full p-4 border-2 border-gray-300 rounded-lg mt-4"
          placeholder="Write your response here..."
          rows="4"
          value={newResponse}
          onChange={(e) => setNewResponse(e.target.value)}
        />
        <Button
          className="mt-4 bg-green-500 text-white"
          onClick={() => console.log("Responding:", newResponse)}
        >
          Submit Response
        </Button>
      </div>
    </div>
  );
}

export default InstructorFeedback;
