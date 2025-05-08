export default async function handler(req, res) {
  const prompt = "Sag mir einen witzigen Satz über KI.";

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
      })
    });

    const raw = await response.text();
    console.log("RAW:", raw);

    const data = JSON.parse(raw);

    if (
      !data.choices ||
      !data.choices[0] ||
      !data.choices[0].message ||
      !data.choices[0].message.content
    ) {
      return res.status(500).json({ error: "Fehler: Keine gültige GPT-Antwort." });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("API-Fehler:", error);
    return res.status(500).json({ error: "Interner Fehler bei der Verarbeitung." });
  }
}
