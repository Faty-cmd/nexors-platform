export default async function handler(req, res) {
  const prompt = req.body.prompt;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: Bearer ${process.env.OPENROUTER_API_KEY},
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "mistralai/mixtral-8x7b",
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0] || !data.choices[0].message?.content) {
      return res.status(500).json({ error: "Fehler: Keine gültige GPT-Antwort." });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("API-Fehler:", error);
    res.status(500).json({ error: "Interner Fehler bei der Verarbeitung." });
  }
}
