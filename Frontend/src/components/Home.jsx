import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MSPBlog 🚀</h1>
      <p className="text-lg mb-6">Explore amazing blogs and creators.</p>

      <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Go to Login
      </Link>
    </div>
  );
};

export default Home;
