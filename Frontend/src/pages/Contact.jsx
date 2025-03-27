import React, { useState } from "react";

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "India",
    subject: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
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
