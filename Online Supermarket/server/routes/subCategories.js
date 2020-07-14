const express = require('express');
const router = express.Router();

const SubCategoryController = require('../controllers/subCategories');

router.post("/uploadSubCategory", SubCategoryController.uploadSubCategory); //Admin auth to be added

router.patch("/updateSubCategory", SubCategoryController.updateSubCategory); //Admin auth to be added

router.get("/getSubCategoryById", SubCategoryController.getSubCategoryById); //Admin auth to be added

router.get("/getSubCategories", SubCategoryController.getSubCategories); //Admin auth to be added

router.delete("/deleteSubCategory", SubCategoryController.deleteSubCategory); //Admin auth to be added

module.exports = router;