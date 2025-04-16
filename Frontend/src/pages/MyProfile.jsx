import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const MyProfile = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [newUsername, setNewUsername] = useState("");
  const [newProfileImage, setNewProfileImage] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoggedInUser(user);
      setNewUsername(user.username);
    }
  }, []);

  const handleProfileImageChange = (e) => {
    setNewProfileImage(e.target.files[0]);
  };

  const handleSaveChanges = async () => {
    if (!loggedInUser) return;

    const formData = new FormData();
    formData.append("id", loggedInUser.id); // 👈 ID pass kar rahe hain
    formData.append("username", newUsername);
    if (newProfileImage) {
      formData.append("profile_image", newProfileImage);
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/updateProfile", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Profile updated!");
        const updatedUser = {
          ...loggedInUser,
          username: newUsername,
          profile_image: data.profile_image,
        };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setLoggedInUser(updatedUser);
        setNewProfileImage(null);
      } else {
        alert(data.error || "Failed to update profile");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  // Handle delete account
  const handleDeleteAccount = async () => {
    if (!loggedInUser) return;

    const confirmed = window.confirm("Are you sure you want to delete your account?");
    if (confirmed) {
      try {
        const response = await fetch(`http://localhost:5000/api/auth/deleteAccount/${loggedInUser.id}`, {
          method: "DELETE",
        });

        const data = await response.json();
        if (response.ok) {
          alert("Account deleted successfully!");
          localStorage.removeItem("user");
          window.location.href = "/login"; // Redirect to login page or home page
        } else {
          alert(data.error || "Failed to delete account");
        }
      } catch (err) {
        console.error(err);
        alert("Something went wrong!");
      }
    }
  };

  if (!loggedInUser) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="container mx-auto p-8 max-w-2xl bg-white shadow-xl rounded-xl mt-6">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">My Profile</h2>

      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <img
          src={newProfileImage ? URL.createObjectURL(newProfileImage) : loggedInUser.profile_image}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-xl"
        />
      </div>

      {/* File Input for Profile Image */}
      <div className="mb-6 text-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleProfileImageChange}
          className="block w-full text-sm text-gray-500 file:py-3 file:px-4 file:rounded-xl file:border file:border-gray-300 file:text-gray-700 file:bg-gray-50 hover:file:bg-gray-100"
        />
      </div>

      {/* Username Input */}
      <div className="flex items-center mb-6 bg-gray-100 p-3 rounded-lg">
        <FaUser className="text-gray-500 mr-4" />
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          className="border-none bg-transparent text-lg w-full focus:outline-none"
          placeholder="Enter new username"
        />
      </div>

      {/* Save Changes Button */}
      <div className="text-center">
        <button
          onClick={handleSaveChanges}
          className="bg-blue-600 text-white py-3 px-8 rounded-xl hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Save Changes
        </button>
      </div>

      {/* Delete Account Button */}
      <div className="mt-8 text-center">
        <button
          onClick={handleDeleteAccount}
          className="bg-red-500 text-white py-3 px-8 rounded-xl hover:bg-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
