import express from "express";
import {
  getComment,
  getCommantByMal_id,
  createComment,
  updateComment,
  deleteComment,
} from "../controllers/commentController.js";
const router = express.Router();

router.get("/comment", getComment);
router.get("/comment/:mal_id", getCommantByMal_id);
router.post("/comment", createComment);
router.patch("/comment/:id", updateComment);
router.delete("/comment/:id", deleteComment);

export default router;
