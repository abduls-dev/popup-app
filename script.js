document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("text-input");
  const voiceSelect = document.getElementById("voice-select");
  const speakButton = document.getElementById("speak-button");

  let voices = [];

  function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = "";

    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  function speak() {
    const text = textInput.value;
    const selectedVoiceIndex = voiceSelect.value;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[selectedVoiceIndex];
    speechSynthesis.speak(utterance);
  }

  // Event listeners
  speechSynthesis.onvoiceschanged = populateVoiceList;
  speakButton.addEventListener("click", speak);

  // Initial population of voice list
  populateVoiceList();
});
