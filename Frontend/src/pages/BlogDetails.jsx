import React, { useState } from 'react';
import { FaHeart, FaRegComment, FaSun, FaMoon } from 'react-icons/fa';

const BlogDetails = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ✅ Handle Like button
  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  // ✅ Handle Comment Submission
  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const timestamp = new Date().toLocaleString();
      const newCommentObj = {
        text: newComment,
        timestamp,
        username: 'User'
      };
      setComments([newCommentObj, ...comments]);
      setNewComment('');
    }
  };

  // ✅ Toggle Dark/Light Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen p-10 transition duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>

      {/* ✅ Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Mahabharat</h1>
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />} 
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        {/* ✅ Author Section */}
        <div className="flex items-center gap-4">
          <img
            src="/images/user.png"
            alt="Author"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <p className="font-semibold">Manthan Kr</p>
            <p className="text-sm text-gray-500">{new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {/* ✅ Blog Image */}
        <img
          src="/images/mahabharat.jpg"
          alt="Mahabharat Image"
          className="w-full h-[600px] object-cover mt-6 rounded-xl shadow-lg"
        />

        {/* ✅ Blog Content */}
        <div className="mt-8">
          <p className="text-2xl font-semibold">The Mahabharata</p>
          <p className="leading-relaxed mt-4">
            The Mahabharata is one of the two major Sanskrit epics of ancient India.
            It narrates the events of the Kurukshetra War, a war of succession between
            two groups of princely cousins, the Kauravas and the Pandavas.
          </p>
          <p className="leading-relaxed mt-4">
            It also contains philosophical and devotional material, including the Bhagavad Gita.
          </p>
        </div>

        {/* ✅ Like & Comment Section */}
        <div className="flex items-center gap-6 mt-8">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 text-xl transition ${isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-400'}`}
          >
            <FaHeart />
            <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
          </button>

          <div className="flex items-center gap-2 text-gray-500">
            <FaRegComment />
            <span>{comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}</span>
          </div>
        </div>

        {/* ✅ Comment Input */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold">Comments</h3>
          <div className="mt-4 flex gap-4">
            <input
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className={`w-full p-3 border rounded-lg focus:outline-none ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white text-black placeholder-gray-600'}`}
            />
            <button
              onClick={handleCommentSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Post
            </button>
          </div>
        </div>

        {/* ✅ Comment List */}
        <ul className="mt-6 space-y-4">
          {comments.map((comment, index) => (
            <li
              key={index}
              className={`p-4 border rounded-lg shadow-md transition ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}
            >
              <p className="font-semibold">User</p>
              <p className="text-sm text-gray-500">{comment.timestamp}</p>
              <p className="mt-2">{comment.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetails;
