import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams(); // Fetching blog ID from URL
  const navigate = useNavigate();
  const [blog, setBlog] = useState({ title: '', content: '', category: '', image: '' });
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  // Static categories for the blog
  const categories = ["Technology", "Lifestyle", "Health", "Education"];

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error("Error fetching blog data:", err);
      }
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', blog.title);
      formData.append('content', blog.content);
      formData.append('category', blog.category);
      if (blog.image) {
        formData.append('image', blog.image); // Include image if available
      }

      // Sending PUT request to update the blog
      const response = await axios.put(`http://localhost:5000/api/blogs/${id}`, formData);
      
      // If the update is successful, show success message and navigate
      if (response.status === 200) {
        setSuccessMessage('Blog updated successfully!'); // Set success message
      }
    } catch (err) {
      console.error("Error updating blog:", err);
    }
  };

  const handleImageChange = (e) => {
    setBlog({ ...blog, image: e.target.files[0] });
  };

  const handleSuccessMessageClose = () => {
    setSuccessMessage('');
    navigate('/my-blog'); // Redirect after closing the message
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-16 mb-16">
      <h2 className="text-3xl font-bold text-center mb-6">Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold">Title</label>
          <input
            type="text"
            id="title"
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Content */}
        <div className="mb-4">
          <label htmlFor="content" className="block text-lg font-semibold">Content</label>
          <textarea
            id="content"
            value={blog.content}
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Category (Static categories, can't change) */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-lg font-semibold">Category</label>
          <select
            id="category"
            value={blog.category}
            onChange={(e) => setBlog({ ...blog, category: e.target.value })}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            disabled
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-semibold">Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Update Blog
          </button>
        </div>
      </form>

      {/* Success Message */}
      {successMessage && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-green-500 text-white p-4 text-center">
          <p>{successMessage}</p>
          <button
            onClick={handleSuccessMessageClose}
            className="mt-2 bg-white text-green-500 py-1 px-4 rounded-lg"
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBlog;
