const mongoose = require("mongoose");
const Order = require("../models/order");
const Product = require("../models/product");
const User = require("../models/user");

exports.make_order = async (req, res, next) => {

  if (!(Array.isArray(req.body.items) && req.body.items.length)) {
    res.status(500).json({
      message: "It must be an Array and it can't be empty!"
    });
    return;
  }

  const orderObj = {
    location: {
      type: "Point",
      coordinates: req.body.coordinates
    },
    user: req.body.user,
  };

  let tmp = [];
  for (let item of req.body.items) {
    const prod = await getProdData(item.productId);

    tmp.push({
      productId: item.productId,
      name: prod.name,
      qty: item.qty,
      productPrice: prod.price,
      price: prod.price * item.quantity
    });
  }
  orderObj.items = tmp;

  let totalPrice = 0;
  orderObj.items.map(item => {
    totalPrice += item.price;
  });
  orderObj.orderTotal = totalPrice;

  const order = new Order(orderObj);

  try {
    const createdOrder = await order.save(); 
    res.status(201).json({
      createdOrder: createdOrder
    });
  } catch (error) {
    return res.status(500).json(err);
  }

  try {
    const author = await User.findById(req.body._id);
    if (!author) {
      throw new Error("User not found!");
    }

    author.orders.push(order);
    await author.save();
  } catch (err) {
    throw err;
  }

}

const getProdData = async id => {
  try {
    const prod = await Product.findById(id);
    if (!prod) {
      throw new Error("Product not found!");
    }

    return prod;
  } catch (err) {
    throw err;
  }
}