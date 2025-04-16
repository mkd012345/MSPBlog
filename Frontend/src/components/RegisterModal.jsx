import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaCamera } from "react-icons/fa";

const RegisterModal = ({ onClose, onLoginClick }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Profile Image:", profileImage);

    // Handle form submission (send data to backend, including the image)
    onClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // Preview image locally
    }
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

        <h2 className="text-2xl font-bold text-center mb-6">REGISTER</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div className="flex items-center border rounded px-3 py-2 bg-gray-100">
            <FaUser className="text-green-500 mr-3" />
            <input
              type="text"
              placeholder="USERNAME"
              className="w-full outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

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

          {/* Profile Image */}
          <div className="flex items-center border rounded px-3 py-2 bg-gray-100">
            <FaCamera className="text-gray-500 mr-3" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full outline-none"
            />
          </div>

          {/* Image Preview */}
          {profileImage && (
            <div className="mt-4 text-center">
              <img
                src={profileImage}
                alt="Profile Preview"
                className="w-32 h-32 rounded-full mx-auto"
              />
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Register
            </button>

            <button
              onClick={onLoginClick}
              className="text-blue-700 hover:underline"
            >
              Login Here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
