const express = require('express');
const router = express.Router();
// const { Category } = require("../models/Category");
const CategoriesControllers = require("../controllers/categories");

const { auth } = require("../middleware/auth");

router.post("/uploadCategory", auth, CategoriesControllers.uploadCategory);

router.get("/getCategories",  CategoriesControllers.getCategories);

router.delete("/deleteCategory", CategoriesControllers.deleteCategory); //Admin auth to be added

router.get("/getCategoryById", CategoriesControllers.getCategoryById); //Admin auth to be added

module.exports = router;