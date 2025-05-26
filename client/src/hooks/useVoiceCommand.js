// src/hooks/useVoiceCommand.js
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const useVoiceCommand = (commandsList) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands: commandsList });

  const startListening = () => SpeechRecognition.startListening({ continuous: true });
  const stopListening = () => SpeechRecognition.stopListening();

  return { transcript, listening, startListening, stopListening, resetTranscript, browserSupportsSpeechRecognition };
};

export default useVoiceCommand;
