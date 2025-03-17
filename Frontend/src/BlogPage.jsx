export default function BlogPage() {
    return (
      <div className="bg-blue-200 min-h-screen">
        {/* Navbar */}
        <nav className="bg-blue-300 p-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <span className="text-black">MSP</span>
            <span className="text-red-500">Blog</span>
          </div>
          <ul className="flex space-x-6">
            <li className="hover:underline">HOME</li>
            <li className="hover:underline">BLOGS</li>
            <li className="hover:underline">CREATORS</li>
            <li className="hover:underline">ABOUT</li>
            <li className="hover:underline">CONTACT</li>
          </ul>
          <button className="bg-black text-white px-4 py-2 rounded">LOGIN</button>
        </nav>
  
        {/* Blog Sections */}
        <div className="p-6 grid grid-cols-3 gap-6">
          {["Mahabharat", "Holi", "Tea Time"].map((title, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img
                src="public/images/mahabharat.jpg"
                alt={title}
                className="rounded-lg"
              />
              <h2 className="mt-2 font-bold">{title}</h2>
              <p className="text-gray-600">Author</p>
            </div>
          ))}
        </div>
  
        {/* Trending Section */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Trending</h2>
          <div className="grid grid-cols-3 gap-6">
            {["Coding", "Programming", "Statue"].map((title, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <img
                  src="public/images/holi.jpg"
                  alt={title}
                  className="rounded-lg"
                />
                <p className="mt-2 font-bold">{title}</p>
                <p className="text-gray-600">Author</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Popular Creators */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Popular Creators</h2>
          <div className="flex space-x-6">
            {Array(4).fill("Manthan Kr").map((name, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-400 rounded-full"></div>
                <p className="mt-2 font-bold">{name}</p>
                <p className="text-gray-600 text-sm">admin</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-blue-300 p-6 mt-6 text-center">
          <div className="flex justify-between">
            <div>
              <span className="text-black">MSP</span>
              <span className="text-red-500">Blog</span>
            </div>
            <div className="flex space-x-4">
              <p>Travel</p>
              <p>Technology</p>
              <p>Business</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Your Email"
                className="p-2 rounded"
              />
              <button className="bg-black text-white px-4 py-2 ml-2 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </footer>
      </div>
    );
  }