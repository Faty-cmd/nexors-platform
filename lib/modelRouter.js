export function chooseModel(prompt, userType = "default") {
  const lower = prompt.toLowerCase();

  if (userType === "pro" || lower.includes("strategie") || lower.includes("code")) {
    return "openai/gpt-4";
  }

  if (lower.includes("bild") || lower.includes("grafik")) {
    return "mistralai/mixtral-8x7b";
  }

  if (lower.includes("hilfe") || lower.includes("einfach")) {
    return "gryphe/mythomist-7b";
  }

  return "mistralai/mixtral-8x7b"; // Fallback
}
