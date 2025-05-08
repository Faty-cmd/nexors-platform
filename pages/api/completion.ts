export default async function handler(req, res) {
  const prompt = "Sag mir einen witzigen Satz über künstliche Intelligenz.";

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer ", 
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
    const result = data?.choices?.[0]?.message?.content ?? "Keine Antwort von GPT.";

    return res.status(200).json({ result });
  } catch (error) {
    console.error("Fehler:", error);
    return res.status(500).json({ error: "Interner Serverfehler" });
  }
}
