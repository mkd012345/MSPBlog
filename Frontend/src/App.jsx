import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/CreateBlog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogDetails from './pages/BlogDetails';
import SavedBlogs from './pages/SavedBlogs';
import MyProfile from "./pages/MyProfile";
import MyBlog from './pages/MyBlog';
import EditBlog from './pages/EditBlog';



const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/CreateBlog" element={<CreateBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/saved-blogs" element={<SavedBlogs />} />
          {/* MyProfile route */}
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/my-blog" element={<MyBlog />} />
          <Route path="/edit-blog/:id" element={<EditBlog />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;