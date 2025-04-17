const db = require("../db");

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const { title, content, user_id, category } = req.body;
    const image = req.file ? req.file.filename : null;

    // Log received data for debugging
    console.log('Received blog data:', { title, content, user_id, category, image });

    const result = await db.query(
      "INSERT INTO blogs (title, content, image, user_id, category) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, content, image, user_id, category]
    );

    console.log('Blog created:', result.rows[0]);
    res.status(201).json({ success: true, blog: result.rows[0] });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};

// Fetch all blogs
exports.getBlogs = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM blogs ORDER BY created_at DESC");
    res.status(200).json(result.rows); // Return array of blogs
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};

// Fetch a blog by ID
exports.getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM blogs WHERE id = $1', [id]);
    if (result.rows.length > 0) {
      const blog = result.rows[0];
      // Send the full image URL in the response
      blog.imageUrl = `/uploads/${blog.image}`;
      res.json(blog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching blog' });
  }
};
