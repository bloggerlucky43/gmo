import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Landing from "./pages/Landing";
import "aos/dist/aos.css";
import AOS from "aos";
import Contact from "./pages/Contact";
import ServicePage from "./pages/ServicePage";
import About from "./pages/About";
import { TestimonialPage } from "./pages/TestimonialPage";
function App() {
  useEffect(() => {
    AOS.init({
      delay: 250,
      duration: 2500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/testimonial" element={<TestimonialPage />} />
    </Routes>
  );
}

export default App;
