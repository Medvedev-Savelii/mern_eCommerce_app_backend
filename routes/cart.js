import {
  create,
  update,
  deleted,
  getUserCart,
  getUserAllCart,
} from "../controllers/cartController.js";
import express from "express";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
  verifyToken,
} from "../middleware/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", create);
//UPDATE
router.put("/:id", verifyTokenAndAuthorization, update);
//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleted);
//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, getUserCart);
//GET ALL
router.get("/", verifyTokenAndAdmin, getUserAllCart);

export default router;
