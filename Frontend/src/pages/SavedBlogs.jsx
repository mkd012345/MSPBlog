import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SavedBlogs = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(savedBookmarks);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Saved Blogs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarks.length > 0 ? (
          bookmarks.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <Link to={`/blog/${blog.id}`} className="block">
                <img src={blog.img} alt={blog.name} className="w-full h-52 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{blog.name}</h3>
                  <p className="text-gray-600">{blog.content}</p>
                  <div className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm inline-block">
                    {blog.tag}
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-xl">No saved blogs found!</p>
        )}
      </div>

      <Link to="/Blogs" className="block mt-6 text-blue-500 hover:underline">
        ← Back to Blogs
      </Link>
    </div>
  );
};

export default SavedBlogs;
