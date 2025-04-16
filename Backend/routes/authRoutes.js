const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");
const { getProfile } = require("../controllers/userController");
const authenticateToken = require("../middlewares/authMiddleware"); // Importing the middleware

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
