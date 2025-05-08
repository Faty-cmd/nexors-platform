export default async function handler(req, res) {
  const prompt = "Sag mir einen witzigen Satz über künstliche Intelligenz.";

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer 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",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openrouter/openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
      })
    });

    const raw = await response.text();
    console.log("RAW:", raw);

    const data = JSON.parse(raw);
    const antwort = data?.choices?.[0]?.message?.content || "GPT hat nichts geantwortet.";

    return res.status(200).json({ result: antwort });
  } catch (error) {
    console.error("API-Fehler:", error);
    return res.status(500).json({ error: "Interner Fehler bei der Verarbeitung." });
  }
}
