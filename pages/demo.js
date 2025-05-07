import { useState } from "react";
import { getGPTResponse } from "../lib/gpt";
import UpgradeBox from "../components/UpgradeBox";
import { trackCoreEvent } from "../lib/core";

export default function Demo() {
  const [response, setResponse] = useState("");

  const handleTask = async (prompt) => {
    trackCoreEvent("task_clicked", prompt);
    const result = await getGPTResponse(prompt);
    setResponse(result);
    trackCoreEvent("response_received", result);
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
