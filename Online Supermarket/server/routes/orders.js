const express = require("express");
const router = express.Router();

// Controller reference
const OrdersController = require("../controllers/orders");

// Add Order
router.post("/makeOrder", OrdersController.make_order); //User Auth to be added 