export async function getGPTResponse(prompt) {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + process.env.OPENROUTER_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openchat/openchat-7b",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await res.json();
  console.log("API-Antwort (komplett):", data);

  if (!data.choices || !data.choices[0]) {
    return "Fehler: Keine GPT-Antwort. Key oder Modell evtl. blockiert.";
  }

  return data.choices[0].message.content;
}
