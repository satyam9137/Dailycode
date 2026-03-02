
import express from "express";
import cors from "cors";


import authRoutes from "./routes/auth.routes.js";
import codeRoutes from "./routes/code.routes.js";
import contactRoutes from "./routes/contact.routes.js";

//import adminAuthRoutes from "./controllers/adminAuth.routes.js";
import adminRoutes from "./routes/adminRoutes/admin.routes.js";
import dashboardRoutes from "./routes/adminRoutes/dashboard.routes.js";
import usersRoutes from "./routes/adminRoutes/users.routes.js";
import problemsRoutes from "./routes/adminRoutes/problems.routes.js";
import submissionsRoutes from "./routes/adminRoutes/submissions.routes.js";
import feedbackRoutes from "./routes/adminRoutes/feedback.routes.js";
import leaderboardRoutes from "./routes/adminRoutes/leaderboard.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
//app.use("/api/code", codeRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api", codeRoutes);
//app.use("/api/admin", adminAuthRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/problems", problemsRoutes);
app.use("/api/submissions", submissionsRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

app.listen(5000, () => console.log("✅ Backend running on 5000"));
