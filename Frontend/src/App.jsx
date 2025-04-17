import { Routes, Route, useLocation } from "react-router-dom";
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
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';

const App = () => {
  const location = useLocation();
  
  // Check if the current path is either Admin Login or Admin Panel
  const isAdminPage = location.pathname === '/admin-login' || location.pathname === '/admin';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Render Navbar and Footer only if not on Admin pages */}
      {!isAdminPage && <Navbar />}
      
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
          
          {/* Admin Login Route */}
          <Route path="/admin-login" element={<AdminLogin />} />
          
          {/* Admin Panel Route */}
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>

      {/* Render Footer only if not on Admin pages */}
      {!isAdminPage && <Footer />}
    </div>
  );
};

export default App;
