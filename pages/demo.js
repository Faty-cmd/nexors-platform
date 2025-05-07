import { useState } from "react";
import { getGPTResponse } from "../lib/gpt";
import { speakText } from "../lib/voice";
import UpgradeBox from "../components/UpgradeBox";

export default function Demo() {
  const [task, setTask] = useState("");
  const [response, setResponse] = useState("");

  const handleTask = async (prompt) => {
    setTask(prompt);
    const result = await getGPTResponse(prompt);
    setResponse(result);
    speakText(result);
  };

  return (
    <main style={{ padding: 40 }}>
      <h2>Demo: Deine Super-KI in Aktion</h2>
      <button onClick={() => handleTask("Erstelle einen Slogan")}>Slogan erstellen</button>
      <button onClick={() => handleTask("10 Produktivitätstipps")}>Produktivitätstipps</button>
      <button onClick={() => handleTask("Analysiere einen Bericht")}>Bericht analysieren</button>
      <p><strong>Antwort:</strong> {response}</p>
      <UpgradeBox />
    </main>
  );
}
