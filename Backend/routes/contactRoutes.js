const express = require("express");
const router = express.Router();
const { sendContactMail } = require("../controllers/contactController");

// POST request to handle the contact form submission
router.post("/contact", sendContactMail);

module.exports = router;
