import { chooseModel } from "./modelRouter.js";

export async function getGPTResponse(prompt) {
  const model = chooseModel(prompt); // Modell wird automatisch gewählt

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + process.env.OPENROUTER_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: model,
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await res.json();
  console.log("AutoRouter-Antwort:", data);

  if (!data.choices || !data.choices[0]) {
    return "Fehler: Das Modell hat nicht geantwortet.";
  }

  return data.choices[0].message.content;
}
