import express from "express";
const router = express.Router();
import {
  deleteCollection,
  getCollectionByEmail,
  postCollection,
} from "../controllers/collectionControllers.js";

router.get("/collection", getCollectionByEmail);
router.post("/collection", postCollection);
router.delete("/collection/:id", deleteCollection);

export default router;
