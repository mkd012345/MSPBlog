import React, { useState } from "react";
import axios from "axios";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [category, setCategory] = useState("");  // Category state

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const user = JSON.parse(localStorage.getItem("user")); // assuming you saved user object here
    const user_id = user?.id;
  
    if (!user_id) {
      alert("⚠️ User not logged in.");
      return;
    }

    if (!category) {
      alert("⚠️ Please select a category.");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);
    formData.append("user_id", user_id); // send user_id
    formData.append("category", category);  // Send the category field
  
    try {
      const res = await axios.post("http://localhost:5000/api/blogs/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log("Blog created:", res.data);
      alert("✅ Blog published successfully!");
      setTitle("");
      setContent("");
      setImage(null);
      setCategory('');  // Reset category after submission
    } catch (err) {
      console.error("Error creating blog:", err.response?.data || err.message);
      alert("❌ Error creating blog.");
    }
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white shadow-2xl rounded-xl p-10 w-full max-w-3xl h-auto hover:shadow-blue-300 transition duration-300">
          <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            📝 Create a New Blog
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Title</label>
              <input
                type="text"
                placeholder="Enter blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Content</label>
              <textarea
                placeholder="Write your blog content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Upload Image</label>
              <input
                type="file"
                onChange={handleImageChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              {preview && (
                <img src={preview} alt="Preview" className="w-40 h-40 object-cover rounded-lg" />
              )}
            </div>

            {/* Category dropdown */}
            <div className="form-group">
              <label>Category</label>
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                className="form-control w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                <option value="">Select Category</option>
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
              </select>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300"
              >
                🚀 Publish Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
