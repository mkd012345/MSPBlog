import React from 'react';

const BlogDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-10 bg-white rounded-xl shadow-xl mt-10">
      <h1 className="text-4xl font-bold">Mahabharat</h1>
      <div className="flex items-center gap-6 mt-4">
        <img
          src="/images/user.png" 
          alt="Author"
          className="w-14 h-14 rounded-full"
        />
        <div>
          <p className="text-gray-600 font-semibold text-lg">Manthan Kr</p>
          <p className="text-gray-500 text-sm">Thu, Feb 13 PM</p>
        </div>
      </div>

      <img
        src="/images/mahabharat.jpg"
        alt="Mahabharat Image"
        className="w-full h-72 object-cover mt-6 rounded-lg"
      />
      
      <div className="mt-8">
        <p className="text-xl font-semibold">The Mahabharata</p>
        <p className="text-gray-700 leading-relaxed mt-4">
          The Mahabharata is one of the two major Sanskrit epics of ancient India.
          It narrates the events of the Kurukshetra War, a war of succession between
          two groups of princely cousins, the Kauravas and the Pandavas.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          It also contains philosophical and devotional material, including the Bhagavad Gita.
          The story of Damayanti, the story of Shakuntala, and an abbreviated version of the Ramayana
          are often considered works in their own right.
        </p>
      </div>
      
      <div className="mt-8">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg">
          Read Letter
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
