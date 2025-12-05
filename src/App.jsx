// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom"; // <-- no BrowserRouter here
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className=" min-h-screen w-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
