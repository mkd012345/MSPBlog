import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const BlogDetails = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold">Mahabharat</h1>
      <div className="flex items-center gap-4 mt-2">
        <img
          src="/images/user.png"
          alt="Author"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-gray-600 font-semibold">Manthan Kr</p>
          <p className="text-gray-500 text-sm">Thu, Feb 13 PM</p>
        </div>
      </div>

      <img
        src="/images/mahabharat.jpg"
        alt="Mahabharat Image"
        className="w-full h-96 object-cover mt-4 rounded-xl"
      />
      
      <div className="mt-6">
        <p className="text-lg font-semibold">The Mahabharata</p>
        <p className="text-gray-700 leading-relaxed mt-2">
          The Mahabharata is one of the two major Sanskrit epics of ancient India.
          It narrates the events of the Kurukshetra War, a war of succession between
          two groups of princely cousins, the Kauravas and the Pandavas.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          It also contains philosophical and devotional material, including the Bhagavad Gita.
        </p>
      </div>
      
      <div className="flex items-center gap-4 mt-6">
        <button onClick={handleLike} className="flex items-center gap-2 text-xl">
          <FaHeart className={isLiked ? 'text-red-500' : 'text-gray-400'} />
          <span>{likes}</span>
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Comments</h3>
        <div className="mt-2">
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
          />
          <button
            onClick={handleCommentSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Post Comment
          </button>
        </div>

        <ul className="mt-4">
          {comments.map((comment, index) => (
            <li key={index} className="p-2 border-b">{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetails;
