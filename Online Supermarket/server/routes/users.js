const express = require('express');
const router = express.Router();
const UsersController = require("../controllers/users")

const { auth } = require("../middleware/auth");

router.get("/auth", auth, UsersController.auth);

router.post("/register", UsersController.register);

router.post("/login", UsersController.login);

router.get("/logout", auth, UsersController.logout);

router.delete("/deleteUser", UsersController.delete);

router.get("/getUsers", UsersController.getUsers)

module.exports = router;