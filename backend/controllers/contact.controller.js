import db from "../db.js";

export const sendFeedback = (req, res) => {
  const { user_id, email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({
      success: false,
      msg: "Email and message required",
    });
  }

  const sql =
    "INSERT INTO feedback (user_id, email, message) VALUES (?, ?, ?)";

  db.query(sql, [user_id || null, email, message], (err) => {
  if (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }

  return res.status(201).json({
    success: true,
    msg: "✅ Message sent successfully",
  });
});
};