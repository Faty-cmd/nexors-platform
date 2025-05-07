import { useState } from "react";
import { getGPTResponse } from "../lib/gpt";

export default function Demo() {
  const [task, setTask] = useState("");
  const [response, setResponse] = useState("");

  const handleTask = async (text: string) => {
    setTask(text);
    const result = await getGPTResponse(text);
    setResponse(result);
  };

  return (
    <main>
      <h2>Deine NEXORS-Demo</h2>
      <button onClick={() => handleTask("Slogan für neue Kampagne")}>Slogan erstellen</button>
      <button onClick={() => handleTask("10 Tipps für mehr Produktivität")}>Produktivitätstipps</button>
      <button onClick={() => handleTask("Unternehmensbericht analysieren")}>Bericht analysieren</button>
      <p>Antwort: {response}</p>
    </main>
  );
}
