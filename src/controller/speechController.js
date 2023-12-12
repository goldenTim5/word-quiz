// Speech to Text Function
export const useSpeechToText = (setTranscript, setIsListening, isListening) => {
  // checks browser is supported
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  // Handle the lack of API support gracefully
  if (!SpeechRecognition) {
    console.error("Speech recognition API not supported in this browser.");
    return;
  }
  // creates an instance
  const recognition = new SpeechRecognition();

  // configurations
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  //handles results
  recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    setTranscript(transcript);
  };

  //handles error with log
  recognition.onerror = (event) => {
    console.error("Error occurred in speech recognition:", event.error);
  };

  //starting recoginition
  if (isListening) {
    recognition.start();
    recognition.onend = () => {
      console.log("Continue listening...");
      recognition.start();
    };
  }
  //stoppping recoginition
  else {
    recognition.stop();
    recognition.onend = () => {
      console.log("Stopped listening per users request");
    };
  }
};

// Text to Speech Function
export const useTextToSpeech = (text) => {
  //creates instance of speech synthesis utterance
  const utterance = new SpeechSynthesisUtterance(text.toLowerCase());
  //converts text into spoken word
  speechSynthesis.speak(utterance);
};
