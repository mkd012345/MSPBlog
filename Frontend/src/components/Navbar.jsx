import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-300 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold">
            <span className="text-black">MSP</span>
            <span className="text-red-500">Blog</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-black hover:text-blue-500">HOME</Link>
          <Link to="/blogs" className="text-black hover:text-blue-500">BLOGS</Link>
          <Link to="/creators" className="text-black hover:text-blue-500">CREATORS</Link>
          <Link to="/about" className="text-black hover:text-blue-500">ABOUT</Link>
          <Link to="/contact" className="text-black hover:text-blue-500">CONTACT</Link>
        </div>

        {/* Login Button */}
        <Link to="/login" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          LOGIN
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
