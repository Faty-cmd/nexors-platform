export async function getGPTResponse(prompt) {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + process.env.OPENROUTER_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "mistralai/mixtral-8x7b",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await res.json();
  console.log("API-Antwort (Mixtral):", data);

  if (!data.choices || !data.choices[0]) {
    return "Fehler: Mixtral hat nicht geantwortet. Prüfe Guthaben oder Key.";
  }

  return data.choices[0].message.content;
}
