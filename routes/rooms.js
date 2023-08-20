import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/veriftToken.js";

const router = express.Router();

//CRETAE
router.post("/:hotelid", verifyAdmin, createRoom);
// UPDATE
router.put("/:id", verifyAdmin, updateRoom);
// DELETE
router.delete("/:id", verifyAdmin, deleteRoom);
// GET
router.get("/:id", getRoom);
///GET ALL

router.get("/:id", getRooms);

export default router;
