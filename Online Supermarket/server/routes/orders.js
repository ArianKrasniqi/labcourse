const express = require("express");
const router = express.Router();

// Controller reference
const OrdersController = require("../controllers/orders");

// Get Orders
router.get("/getOrdersByUserId/:userId", OrdersController.getOrdersByUserId);

// Add Order
router.post("/makeOrder", OrdersController.makeOrder); //User Auth to be added 

router.patch("/setDelivered", OrdersController.setDelivered);

module.exports = router;