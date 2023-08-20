import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/veriftToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user , you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user , you are logged in and delete your account");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin , you are logged in and delete your all accounts");
// });
// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

//Get
router.get("/:id", verifyUser, getUser);
// GET ALL

router.get("/", verifyAdmin, getAllUser);

export default router;
