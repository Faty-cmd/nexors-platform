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
        model: "openrouter/mistralai/mixtral-8x7b",

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
