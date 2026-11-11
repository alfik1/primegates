import { useEffect } from "react";
import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PageHeader from "./components/PageHeader.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import ActivityDetail from "./pages/ActivityDetail.jsx";
import Contact from "./pages/Contact.jsx";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <>
      <PageHeader title="Page not found" />
      <section className="section container" style={{ textAlign: "center" }}>
        <p className="muted" style={{ marginBottom: 24 }}>This page does not exist or has moved.</p>
        <Link to="/about" className="btn btn-gold">Go to About us</Link>
      </section>
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/activities/:slug" element={<ActivityDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}