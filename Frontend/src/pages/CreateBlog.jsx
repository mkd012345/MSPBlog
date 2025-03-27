import React, { useState } from "react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog Submitted:", { title, content, image });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200">
      
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white shadow-2xl rounded-xl p-10 w-full max-w-3xl h-auto hover:shadow-blue-300 transition duration-300">
          
          {/* Title */}
          <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            📝 Create a New Blog
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Blog Title */}
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

            {/* Blog Content */}
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

            {/* Image Upload */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Upload Image</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            {/* Submit Button */}
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
}
export default CreateBlog;
