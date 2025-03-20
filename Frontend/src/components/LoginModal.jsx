import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginModal = ({ onClose, onRegisterClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">LOGIN</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="flex items-center border rounded px-3 py-2 bg-gray-100">
            <FaEnvelope className="text-red-500 mr-3" />
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded px-3 py-2 bg-gray-100">
            <FaLock className="text-blue-500 mr-3" />
            <input
              type="password"
              placeholder="PASSWORD"
              className="w-full outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Cancel
            </button>
          </div>

          {/* Link to Register */}
          <div className="text-center text-sm mt-4">
            <span>Don't have an account? </span>
            <button
              onClick={onRegisterClick}
              className="text-blue-700 hover:underline"
            >
              Register Here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
