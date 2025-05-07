export function trackEvent(event: string) {
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event, timestamp: new Date().toISOString() })
  });
}
