import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <Router>
      <div className="p-8">
        {/* Navigation Links */}
        <nav className="mb-4">
          <Link to="/" className="mr-4 text-blue-500 hover:underline">Home</Link>
          <Link to="/login" className="mr-4 text-blue-500 hover:underline">Login</Link>
          <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
