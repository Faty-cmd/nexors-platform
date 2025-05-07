import { trackCoreEvent } from "../lib/core";

export default function UpgradeBox() {
  const handleUpgrade = () => {
    trackCoreEvent("upgrade_clicked", "User klickte auf Upgrade");
    alert("Upgrade-Feature folgt bald!");
  };

  return (
    <div style={{ marginTop: 40, padding: 20, border: "1px solid #ccc" }}>
      <h3>Upgrade auf NEXORS Pro?</h3>
      <p>PDF-Export, CRM, App & mehr freischalten.</p>
      <button onClick={handleUpgrade}>Jetzt upgraden</button>
    </div>
  );
}
