import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";     // ✅
import adminRoutes from "./routes/adminRoutes.js";   // ✅
import adminUserRoutes from "./routes/adminUserRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/admin", adminUserRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running...")
);
