import React, { useState } from "react";

const CreateBlog = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [about, setAbout] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      category,
      title,
      image,
      about,
    });
    alert("Blog posted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[500px]">
        <h1 className="text-2xl font-bold mb-4">Create Blog</h1>

        <form onSubmit={handleSubmit}>
          {/* Category */}
          <label className="block mb-2">Category</label>
          <select
            className="w-full p-2 mb-4 border rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Tech">Tech</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Travel">Travel</option>
          </select>

          {/* Title */}
          <label className="block mb-2">Title</label>
          <input
            type="text"
            placeholder="Enter Blog Title"
            className="w-full p-2 mb-4 border rounded-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {/* Blog Image */}
          <label className="block mb-2">Blog Image</label>
          <input
            type="file"
            className="w-full p-2 mb-4 border rounded-lg"
            onChange={handleImageChange}
            required
          />

          {/* About */}
          <label className="block mb-2">About</label>
          <textarea
            placeholder="Write something about your blog"
            className="w-full p-2 mb-4 border rounded-lg"
            rows="4"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
          />

          {/* Post Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Post Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
