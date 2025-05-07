export function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE';
  speechSynthesis.speak(utterance);
}
