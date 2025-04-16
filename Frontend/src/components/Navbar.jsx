import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // Toggle between Login & Register modal
  const openRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const openLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <nav className="bg-blue-300 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          <span className="text-black">MSP</span>
          <span className="text-red-500">Blog</span>
        </Link>

        {/* Navbar Links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-black hover:text-blue-500">HOME</Link>
          <Link to="/blogs" className="text-black hover:text-blue-500">BLOGS</Link>
          <Link to="/CreateBlog" className="text-black hover:text-blue-500">CREATE-BLOG</Link>
          <Link to="/about" className="text-black hover:text-blue-500">ABOUT</Link>
          <Link to="/contact" className="text-black hover:text-blue-500">CONTACT</Link>
        </div>

        {/* Login & Register Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => setIsLoginOpen(true)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            LOGIN
          </button>

          <button
            onClick={openRegister}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            REGISTER
          </button>
        </div>
      </div>

      {/* Modals */}
      {isLoginOpen && (
        <LoginModal
          onClose={() => setIsLoginOpen(false)}
          onRegisterClick={openRegister}
        />
      )}

      {isRegisterOpen && (
        <RegisterModal
          onClose={() => setIsRegisterOpen(false)}
          onLoginClick={openLogin}
        />
      )}
    </nav>
  );
};

export default Navbar;
