import express from "express";

// import { createError } from "../utils/error.js";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updatedHotel,
} from "../controllers/hotel.js";

const router = express.Router();

// CREATE

router.post("/", createHotel);

// UPDATE

router.put("/:id", updatedHotel);
// DELETE

router.delete("/:id", deleteHotel);

//Get
router.get("/:id", getHotel);

// GET ALL

router.get("/", getAllHotel);

export default router;
