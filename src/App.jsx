import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

import "aos/dist/aos.css";
import AOS from "aos";
import { PageLoader } from "./component/PageLoader";
import { AppLoader } from "./component/AppLoader";
const Landing = lazy(() => import("./pages/Landing"));
const Contact = lazy(() => import("./pages/Contact"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const About = lazy(() => import("./pages/About"));
const TestimonialPage = lazy(() => import("./pages/TestimonialPage"));

function App() {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 2200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <Suspense fallback={<PageLoader />}>
      <AppLoader />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </Suspense>
  );
}

export default App;
