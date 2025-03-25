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
    <div className="min-h-screen flex items-center justify-center bg-[#90CAF9]">
      <div className="bg-white/80 p-10 rounded-lg shadow-lg w-[800px] h-[450px] overflow-hidden">
        <h1 className="text-3xl font-bold mb-6 text-center">Create Blog</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Category */}
          <div>
            <label className="block mb-2">Category</label>
            <select
              className="w-full p-2 border rounded-lg"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="Tech">Tech</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Travel">Travel</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block mb-2">Title</label>
            <input
              type="text"
              placeholder="Enter Blog Title"
              className="w-full p-2 border rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Blog Image */}
          <div>
            <label className="block mb-2">Blog Image</label>
            <input
              type="file"
              className="w-full p-2 border rounded-lg"
              onChange={handleImageChange}
              required
            />
          </div>

          {/* About */}
          <div>
            <label className="block mb-2">About</label>
            <textarea
              placeholder="Write something about your blog"
              className="w-full p-2 border rounded-lg h-[100px]"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              required
            />
          </div>

          {/* Post Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Post Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
