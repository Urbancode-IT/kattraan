
import React, { useState } from "react";
import { ChevronDown, ChevronRight, Plus, Trash2, FileText, Video, BookOpen, HelpCircle } from "lucide-react";

function CourseCurriculum() {
  const [modules, setModules] = useState([]);
  const [assessment, setAssessment] = useState(null);
  const [assessmentMeta, setAssessmentMeta] = useState({
    title: '',
    description: '',
    instructions: '',
    passPercent: 60,
  });
  const [openModules, setOpenModules] = useState([]); // for collapsible modules
  // Collapsible logic
  const toggleModule = (idx) => {
    setOpenModules((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  // Module structure: { name, videos: [{title, file}], quizzes: [{question, options, correct}], resources: [{title, file}] }

  const addModule = () => {
    setModules([
      ...modules,
      {
        name: "",
        videos: [],
        quizzes: [],
        resources: [],
      },
    ]);
  };

  const removeModule = (idx) => {
    setModules(modules.filter((_, i) => i !== idx));
  };

  const updateModuleName = (idx, value) => {
    setModules(
      modules.map((m, i) => (i === idx ? { ...m, name: value } : m))
    );
  };

  // Video logic
  const addVideo = (modIdx) => {
    setModules(
      modules.map((m, i) =>
        i === modIdx
          ? { ...m, videos: [...m.videos, { title: "", file: null }] }
          : m
      )
    );
  };
  const updateVideo = (modIdx, vidIdx, field, value) => {
    setModules(
      modules.map((m, i) =>
        i === modIdx
          ? {
              ...m,
              videos: m.videos.map((v, vi) =>
                vi === vidIdx ? { ...v, [field]: value } : v
              ),
            }
          : m
      )
    );
  };
  const removeVideo = (modIdx, vidIdx) => {
    setModules(
      modules.map((m, i) =>
        i === modIdx
          ? { ...m, videos: m.videos.filter((_, vi) => vi !== vidIdx) }
          : m
      )
    );
  };

  // Quiz logic
  const addQuiz = (modIdx) => {
    setModules(
      modules.map((m, i) =>
        i === modIdx
          ? {
              ...m,
              quizzes: [
                ...m.quizzes,
                { question: "", options: ["", "", "", ""], correct: 0 },
              ],
            }
          : m
      )
    );
  };
  const updateQuiz = (modIdx, quizIdx, field, value) => {
    setModules(
      modules.map((m, i) =>
        i === modIdx
          ? {
              ...m,
              quizzes: m.quizzes.map((q, qi) =>
                qi === quizIdx ? { ...q, [field]: value } : q
              ),
            }
          : m
      )
    );
  };
  const updateQuizOption = (modIdx, quizIdx, optIdx, value) => {
    setModules(
      modules.map((m, i) =>
        i === modIdx
          ? {
              ...m,
              quizzes: m.quizzes.map((q, qi) =>
                qi === quizIdx
                  ? {
                      ...q,
                      options: q.options.map((o, oi) =>
                        oi === optIdx ? value : o
                      ),
                    }
                  : q
              ),
            }
          : m
      )
    );
  };
  const removeQuiz = (modIdx, quizIdx) => {
    setModules(
      modules.map((m, i) =>
        i === modIdx
          ? { ...m, quizzes: m.quizzes.filter((_, qi) => qi !== quizIdx) }
          : m
      )
    );
  };

  // Resource logic
  const addResource = (modIdx) => {
    setModules(
      modules.map((m, i) =>
        i === modIdx
          ? { ...m, resources: [...m.resources, { title: "", file: null }] }
          : m
      )
    );
  };
  const updateResource = (modIdx, resIdx, field, value) => {
    setModules(
      modules.map((m, i) =>
        i === modIdx
          ? {
              ...m,
              resources: m.resources.map((r, ri) =>
                ri === resIdx ? { ...r, [field]: value } : r
              ),
            }
          : m
      )
    );
  };
  const removeResource = (modIdx, resIdx) => {
    setModules(
      modules.map((m, i) =>
        i === modIdx
          ? { ...m, resources: m.resources.filter((_, ri) => ri !== resIdx) }
          : m
      )
    );
  };

  // Assessment logic (simple demo)
  const handleAddAssessment = () => {
    setAssessment({
      questions: [
        { question: "", options: ["", "", "", ""], correct: 0, time: 60 },
      ],
    });
    setAssessmentMeta({
      title: '',
      description: '',
      instructions: '',
      passPercent: 60,
    });
  };
  const updateAssessmentQ = (qIdx, field, value) => {
    setAssessment((a) => ({
      ...a,
      questions: a.questions.map((q, i) =>
        i === qIdx ? { ...q, [field]: value } : q
      ),
    }));
  };
  const updateAssessmentOpt = (qIdx, optIdx, value) => {
    setAssessment((a) => ({
      ...a,
      questions: a.questions.map((q, i) =>
        i === qIdx
          ? { ...q, options: q.options.map((o, oi) => (oi === optIdx ? value : o)) }
          : q
      ),
    }));
  };
  const addAssessmentQ = () => {
    setAssessment((a) => ({
      ...a,
      questions: [
        ...a.questions,
        { question: "", options: ["", "", "", ""], correct: 0, time: 60 },
      ],
    }));
  };
  const removeAssessmentQ = (qIdx) => {
    setAssessment((a) => ({
      ...a,
      questions: a.questions.filter((_, i) => i !== qIdx),
    }));
  };

  return (
    <div className="space-y-8 relative">
      <div className="flex justify-between items-center sticky top-0 z-10 bg-[#f7f9fa] py-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="w-7 h-7 text-purple-600" /> Course Curriculum
        </h2>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-full shadow flex items-center gap-2 hover:bg-purple-700 transition"
          onClick={addModule}
        >
          <Plus className="w-5 h-5" /> Add Module
        </button>
      </div>
      {modules.length === 0 && (
        <div className="text-center text-gray-400 py-12 text-lg flex flex-col items-center gap-2">
          <HelpCircle className="w-10 h-10 mb-2 text-purple-200" />
          Start by adding your first module.
        </div>
      )}
      {modules.map((mod, modIdx) => (
        <div key={modIdx} className="border rounded-2xl p-0 bg-white shadow-lg overflow-hidden transition-all">
          {/* Module Header */}
          <div
            className="flex items-center gap-4 px-6 py-4 bg-purple-50 cursor-pointer group hover:bg-purple-100 transition"
            onClick={() => toggleModule(modIdx)}
          >
            <span>
              {openModules.includes(modIdx) ? (
                <ChevronDown className="w-6 h-6 text-purple-600" />
              ) : (
                <ChevronRight className="w-6 h-6 text-purple-400" />
              )}
            </span>
            <input
              className="border-0 bg-transparent font-semibold text-lg w-64 focus:ring-0 focus:outline-none"
              placeholder={`Module ${modIdx + 1} Title`}
              value={mod.name}
              onChange={(e) => updateModuleName(modIdx, e.target.value)}
              onClick={e => e.stopPropagation()}
            />
            <button
              className="ml-auto text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition"
              onClick={e => { e.stopPropagation(); removeModule(modIdx); }}
              title="Remove Module"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
          {/* Module Content */}
          {openModules.includes(modIdx) && (
            <div className="space-y-6 px-6 py-6 border-t">
              {/* Videos */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Video className="w-5 h-5 text-purple-500" />
                  <span className="font-semibold">Videos</span>
                  <button
                    className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-purple-200"
                    onClick={() => addVideo(modIdx)}
                  >
                    <Plus className="w-4 h-4" /> Add Video
                  </button>
                </div>
                <div className="space-y-2">
                  {mod.videos.map((v, vidIdx) => (
                    <div key={vidIdx} className="flex items-center gap-2 bg-purple-50 rounded p-2">
                      <input
                        className="border px-2 py-1 rounded w-56"
                        placeholder="Video Title"
                        value={v.title}
                        onChange={(e) => updateVideo(modIdx, vidIdx, "title", e.target.value)}
                      />
                      <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => updateVideo(modIdx, vidIdx, "file", e.target.files[0])}
                      />
                      <button
                        className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition"
                        onClick={() => removeVideo(modIdx, vidIdx)}
                        title="Remove Video"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              {/* Quizzes */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">Quizzes</span>
                  <button
                    className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-yellow-200"
                    onClick={() => addQuiz(modIdx)}
                  >
                    <Plus className="w-4 h-4" /> Add Quiz
                  </button>
                </div>
                <div className="space-y-2">
                  {mod.quizzes.map((q, quizIdx) => (
                    <div key={quizIdx} className="border rounded p-3 space-y-2 bg-yellow-50">
                      <input
                        className="border px-2 py-1 rounded w-full"
                        placeholder="Quiz Question"
                        value={q.question}
                        onChange={(e) => updateQuiz(modIdx, quizIdx, "question", e.target.value)}
                      />
                      <div className="grid grid-cols-2 gap-2">
                        {q.options.map((opt, optIdx) => (
                          <input
                            key={optIdx}
                            className="border px-2 py-1 rounded"
                            placeholder={`Option ${optIdx + 1}`}
                            value={opt}
                            onChange={(e) => updateQuizOption(modIdx, quizIdx, optIdx, e.target.value)}
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <label className="text-sm">Correct Option:</label>
                        <select
                          value={q.correct}
                          onChange={(e) => updateQuiz(modIdx, quizIdx, "correct", Number(e.target.value))}
                          className="border rounded px-2 py-1"
                        >
                          {q.options.map((_, i) => (
                            <option key={i} value={i}>{`Option ${i + 1}`}</option>
                          ))}
                        </select>
                        <button
                          className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition ml-auto"
                          onClick={() => removeQuiz(modIdx, quizIdx)}
                          title="Remove Quiz"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Resources */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-gray-500" />
                  <span className="font-semibold">Resources</span>
                  <button
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-gray-200"
                    onClick={() => addResource(modIdx)}
                  >
                    <Plus className="w-4 h-4" /> Add Resource
                  </button>
                </div>
                <div className="space-y-2">
                  {mod.resources.map((r, resIdx) => (
                    <div key={resIdx} className="flex items-center gap-2 bg-gray-50 rounded p-2">
                      <input
                        className="border px-2 py-1 rounded w-56"
                        placeholder="Resource Title"
                        value={r.title}
                        onChange={(e) => updateResource(modIdx, resIdx, "title", e.target.value)}
                      />
                      <input
                        type="file"
                        onChange={(e) => updateResource(modIdx, resIdx, "file", e.target.files[0])}
                      />
                      <button
                        className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition"
                        onClick={() => removeResource(modIdx, resIdx)}
                        title="Remove Resource"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="pt-6">
        <button
          className="bg-yellow-500 text-white px-6 py-2 rounded-full font-bold hover:bg-yellow-600 flex items-center gap-2 shadow"
          onClick={handleAddAssessment}
        >
          <FileText className="w-5 h-5" /> Add Assessment
        </button>
      </div>
      {assessment && (
        <div className="border rounded-2xl p-6 bg-white shadow-lg space-y-6 mt-4">
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-600" /> Assessment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border px-2 py-1 rounded w-full"
              placeholder="Assessment Title (e.g. Final Test)"
              value={assessmentMeta.title}
              onChange={e => setAssessmentMeta(meta => ({ ...meta, title: e.target.value }))}
            />
            <input
              className="border px-2 py-1 rounded w-full"
              placeholder="Pass Percentage (e.g. 60)"
              type="number"
              min={1}
              max={100}
              value={assessmentMeta.passPercent}
              onChange={e => setAssessmentMeta(meta => ({ ...meta, passPercent: Number(e.target.value) }))}
            />
          </div>
          <textarea
            className="border px-2 py-1 rounded w-full mt-2"
            placeholder="Assessment Description (shown to learners)"
            value={assessmentMeta.description}
            onChange={e => setAssessmentMeta(meta => ({ ...meta, description: e.target.value }))}
            rows={2}
          />
          <textarea
            className="border px-2 py-1 rounded w-full mt-2"
            placeholder="Instructions (e.g. You must answer 60% correctly to pass. Time limit applies.)"
            value={assessmentMeta.instructions}
            onChange={e => setAssessmentMeta(meta => ({ ...meta, instructions: e.target.value }))}
            rows={2}
          />
          <div className="text-sm text-gray-500 mb-2 mt-2">Learners must score at least <span className="font-bold text-purple-700">{assessmentMeta.passPercent}%</span> to pass this assessment.</div>
          {assessment.questions.map((q, qIdx) => (
            <div key={qIdx} className="border rounded p-3 space-y-2 bg-purple-50">
              <input
                className="border px-2 py-1 rounded w-full"
                placeholder="Assessment Question"
                value={q.question}
                onChange={(e) => updateAssessmentQ(qIdx, "question", e.target.value)}
              />
              <div className="grid grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => (
                  <input
                    key={optIdx}
                    className="border px-2 py-1 rounded"
                    placeholder={`Option ${optIdx + 1}`}
                    value={opt}
                    onChange={(e) => updateAssessmentOpt(qIdx, optIdx, e.target.value)}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm">Correct Option:</label>
                <select
                  value={q.correct}
                  onChange={(e) => updateAssessmentQ(qIdx, "correct", Number(e.target.value))}
                  className="border rounded px-2 py-1"
                >
                  {q.options.map((_, i) => (
                    <option key={i} value={i}>{`Option ${i + 1}`}</option>
                  ))}
                </select>
                <label className="text-sm ml-4">Time (sec):</label>
                <input
                  type="number"
                  min={10}
                  className="border rounded px-2 py-1 w-20"
                  value={q.time}
                  onChange={(e) => updateAssessmentQ(qIdx, "time", Number(e.target.value))}
                />
                <button
                  className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition ml-auto"
                  onClick={() => removeAssessmentQ(qIdx)}
                  title="Remove Question"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          <button
            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full mt-2 flex items-center gap-1 hover:bg-purple-200"
            onClick={addAssessmentQ}
          >
            <Plus className="w-4 h-4" /> Add Question
          </button>
        </div>
      )}
    </div>
  );
}

export default CourseCurriculum;
