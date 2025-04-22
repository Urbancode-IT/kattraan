import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, MessageCircle } from "lucide-react";

const feedbackData = [
  {
    id: 1,
    studentName: "John Doe",
    courseName: "Web Development 101",
    feedbackMessage:
      "The course content is very comprehensive and well-structured. However, the pace was a bit fast for beginners.",
    date: "2023-09-10",
    response:
      "We appreciate your feedback! We will review the pace of the course in upcoming sessions.",
  },
  {
    id: 2,
    studentName: "Jane Smith",
    courseName: "Introduction to Python",
    feedbackMessage:
      "The Python course was great! I enjoyed the practical examples and hands-on coding exercises.",
    date: "2023-09-12",
    response:
      "Thank you for your positive feedback! We're glad you enjoyed the exercises.",
  },
  {
    id: 3,
    studentName: "Alice Johnson",
    courseName: "Digital Marketing Basics",
    feedbackMessage:
      "I found the course very informative, but I would love more content on SEO.",
    date: "2023-09-14",
    response:
      "Thanks for your suggestion! We will add more SEO content in the next update of the course.",
  },
];

function InstructorFeedback() {
  const [feedback, setFeedback] = useState(feedbackData);
  const [selectedId, setSelectedId] = useState(null);
  const [responseText, setResponseText] = useState("");

  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const handleRespond = (id) => {
    setSelectedId(id);
    const existingResponse = feedback.find((f) => f.id === id)?.response || "";
    setResponseText(existingResponse);
  };

  const handleSubmitResponse = () => {
    if (!responseText.trim()) return;
    setFeedback((prev) =>
      prev.map((item) =>
        item.id === selectedId ? { ...item, response: responseText } : item
      )
    );
    setSelectedId(null);
    setResponseText("");
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800">📢 Course Feedback</h2>

      {/* Feedback Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {feedback.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all"
          >
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.courseName}
              </h3>
              <p className="text-sm text-gray-600">
                {item.studentName} — {item.date}
              </p>
              <p className="text-gray-700 mt-2">{item.feedbackMessage}</p>
            </div>

            <div className="mt-4 text-sm text-gray-700">
              <strong>Instructor's Response:</strong>
              <p className="mt-1">
                {item.response ? item.response : <span className="text-gray-400 italic">No response yet</span>}
              </p>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <Button size="sm" variant="outline">
                <Edit className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                className="bg-blue-600 text-white"
                onClick={() => handleRespond(item.id)}
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                Respond
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Respond Modal (Inline) */}
      {selectedId && (
        <div className="bg-white shadow-lg p-6 rounded-lg border mt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">✍️ Respond to Feedback</h3>
          <textarea
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Write your response here..."
            value={responseText}
            onChange={(e) => setResponseText(e.target.value)}
          />
          <div className="flex justify-end gap-3 mt-4">
            <Button variant="outline" onClick={() => setSelectedId(null)}>
              Cancel
            </Button>
            <Button className="bg-green-600 text-white" onClick={handleSubmitResponse}>
              Submit Response
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default InstructorFeedback;
