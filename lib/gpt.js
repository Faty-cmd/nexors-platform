export async function getGPTResponse(prompt) {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openai/gpt-4",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await res.json();
  console.log("GPT-Antwort kommt zurück:", data.choices[0].message.content);
  return data.choices[0].message.content;
}
