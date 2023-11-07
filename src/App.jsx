import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Navbar from "./layouts/Navbar";
import Home from "./pages/home/Home";
import Footer from "./layouts/Footer";

function App() {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    () => clearTimeout(timeout);
  }, [loading]);

  return (
    <>
      {loading ? (
        <div
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 40%, #A3CFC0), linear-gradient(270deg, transparent 40%, #A3CFC0)`,
          }}
          className="w-full h-screen flex justify-center items-center"
        >
          <PulseLoader color="#2F5C6F" />
        </div>
      ) : (
        <>
          <Navbar windowWidth={windowWidth} />
          <Routes>
            <Route path="/" element={<Home windowWidth={windowWidth} />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
