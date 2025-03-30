import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

const Blogs = () => {
  const data = [
    { id: 1, img: "images/food.jpg", name: "Manthan Kr", tag: "Food", content: "Delicious food blog" },
    { id: 2, img: "images/mahabharat.jpg", name: "Mahabharat", tag: "Epic", content: "Ancient Indian epic story" },
    { id: 3, img: "images/shiva.jpg", name: "Lord Shiva", tag: "Mythology", content: "Stories of Lord Shiva" },
    { id: 4, img: "images/holi.jpg", name: "Holi Festival", tag: "Festival", content: "Vibrant festival of colors" },
    { id: 5, img: "images/travel.jpg", name: "Adventure Trip", tag: "Travel", content: "Travel experiences and tips" },
    { id: 6, img: "images/tech.jpg", name: "Tech World", tag: "Technology", content: "Latest tech trends and news" },
    { id: 7, img: "images/food.jpg", name: "Foodie Blog", tag: "Cuisine", content: "All about cuisines and recipes" },
    { id: 8, img: "images/travel.jpg", name: "Globetrotter", tag: "Travel", content: "Traveling around the world" },
    { id: 9, img: "images/tech.jpg", name: "Gadget Reviews", tag: "Tech", content: "Latest tech gadget reviews" },
  ];

  const [bookmarks, setBookmarks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(savedBookmarks);
  }, []);

  const toggleBookmark = (blog) => {
    let updatedBookmarks;
    const isBookmarked = bookmarks.some((b) => b.id === blog.id);

    if (isBookmarked) {
      updatedBookmarks = bookmarks.filter((b) => b.id !== blog.id);
    } else {
      updatedBookmarks = [...bookmarks, blog];
    }

    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  // 🛠️ Filter blogs based on category
  const filteredData = data
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => selectedCategory === 'All' || item.tag === selectedCategory);

  const totalPages = Math.ceil(filteredData.length / blogsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredData.slice(startIndex, startIndex + blogsPerPage);

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Explore Blogs</h1>
        <Link to="/saved-blogs" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          View Saved Blogs
        </Link>
      </div>

      {/* Category Filter */}
      <div className="flex gap-4 mb-6">
        {['All', 'Food', 'Epic', 'Mythology', 'Festival', 'Travel', 'Technology', 'Cuisine', 'Tech'].map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-lg transition ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-700 hover:bg-blue-400 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded-lg mb-4"
      />

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentBlogs.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 relative">
            <Link to={`/blog/${item.id}`} className="block">
              <img src={item.img} alt={item.name} className="w-full h-52 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-600">{item.content}</p>
                <div className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm inline-block">
                  {item.tag}
                </div>
              </div>
            </Link>

            {/* Bookmark Button */}
            <button
              onClick={() => toggleBookmark(item)}
              className="absolute top-4 right-4 text-2xl"
            >
              {bookmarks.some((b) => b.id === item.id) ? (
                <FaBookmark className="text-yellow-500" />
              ) : (
                <FaRegBookmark className="text-gray-500" />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`mx-2 px-4 py-2 rounded-lg ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
