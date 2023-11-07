import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./pages/home/Home";
import Footer from "./layouts/Footer";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // เช็คขนาดหน้าจอแล้วเก็บลง state windowWidth
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar windowWidth={windowWidth} />
      <Routes>
        <Route path="/" element={<Home windowWidth={windowWidth} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
