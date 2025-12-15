import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/home", protect, (req, res) => {
  res.json({ message: "User Home API working" });
});

export default router;
