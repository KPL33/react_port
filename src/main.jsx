import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import ErrorPage from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// Here, we enable the "routing" for our page, so that it can determine what content to render.

//Here, we instruct the page to render the appropriate content, depending on the route name (portion after the 2nd "/" in each path below). These route names match our various folder names, within the "components" folder. Javascript will default to finding the file "index.js" files in each folder specified, which is why the exact file does not need to be listed here.
