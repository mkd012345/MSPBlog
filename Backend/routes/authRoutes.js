const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  registerUser,
  loginUser,
  updateProfile,
} = require("../controllers/userController");

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Routes
router.post("/register", upload.single("profile_image"), registerUser);
router.post("/login", loginUser);
router.post("/updateProfile", upload.single("profile_image"), updateProfile); // 👈 middleware hata diya

module.exports = router;
