import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Landing from "./pages/Landing";
import "aos/dist/aos.css";
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init({
      delay: 400,
      duration: 2000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
