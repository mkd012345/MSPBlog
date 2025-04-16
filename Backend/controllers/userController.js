const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ✅ Register User with Image Upload
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const profileImage = req.file ? req.file.filename : null; // multer se image ka naam

  try {
    const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      "INSERT INTO users (username, email, password, profile_image) VALUES ($1, $2, $3, $4) RETURNING id, username, email, profile_image",
      [username, email, hashedPassword, profileImage]
    );

    const user = result.rows[0];
    user.profile_image = user.profile_image ? `http://localhost:5000/uploads/${user.profile_image}` : null;

    res.status(201).json({ message: "User registered", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// ✅ Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (result.rows.length === 0) {
      return res.status(400).json({ error: "User not found" });
    }

    const user = result.rows[0];
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, "your_jwt_secret", { expiresIn: "1h" });

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        profile_image: user.profile_image ? `http://localhost:5000/uploads/${user.profile_image}` : null,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
