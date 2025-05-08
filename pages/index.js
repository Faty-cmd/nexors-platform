import UpgradeBox from "../components/UpgradeBox";
import { useState } from "react";

export default function Home() {
  const [antwort, setAntwort] = useState("");

  const handleTask = async (prompt) => {
    const res = await fetch("/api/completion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setAntwort(data.result || data.error || "Keine Antwort.");
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>NEXORS GPT-Demo</h1>
      <p>Teste dein KI-Wesen</p>

      <button onClick={() => handleTask("Erstelle einen Slogan für KI.")}>
        Slogan erstellen
      </button>
      <button onClick={() => handleTask("Erzeuge eine PDF-Rechnung.")}>
        Rechnung erzeugen
      </button>
      <button onClick={() => handleTask("Erkläre den Dreisatz für Schüler.")}>
        Erklärung starten
      </button>

      <p><strong>Antwort:</strong></p>
      <pre>{antwort}</pre>

      <UpgradeBox />
    </div>
  );
}
