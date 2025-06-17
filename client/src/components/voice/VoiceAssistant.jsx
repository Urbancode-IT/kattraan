import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useEffect } from "react";

const VoiceAssistant = ({ onCommand }) => {
  const commands = [
    {
      command: "Switch to *",
      callback: (tab) => onCommand({ type: "switch-tab", value: tab.toLowerCase() }),
    },
    {
      command: "Enter email as *",
      callback: (email) => onCommand({ type: "set-email", value: email }),
    },
    {
      command: "Set password as *",
      callback: (pwd) => onCommand({ type: "set-password", value: pwd }),
    },
    {
      command: "Confirm password as *",
      callback: (cpwd) => onCommand({ type: "set-confirm-password", value: cpwd }),
    },
    {
      command: "Enter name as *",
      callback: (name) => onCommand({ type: "set-name", value: name }),
    },
    {
      command: "Submit the form",
      callback: () => onCommand({ type: "submit" }),
    },
  ];

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      console.warn("Browser does not support Speech Recognition");
    }
  }, [browserSupportsSpeechRecognition]);

  const handleStart = () => {
    console.log("🎤 Start clicked");
    resetTranscript(); // 🧠 clear old transcript
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStop = () => {
    console.log("🛑 Stop clicked");
    SpeechRecognition.stopListening();
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="fixed bottom-4 right-4 bg-red-100 p-4 rounded shadow z-[9999]">
        <p className="text-red-600">❌ Voice commands not supported in this browser.</p>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-xl shadow-xl border border-gray-300 z-[9999]">
      <div className="flex items-center gap-2">
        <button
          onClick={handleStart}
          className="bg-green-100 text-green-700 font-semibold px-3 py-1 rounded hover:bg-green-200"
        >
          🎤 Start
        </button>
        <button
          onClick={handleStop}
          className="bg-red-100 text-red-700 font-semibold px-3 py-1 rounded hover:bg-red-200"
        >
          🛑 Stop
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        🗣️ You said: <span className="italic">{transcript || "..."}</span>
      </p>
      {listening && <p className="text-xs text-blue-500">Listening...</p>}
    </div>
  );
};

export default VoiceAssistant;
