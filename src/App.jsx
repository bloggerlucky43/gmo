import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

import "aos/dist/aos.css";
import AOS from "aos";
import { PageLoader } from "./component/PageLoader";
const Landing = lazy(() => import("./pages/Landing"));
const Contact = lazy(() => import("./pages/Contact"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Equipment = lazy(() => import("./pages/Equipment"));
const Quote = lazy(() => import("./pages/Quote"));
const Careers = lazy(() => import("./pages/Careers"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
    });
  }, []);
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </Suspense>
  );
}

export default App;
