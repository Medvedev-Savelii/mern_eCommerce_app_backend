import {
  create,
  update,
  deleted,
  getProduct,
  getProducts,
} from "../controllers/productController.js";
import express from "express";
import { verifyTokenAndAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyTokenAndAdmin, create);
//UPDATE
router.put("/:id", verifyTokenAndAdmin, update);
//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleted);
//GET PRODUCT
router.get("/find/:id");
//GET ALL PRODUCTS
router.get("/");

export default router;
