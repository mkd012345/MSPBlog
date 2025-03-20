import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa"; // For icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black bg-opacity-40">
      <div className="bg-blue-300 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">LOGIN</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="flex items-center border rounded px-3 py-2 bg-white">
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

          {/* Password Input */}
          <div className="flex items-center border rounded px-3 py-2 bg-white">
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

          {/* Login Button */}
          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Login Now
          </button>

          {/* Links */}
          <div className="text-center text-sm mt-2">
            <span>Don't have an account? </span>
            <Link to="/register" className="text-blue-700 hover:underline">
              Register Here
            </Link>
            <span className="mx-2">|</span>
            <Link to="/forgot-password" className="text-blue-700 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Admin Login */}
          <div className="text-center mt-4">
            <span className="text-gray-500">or</span>
            <button className="block w-full bg-black text-white py-2 mt-2 rounded hover:bg-gray-800">
              Admin Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
  