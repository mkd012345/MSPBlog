import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [view, setView] = useState('users');
  const [loading, setLoading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState({ show: false, id: null, type: '' }); // For delete confirmation
  const navigate = useNavigate();

  useEffect(() => {
    const savedView = localStorage.getItem('adminView');
    if (savedView) {
      setView(savedView);
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        if (view === 'users') {
          const userResponse = await axios.get("http://localhost:5000/api/admin/users");
          setUsers(userResponse.data);
        } else if (view === 'blogs') {
          const blogResponse = await axios.get("http://localhost:5000/api/admin/blogs");
          setBlogs(blogResponse.data);
        }
      } catch (err) {
        console.error("Error fetching data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [view]);

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/blog/${id}`);
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (err) {
      console.error("Error deleting blog", err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/user/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      console.error("Error deleting user", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminView');
    navigate('/admin-login');
  };

  const handleViewChange = (newView) => {
    setView(newView);
    localStorage.setItem('adminView', newView);
  };

  const handleDeleteConfirm = (id, type) => {
    setDeleteConfirm({ show: true, id, type });
  };

  const handleConfirmDelete = () => {
    if (deleteConfirm.type === 'user') {
      deleteUser(deleteConfirm.id);
    } else if (deleteConfirm.type === 'blog') {
      deleteBlog(deleteConfirm.id);
    }
    setDeleteConfirm({ show: false, id: null, type: '' }); // Close the confirmation dialog
  };

  const handleCancelDelete = () => {
    setDeleteConfirm({ show: false, id: null, type: '' }); // Close the confirmation dialog
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-semibold text-center text-blue-600">Admin Panel</h1>

      <div className="flex justify-center gap-6 mb-6">
        <button
          className={`px-6 py-2 rounded-lg ${view === 'users' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => handleViewChange('users')}
        >
          All Users
        </button>
        <button
          className={`px-6 py-2 rounded-lg ${view === 'blogs' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => handleViewChange('blogs')}
        >
          All Blogs
        </button>
      </div>

      <div className="flex justify-end mb-6">
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {loading ? (
        <div className="text-center text-blue-600">Loading...</div>
      ) : view === 'users' ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Users</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {users.length > 0 ? (
              users.map((user) => (
                <div key={user.id} className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform hover:scale-105">
                  {user.profile_image && (
                    <img
                      src={`http://localhost:5000${user.profile_image}`}
                      alt={user.username}
                      className="w-20 h-20 rounded-full object-cover mb-4 mx-auto"
                    />
                  )}
                  <p className="font-semibold text-lg text-center text-gray-700"> {user.username}</p>
                  <p className="text-gray-600 text-center">Email: {user.email}</p>
                  <button
                    onClick={() => handleDeleteConfirm(user.id, 'user')}
                    className="mt-4 block mx-auto bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    Delete User
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No users found.</p>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <div key={blog.id} className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform hover:scale-105">
                  {blog.image_url && (
                    <img
                      src={`http://localhost:5000${blog.image_url}`}
                      alt={blog.title}
                      className="w-full h-40 object-cover rounded-lg mb-4 mx-auto"
                    />
                  )}
                  <h3 className="text-lg font-semibold text-gray-800 text-center">{blog.title}</h3>
                  <p className="text-sm text-gray-600 mb-2 text-center line-clamp-3">{blog.content}</p>
                  <p className="text-sm text-blue-600 font-medium text-center">Author: {blog.author || "Unknown"}</p>
                  <p className="text-sm text-gray-500 text-center">Category: {blog.category || "General"}</p>
                  <button
                    onClick={() => handleDeleteConfirm(blog.id, 'blog')}
                    className="mt-4 block mx-auto bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    Delete Blog
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No blogs found.</p>
            )}
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm.show && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
            <h3 className="text-xl font-semibold text-gray-800">Are you sure you want to delete this {deleteConfirm.type === 'user' ? 'user' : 'blog'}?</h3>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Yes, Delete
              </button>
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
