export async function getGPTResponse(prompt) {
  const res = await fetch("/api/completion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  if (!data.choices || !data.choices[0]) {
    return "Fehler: Keine GPT-Antwort.";
  }

  return data.choices[0].message.content;
}
