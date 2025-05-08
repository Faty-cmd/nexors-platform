export default async function handler(req, res) {
  const prompt = req.body.prompt;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer sk-or-DEIN_API_KEY", // <- Ersetze durch deinen echten Key
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openrouter/openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    const result = data?.choices?.[0]?.message?.content || "Keine gültige Antwort.";
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: "Fehler bei der Verarbeitung." });
  }
}
