import express from "express";
import {
  getUser,
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/user", getUser);
router.get("/user/all", getAllUser);
router.post("/user", createUser);
router.patch("/user", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
