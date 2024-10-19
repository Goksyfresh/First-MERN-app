import express from "express";
import {
  createProducts,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controller/controller.js";

const router = express.Router();

router.post("/", createProducts);
router.put("/:id", updateProduct);
router.get("/", getProducts);
router.delete("/:id", deleteProduct);

export default router;
