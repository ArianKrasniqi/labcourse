const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product');

const { auth } = require("../middleware/auth");




// PRODUCTS

router.post("/uploadImage", auth, ProductController.uploadImage);

router.post("/uploadProduct", auth, ProductController.uploadProduct);

router.post("/getProducts", auth, ProductController.getProducts);

// ?id=${productId}&type=single
router.get("/products_by_id", auth, ProductController.getProductById);

router.delete("/deleteProduct", ProductController.deleteProduct); //admin auth to be added 

module.exports = router;