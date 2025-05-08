export default function UpgradeBox() {
  return (
    <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc" }}>
      <h3>Upgrade auf Pro</h3>
      <p>Erhalte Zugang zu Stimme, PDF, Whisper & mehr.</p>
      <button onClick={() => window.location.href = "/upgrade"}>
        Jetzt upgraden
      </button>
    </div>
  );
}
