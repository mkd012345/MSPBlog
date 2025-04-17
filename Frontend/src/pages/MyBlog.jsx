import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const userId = JSON.parse(localStorage.getItem("user"))?.id;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/blogs/user/${userId}`
        );
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching user blogs:", err);
      }
    };

    if (userId) {
      fetchBlogs();
    }
  }, [userId]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-blog/${id}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Blogs</h2>
      {blogs.length === 0 ? (
        <p>No blogs found!</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden flex flex-col justify-between"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-700 text-sm line-clamp-3 mb-3">
                  {blog.content}
                </p>
                {blog.image && (
                  <img
                    src={`http://localhost:5000/uploads/${blog.image}`}
                    alt="Blog"
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                )}
              </div>

              <div className="flex justify-between px-4 pb-4 mt-auto">
                <button
                  onClick={() => handleEdit(blog.id)}
                  className="bg-blue-500 text-white text-sm py-1 px-4 rounded-lg hover:bg-blue-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="bg-red-500 text-white text-sm py-1 px-4 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBlog;
