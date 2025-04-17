import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "India",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is logged in (token exists)
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to send a message.");
      return;
    }

    // Prepare data for backend (no need to send 'from' email)
    const contactData = {
      subject: formData.subject,
      message: `${formData.firstName} ${formData.lastName} from ${formData.country} says:\n\n${formData.subject}`,
      country: formData.country,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        contactData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token to backend
          },
        }
      );

      if (response.status === 200) {
        alert("Form submitted successfully!");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          country: "India",
          subject: "",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center py-10">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-[1200px] w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            Have a question about our content or want to collaborate? Let’s build something great together—reach out today!
          </p>
        </div>

        {/* Form and Image Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/images/contact-image.jpg"
              alt="Contact"
              className="w-full h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Form Section */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-gray-700 font-medium">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Your first name.."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-gray-700 font-medium">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Your last name.."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              {/* Country Select */}
              <div>
                <label htmlFor="country" className="block text-gray-700 font-medium">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-blue-300"
                >
                  <option value="India">India</option>
                  <option value="Canada">Canada</option>
                  <option value="USA">USA</option>
                  <option value="Nepal">Nepal</option>
                </select>
              </div>

              {/* Subject / Message */}
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium">Subject</label>
                <textarea
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Write something.."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 h-40 focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
