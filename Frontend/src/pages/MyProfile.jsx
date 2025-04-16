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
    formData.append("id", loggedInUser.id);
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

  if (!loggedInUser) return <div className="text-center text-blue-600">Loading...</div>;

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">My Profile</h2>
      <div className="flex flex-col items-center space-y-6 bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        {/* Profile Image */}
        <img
          src={
            newProfileImage
              ? URL.createObjectURL(newProfileImage)
              : loggedInUser.profile_image
          }
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4 border-4 border-blue-500"
        />

        {/* Profile Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleProfileImageChange}
          className="border border-gray-300 rounded-md p-2"
        />

        {/* Username */}
        <div className="flex items-center space-x-2 mb-6">
          <FaUser className="text-gray-500 text-xl" />
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full"
            placeholder="Enter new username"
          />
        </div>

        {/* Save Changes Button */}
        <button
          onClick={handleSaveChanges}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
