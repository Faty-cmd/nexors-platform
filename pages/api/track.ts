export default function handler(req, res) {
  console.log("CORE-Event:", req.body);
  res.status(200).json({ success: true });
}
