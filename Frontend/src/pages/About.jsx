import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* About Section */}
      <div className="relative bg-gray-700 text-white text-center py-16">
        <button
          className="absolute top-5 left-5 text-white text-2xl hover:text-gray-300"
          onClick={() => navigate("/")}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <h1 className="text-4xl font-bold">About Us Page</h1>
        <p className="mt-4 text-lg">Welcome to our blogging platform, where ideas come to life!</p>
        <p className="mt-2 text-lg">We are passionate about sharing knowledge, experiences, and stories through engaging and informative blog posts.</p>
        <p className="mt-2 text-lg">Our platform is designed to be responsive, ensuring a seamless reading experience on any device.</p>
      </div>

      {/* Our Team Section */}
      <h2 className="text-3xl font-bold text-center my-10">Our Team</h2>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {/* Manthan Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80 transform transition duration-300 hover:scale-105">
          <img src="/images/manthan.jpg" alt="Manthan" className="w-full h-60 object-cover" />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold">Manthan Dubey</h2>
            <p className="text-gray-600 font-semibold">Frontend Developer</p>
            <p className="mt-2 text-sm">Passionate about creating engaging UI designs with a smooth user experience.</p>
            <p className="mt-2 text-sm">mdubey724@rku.ac.in</p>
            <a href="contact.jsx?name=Manthan Dubey" className="block bg-black text-white rounded-md py-2 mt-4 hover:bg-gray-800 transition">
              Contact
            </a>
          </div>
        </div>

        {/* Prince Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80 transform transition duration-300 hover:scale-105">
          <img src="/images/img1 (2).jpg" alt="Prince" className="w-full h-60 object-cover" />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold">Prince Chaudhari</h2>
            <p className="text-gray-600 font-semibold">Backend Developer</p>
            <p className="mt-2 text-sm">Focused on building secure and scalable web applications.</p>
            <p className="mt-2 text-sm">prince@example.com</p>
            <a href="contact.jsx?name=Prince Chaudhari" className="block bg-black text-white rounded-md py-2 mt-4 hover:bg-gray-800 transition">
              Contact
            </a>
          </div>
        </div>

        {/* Sahil Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80 transform transition duration-300 hover:scale-105">
          <img src="/images/sahil.jpg" alt="Sahil" className="w-full h-60 object-cover" />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold">Sahil Kumar</h2>
            <p className="text-gray-600 font-semibold">Designer</p>
            <p className="mt-2 text-sm">Expert in crafting visually appealing and intuitive designs.</p>
            <p className="mt-2 text-sm">sahil@example.com</p>
            <a href="contact.jsx?name=Sahil Kumar" className="block bg-black text-white rounded-md py-2 mt-4 hover:bg-gray-800 transition">
              Contact
            </a>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default About;
