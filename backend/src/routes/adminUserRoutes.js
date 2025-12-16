import express from "express";
import {
  createClientUser,
  getAllClientUsers,
  updateClientUser,
  deleteClientUser,
} from "../controllers/adminUserController.js";

import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/users", protect, adminOnly, createClientUser);
router.get("/users", protect, adminOnly, getAllClientUsers);
router.put("/users/:id", protect, adminOnly, updateClientUser);
router.delete("/users/:id", protect, adminOnly, deleteClientUser);

export default router;
