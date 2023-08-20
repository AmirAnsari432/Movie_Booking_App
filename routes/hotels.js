import express from "express";

// import { createError } from "../utils/error.js";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updatedHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/veriftToken.js";

const router = express.Router();

// CREATE

router.post("/", verifyAdmin, createHotel);

// UPDATE

router.put("/:id", verifyAdmin, updatedHotel);
// DELETE

router.delete("/:id", verifyAdmin, deleteHotel);

//Get
router.get("/:id", getHotel);

// GET ALL

router.get("/", getAllHotel);

export default router;
