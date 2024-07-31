const textarea = document.querySelector("textarea"),
  voiceList = document.querySelector("select"),
  speechBtn = document.querySelector("#convert-btn"),
  downloadBtn = document.querySelector("#download-btn");

let synth = speechSynthesis,
  isSpeaking = true,
  utterance,
  audioChunks = [];

// Populate voice list
function voices() {
  for (let voice of synth.getVoices()) {
    let selected = voice.name === "Google US English" ? "selected" : "";
    let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
    voiceList.insertAdjacentHTML("beforeend", option);
  }
}

synth.addEventListener("voiceschanged", voices);

// Convert text to speech
function textToSpeech(text) {
  utterance = new SpeechSynthesisUtterance(text);
  for (let voice of synth.getVoices()) {
    if (voice.name === voiceList.value) {
      utterance.voice = voice;
    }
  }
  synth.speak(utterance);
}

// Create a download link for the audio
function createDownloadLink(blob) {
  const url = URL.createObjectURL(blob);
  const a = document.querySelector("#download-btn");
  a.href = url;
  a.style.display = "inline-block";
}

// Handle convert button click
speechBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (textarea.value !== "") {
    if (!synth.speaking) {
      textToSpeech(textarea.value);
    }
    if (textarea.value.length > 80) {
      setInterval(() => {
        if (!synth.speaking && !isSpeaking) {
          isSpeaking = true;
          speechBtn.innerText = "Convert To Speech";
        }
      }, 500);
      if (isSpeaking) {
        synth.resume();
        isSpeaking = false;
        speechBtn.innerText = "Pause Speech";
      } else {
        synth.pause();
        isSpeaking = true;
        speechBtn.innerText = "Resume Speech";
      }
    } else {
      speechBtn.innerText = "Convert To Speech";
    }
    startRecording();
  }
});

// Start recording the audio
function startRecording() {
  const audioContext = new AudioContext();
  const destination = audioContext.createMediaStreamDestination();
  const mediaRecorder = new MediaRecorder(destination.stream);
  const source = audioContext.createMediaElementSource(new Audio());
  source.connect(destination);

  mediaRecorder.ondataavailable = (event) => {
    audioChunks.push(event.data);
  };

  mediaRecorder.onstop = () => {
    const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
    createDownloadLink(audioBlob);
    audioChunks = [];
  };

  mediaRecorder.start();
  utterance.onend = () => {
    mediaRecorder.stop();
  };
}

voices();
