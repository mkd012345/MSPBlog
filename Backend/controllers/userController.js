const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const profileImage = req.file ? req.file.filename : null;

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
    res.status(500).json({ error: "Server error" });
  }
};

// Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (result.rows.length === 0) return res.status(400).json({ error: "User not found" });

    const user = result.rows[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: "Invalid password" });

    const token = jwt.sign({ id: user.id }, "your_jwt_secret", { expiresIn: "1h" });

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
    res.status(500).json({ error: "Server error" });
  }
};

// Update Profile (without JWT)
exports.updateProfile = async (req, res) => {
  const { id, username } = req.body;
  const profileImage = req.file ? req.file.filename : null;

  try {
    const currentUserResult = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (currentUserResult.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const currentUser = currentUserResult.rows[0];
    const finalImage = profileImage || currentUser.profile_image;

    const result = await pool.query(
      "UPDATE users SET username = $1, profile_image = $2 WHERE id = $3 RETURNING id, username, profile_image",
      [username, finalImage, id]
    );

    const updatedUser = result.rows[0];
    res.status(200).json({
      message: "Profile updated",
      profile_image: `http://localhost:5000/uploads/${updatedUser.profile_image}`,
    });
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({ error: "Server error" });
  }
};
