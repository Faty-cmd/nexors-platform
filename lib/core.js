export function trackCoreEvent(event, payload) {
  const log = {
    event,
    payload,
    timestamp: new Date().toISOString()
  };
  console.log("CORE EVENT:", JSON.stringify(log));
}
