import type { NextApiRequest, NextApiResponse } from "next";

type GPTMessage = {
  role: "user" | "system" | "assistant";
  content: string;
};

type GPTResponse = {
  choices: { message: { content: string } }[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prompt = "Sag mir einen witzigen Satz über künstliche Intelligenz.";

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer sk-or-xxxxxxxxxxxxxxxxxxxx", // DEIN KEY HIER
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openrouter/mistralai/mixtral-8x7b",
        messages: [{ role: "user", content: prompt }] as GPTMessage[],
      }),
    });

    const raw = await response.text();
    console.log("GPT ROH:", raw);

    const data: GPTResponse = JSON.parse(raw);

    const result = data?.choices?.[0]?.message?.content ?? "Keine Antwort von GPT.";

    res.status(200).json({ result });
  } catch (error) {
    console.error("Fehler:", error);
    res.status(500).json({ error: "Interner Serverfehler" });
  }
}
