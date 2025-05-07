import { useState } from "react";
import { getGPTResponse } from "../lib/gpt";

export default function Demo() {
  const [task, setTask] = useState("");
  const [response, setResponse] = useState("");

  const handleTask = async (prompt: string) => {
    setTask(prompt);
    const result = await getGPTResponse(prompt);
    setResponse(result);
  };

  return (
    <main style={{ padding: 40 }}>
      <h2>Demo: Deine Super-KI in Aktion</h2>
      <button onClick={() => handleTask("Erstelle einen Slogan")}>Slogan erstellen</button>
      <button onClick={() => handleTask("10 Produktivitätstipps")}>Produktivitätstipps</button>
      <button onClick={() => handleTask("Analysiere einen Bericht")}>Bericht analysieren</button>
      <p><strong>Antwort:</strong> {response}</p>
    </main>
  );
}
