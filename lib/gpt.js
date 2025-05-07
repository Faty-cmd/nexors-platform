export async function getGPTResponse(prompt) {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + process.env.OPENROUTER_API_KEY,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://nexors-platform.vercel.app",
      "X-Title": "NEXORS"
    },
    body: JSON.stringify({
      model: "mistralai/mixtral-8x7b-instruct",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await res.json();
  console.log("GPT Antwort:", data);

  if (!data.choices || !data.choices[0]) {
    return "Fehler: Keine gültige GPT-Antwort.";
  }

  return data.choices[0].message.content;
}
