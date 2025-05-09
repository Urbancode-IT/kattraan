import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaEdit, FaTrash} from "react-icons/fa";
export default function InstructorQuizzes() {
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({ text: "", options: ["", ""], answerIndex: 0 });
  const [savedQuizzes, setSavedQuizzes] = useState([]);

  const handleTopicChange = (e) => setTopic(e.target.value);
  const handleQuestionTextChange = (e) =>
    setCurrentQuestion({ ...currentQuestion, text: e.target.value });

  const handleOptionChange = (index, value) => {
    const newOptions = [...currentQuestion.options];
    newOptions[index] = value;
    setCurrentQuestion({ ...currentQuestion, options: newOptions });
  };

  const handleAddOption = () => {
    setCurrentQuestion({
      ...currentQuestion,
      options: [...currentQuestion.options, ""],
    });
  };

  const handleDeleteOption = (index) => {
    const newOptions = currentQuestion.options.filter((_, i) => i !== index);
    let newAnswerIndex = currentQuestion.answerIndex;
    if (index === currentQuestion.answerIndex) newAnswerIndex = 0;
    else if (index < currentQuestion.answerIndex) newAnswerIndex -= 1;
    setCurrentQuestion({ ...currentQuestion, options: newOptions, answerIndex: newAnswerIndex });
  };

  const handleAnswerSelect = (e) =>
    setCurrentQuestion({ ...currentQuestion, answerIndex: parseInt(e.target.value) });

  const handleAddQuestion = () => {
    const validOptions = currentQuestion.options.filter(opt => opt.trim() !== "");
    if (!currentQuestion.text.trim() || validOptions.length < 2) {
      alert("Please enter a question and at least 2 valid options.");
      return;
    }
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({ text: "", options: ["", ""], answerIndex: 0 });
  };

  const handleSaveQuiz = () => {
    if (!topic.trim() || questions.length === 0) {
      alert("Please enter a topic and at least one question.");
      return;
    }
    const quiz = { topic, questions };
    setSavedQuizzes([...savedQuizzes, quiz]);
    setTopic("");
    setQuestions([]);
    setCurrentQuestion({ text: "", options: ["", ""], answerIndex: 0 });
    alert("Quiz saved!");
  };

  const handleEditQuiz = (index) => {
    const quiz = savedQuizzes[index];
    setTopic(quiz.topic);
    setQuestions(quiz.questions);
    setSavedQuizzes(savedQuizzes.filter((_, i) => i !== index));
  };

  const handleDeleteQuiz = (index) => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      setSavedQuizzes(savedQuizzes.filter((_, i) => i !== index));
    }
  };

  const handleStartQuiz = (quiz) => {
    alert(`Starting quiz: ${quiz.topic}`);
  };

  const handleSendQuiz = (quiz) => {
    alert(`Quiz "${quiz.topic}" sent successfully!`);
  };

  useEffect(() => {
    const sampleQuiz1 = {
      topic: "JavaScript Basics",
      questions: [
        {
          text: "What does `typeof null` return in JavaScript?",
          options: ["object", "null", "undefined", "function"],
          answerIndex: 0,
        },
        {
          text: "Which method converts JSON to a JavaScript object?",
          options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "JSON.toObject()"],
          answerIndex: 0,
        },
      ],
    };
  
    const sampleQuiz2 = {
      topic: "React Fundamentals",
      questions: [
        {
          text: "What hook is used to manage state in a functional component?",
          options: ["useState", "useEffect", "useContext", "useReducer"],
          answerIndex: 0,
        },
        {
          text: "What is the purpose of `useEffect` in React?",
          options: [
            "Directly modify the DOM",
            "Fetch data and perform side effects",
            "Render UI elements",
            "Handle user inputs",
          ],
          answerIndex: 1,
        },
      ],
    };
  
    if (savedQuizzes.length === 0) {
      setSavedQuizzes([sampleQuiz1, sampleQuiz2]);
    }
  }, []);
  

  return (<>
  <h2 className="text-3xl font-bold text-left text-[#0d2b45] p-3"> Quizzes</h2>
    <Card className="p-6">
      {savedQuizzes.length > 0 && (
        <div className="mt-5">
          <h3 className="text-xl font-semibold text-[#0d2b45] mb-4">Saved Quizzes</h3>
          <ul className="space-y-2">
            {savedQuizzes.map((quiz, i) => (
              <li key={i} className="border-2 border-l-sky-900 border-l-opacity-50 border-l-4 rounded-none p-4 shadow-lg  bg-[#F9FAFB] flex justify-between items-center my-8">
                <div>
                  <h4 className="text-2xl font-medium text-gray-500 inline-block mb-4">{quiz.topic}</h4><br/>
                  <button
                    onClick={() => handleStartQuiz(quiz)}
                    className="bg-transparent border border-gray-500 text-gray-500 px-2 py-1 rounded-lg hover:bg-gray-500 hover:text-white mr-2"
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => handleSendQuiz(quiz)}
                    className="bg-transparent border border-[#0d2b45] text-[#0d2b45]  px-2 py-1 rounded-lg hover:bg-[#0d2b45] hover:text-white"
                  >
                    Send Quiz
                  </button>
                  
                </div>
                <div className="space-x-2">
                  
                <button
                    onClick={() => handleEditQuiz(i)}
                    className="ms-2 mr-2"
                  >
                    <FaEdit className="h-5 w-5 mr-1 text-gray-600 hover:text-gray-900" />
                  </button>
                  <button
                    onClick={() => handleDeleteQuiz(i)}
                    className=""
                  >
                    <FaTrash className="h-5 w-5 mr-1 text-red-900 hover:text-red-600" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}</Card>
      
      <Card className="p-6 mt-10">
        <h3 className="text-xl font-semibold text-[#0d2b45] mb-4">Create a New Quiz</h3>
        <label className="block mb-4">
          <span className="text-lg font-medium text-[#0d2b45]">Topic</span>
          <input
            type="text"
            value={topic}
            onChange={handleTopicChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-gray-300 focus:border-gray-300 transition duration-200"
            placeholder="Enter quiz topic"
          />
        </label>

        <div className="mt-6">
          <h4 className="text-lg text-[#0d2b45] mb-2">Add Question</h4>
          <textarea
            value={currentQuestion.text}
            onChange={handleQuestionTextChange}
            className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:ring-gray-300 transition duration-200"
            placeholder="Enter question text"
          />

          {currentQuestion.options.map((opt, idx) => (
            <div key={idx} className="flex items-center mb-2 space-x-2">
              <input
                type="text"
                value={opt}
                onChange={(e) => handleOptionChange(idx, e.target.value)}
                className="flex-1 rounded-md p-2 border border-gray-300 focus:ring-gray-300 transition duration-200"
                placeholder={`Option ${idx + 1}`}
              />
              <button
                type="button"
                onClick={() => handleDeleteOption(idx)}
                className=" text-sm"
              >
                <FaTrash className="h-4 w-4 mr-1 text-red-900 hover:text-red-600" />
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddOption}
            className="mt-2 text-sm text-gray-300 hover:underline"
          >
            + Add Option
          </button>

          {currentQuestion.options.length > 0 && (
            <label className="block mt-4 mb-2">
              <span className="text-lg font-medium text-[#0d2b45]">Correct Answer</span>
              <select
                value={currentQuestion.answerIndex}
                onChange={handleAnswerSelect}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-gray-300 transition duration-200"
              >
                {currentQuestion.options.map((opt, idx) => (
                  <option key={idx} value={idx}>
                    {opt || `Option ${idx + 1}`}
                  </option>
                ))}
              </select>
            </label>
          )}

          <button
            type="button"
            onClick={handleAddQuestion}
            className="mt-4 bg-transparent border border-[#0d2b45] text-[#0d2b45]  px-3 py-1 rounded-lg hover:bg-[#0d2b45] hover:text-white"
          >
            Add Question to Quiz
          </button>
        </div>

        {questions.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-[#0d2b45] mb-4">Questions Preview</h3>
            <ul className="space-y-4">
              {questions.map((q, qi) => (
                <li key={qi} className="border p-4 rounded-lg bg-[#F9FAFB]">
                  <p className="font-medium text-[#111827]">{qi + 1}. {q.text}</p>
                  <ol className="list-[upper-alpha] list-inside mt-2">
                    {q.options.map((o, oi) => (
                      <li key={oi} className={q.answerIndex === oi ? "text-green-600 font-bold" : "text-gray-800"}>
                        {o}
                      </li>
                    ))}
                  </ol>
                  <p className="mt-2 text-sm">
                    <span className="font-semibold text-[#0d2b45]">Correct Answer: </span>
                    {q.options[q.answerIndex]}
                  </p>
                </li>
              ))}
            </ul>

            <button
              onClick={handleSaveQuiz}
              className="mt-6 w-full bg-sky-600 text-white px-4 py-3 rounded-xl hover:bg-sky-700"
            >
              Save Quiz
            </button>
          </div>
        )}
      </Card>
    </>
  );
}
