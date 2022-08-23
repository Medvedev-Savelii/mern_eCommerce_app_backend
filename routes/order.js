import {
  create,
  update,
  deleted,
  getUserOrders,
  getAllOrders,
  getMonthlyIncome,
} from "../controllers/orderController.js";
import express from "express";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
  verifyToken,
} from "../middleware/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyToken, create);
//UPDATE
router.put("/:id", verifyTokenAndAdmin, update);
//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleted);
//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrders);
//GET ALL
router.get("/", verifyTokenAndAdmin, getAllOrders);
// GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);

export default router;
