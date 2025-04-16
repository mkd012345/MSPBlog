import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const MyProfile = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [newUsername, setNewUsername] = useState("");
  const [newProfileImage, setNewProfileImage] = useState(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

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

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/changePassword", {
        method: "POST",
        body: JSON.stringify({
          id: loggedInUser.id,
          oldPassword,
          newPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        alert("Password updated successfully!");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setError("");
      } else {
        alert(data.error || "Failed to update password");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

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
          window.location.href = "/login";
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
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Side - Profile Info */}
      <div className="flex flex-col items-center border-r md:pr-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">My Profile</h2>

        <img
          src={newProfileImage ? URL.createObjectURL(newProfileImage) : loggedInUser.profile_image}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md mb-4"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleProfileImageChange}
          className="mb-4 text-sm text-gray-500 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:bg-gray-50 hover:file:bg-gray-100"
        />

        <div className="w-full bg-gray-100 p-3 rounded-xl flex items-center mb-4">
          <FaUser className="text-gray-500 mr-3" />
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="w-full bg-transparent outline-none text-lg"
            placeholder="Enter new username"
          />
        </div>

        <button
          onClick={handleSaveChanges}
          className="mt-2 bg-blue-600 text-white py-2 px-6 rounded-xl hover:bg-blue-700 transition duration-200"
        >
          Save Changes
        </button>
      </div>

      {/* Right Side - Password & Delete */}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Change Password</h3>

          {error && <p className="text-red-500 mb-3">{error}</p>}

          <input
            type="password"
            placeholder="Enter old password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full mb-3 p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full mb-3 p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
          />

          <button
            onClick={handleChangePassword}
            className="bg-green-600 text-white py-2 px-6 rounded-xl hover:bg-green-700 transition duration-200"
          >
            Change Password
          </button>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold text-red-600 mb-3">Danger Zone</h3>
          <button
            onClick={handleDeleteAccount}
            className="w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition duration-200"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
