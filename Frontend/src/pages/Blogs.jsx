import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const data = [
    { img: "images/food.jpg", name: "Manthan Kr", tag: "Food" },
    { img: "images/food.jpg", name: "Sahil Kr", tag: "Food" },
    { img: "images/img1 (2).jpg", name: "Prince Kr", tag: "Travel" },
    { img: "images/mahabharat.jpg", name: "Manthan Kr", tag: "Mahabharat", link: "/blog/mahabharat" },
    { img: "images/holi.jpg", name: "Sahil Kr", tag: "Holi" },
    { img: "images/img1 (3).jpg", name: "Prince Kr", tag: "Travel" },
    { img: "images/img1 (4).jpg", name: "Manthan Kr", tag: "Travel" },
    { img: "images/img1 (5).jpg", name: "Sahil Kr", tag: "Travel" },
    { img: "images/shiva.jpg", name: "Prince Kr", tag: "Mahadev" },
  ];

  const handleEdit = (index) => {
    console.log(`Editing blog ${index + 1}`);
    alert(`Edit blog: ${data[index].name}`);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${data[index].name}?`);
    if (confirmDelete) {
      console.log(`Deleting blog ${index + 1}`);
      alert(`Deleted blog: ${data[index].name}`);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {data.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
          <Link to={item.link || "#"} className="block">
            <img
              src={item.img}
              alt={item.tag || item.name}
              className="w-full h-52 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.name}</h3>
              {item.tag && (
                <div className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm inline-block">
                  {item.tag}
                </div>
              )}
            </div>
          </Link>
          <div className="flex justify-between items-center px-4 pb-4">
            <button
              onClick={() => handleEdit(index)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
