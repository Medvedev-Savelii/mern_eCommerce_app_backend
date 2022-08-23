import {
  update,
  deleted,
  getUser,
  getUsers,
  getUserStars,
} from "../controllers/userController.js";
import {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middleware/verifyToken.js";
import express from "express";

const router = express.Router();

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, update);
//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleted);
//GET USER
router.get("/find/:id", verifyTokenAndAdmin, getUser);
//GET ALL USER
router.get("/", verifyTokenAndAdmin, getUsers);
//GET USER STATS
router.get("/stats", verifyTokenAndAdmin, getUserStars);

export default router;
