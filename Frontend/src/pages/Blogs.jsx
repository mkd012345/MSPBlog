import React from "react";

const Blogs = () => {
  const data = [
    { img: "images/food.jpg", name: "Manthan Kr", tag: "" },
    { img: "images/food.jpg", name: "Sahil Kr", tag: "" },
    { img: "images/img1 (2).jpg", name: "Prince Kr", tag: "" },
    { img: "images/mahabharat.jpg", name: "Manthan Kr", tag: "Mahabharat" },
    { img: "images/holi.jpg", name: "Sahil Kr", tag: "Holi" },
    { img: "images/img1 (3).jpg", name: "Prince Kr", tag: "" },
    { img: "images/img1 (4).jpg", name: "Manthan Kr", tag: "" },
    { img: "images/img1 (5).jpg", name: "Sahil Kr", tag: "" },
    { img: "images/shiva.jpg", name: "Prince Kr", tag: "" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {data.map((item, index) => (
        <div key={index} className="relative rounded-lg overflow-hidden shadow-md">
          <img
            src={item.img}
            alt={item.tag || item.name}
            className="w-full h-48 object-cover"
          />
          {item.tag && (
            <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 text-sm">
              {item.tag}
            </div>
          )}
          <div className="p-4 bg-gray-100 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <span className="font-bold">{item.name[0]}</span>
              </div>
              <span className="ml-2 text-gray-800">{item.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
