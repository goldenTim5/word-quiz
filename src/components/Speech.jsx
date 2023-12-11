import React, { useState } from "react";
import {
  useSpeechToText,
  useTextToSpeech,
} from "../controller/speechController.js";

const Speech = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [textToSpeak, setTextToSpeak] = useState("");

  const startListening = () => {
    setIsListening(true);
    useSpeechToText(setTranscript, setIsListening, true);
  };

  const stopListening = () => {
    setIsListening(false);
    useSpeechToText(setTranscript, setIsListening, false);
  };

  const speakText = () => {
    useTextToSpeech(textToSpeak);
  };

  return (
    <div>
      <button onClick={startListening}>Start Listening</button>
      <button onClick={stopListening}>Stop Listening</button>
      <p>Transcript: {transcript}</p>

      <input
        type="text"
        value={textToSpeak}
        onChange={(e) => setTextToSpeak(e.target.value)}
      />
      <button onClick={speakText}>Speak Text</button>
    </div>
  );
};

export default Speech;
