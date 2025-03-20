import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";


const Home = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold">Welcome to MSPBlog</h1>
      <p className="mt-4">Explore the latest blogs and meet the creators.</p>
    </div>
  );
};

const data = [
  {
    title: "Cyber Security",
    author: "Manthan Dubey",
    category: "Technology",
    image: "/images/img1 (2).jpg",
  },
  {
    title: "Virat Kohli",
    author: "Prince Chaudhri",
    category: "Sports",
    image: "/images/img1 (3).jpg",
  },
  {
    title: "Plant-Based Food",
    author: "Sahil Kumar",
    category: "Health",
    image: "/images/img1 (5).jpg",
  },
];

const Card = ({ title, author, category, image }) => (
  <div className="bg-white rounded-2xl shadow-lg p-5 w-full md:w-1/4 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
    <img src={image} alt={title} className="w-full h-52 object-cover rounded-lg" />
    <div className="mt-4">
      <span className="text-white text-sm px-3 py-1 rounded-full bg-red-500">#{category}</span>
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600 mt-1">Adding extra security helps protect your system.</p>
      <div className="flex items-center justify-center mt-3">
        <FaUser className="text-gray-600 mr-2" />
        <p className="text-gray-700">{author}</p>
      </div>
      <button className="mt-4 bg-green-500 text-white py-2 px-5 rounded-full shadow-md transform transition duration-300 hover:bg-blue-600 hover:scale-105">
        Read More →
      </button>
    </div>
  </div>
);

const HeroSection = () => {
  const images = [
    "/images/img1 (2).jpg",
    "/images/img1 (3).jpg",
    "/images/img1 (5).jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[450px] overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          alt="Hero"
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center ">
      <h1 className="font-bold text-5xl leading-tight">
          Ideas, Stories & Insights That<br />Inspire
        </h1>
        <p className="lead text-xl mt-2">
          Dive into a world of creativity, knowledge, and thought-provoking discussions.
        </p>
        <p className="text-xl mt-2">
          <FaUser className="inline mr-2" /> By Manthan Dubey
        </p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <HeroSection />
      <Home />
      <div className="flex justify-center gap-6 mt-5 flex-wrap">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
