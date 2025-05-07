export async function getGPTResponse(prompt) {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + process.env.OPENROUTER_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await res.json();
  console.log("API-Antwort (komplett):", data);

  if (!data.choices || !data.choices[0]) {
    return "Fehler: Keine gültige GPT-Antwort. Eventuell ist dein Key gesperrt oder das Modell nicht verfügbar.";
  }

  return data.choices[0].message.content;
}
