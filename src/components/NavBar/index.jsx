import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("/"); // default to home
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  // const handleContactClick = (event) => {
  //   event.preventDefault();
    
  //   const footer = document.getElementById("contact-section");
  //   if (footer) {
  //     footer.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <nav className="nav-box">
      <Link
        to="/About"
        className={`nav-link ${activeLink === "/About" ? "active" : ""}`}
        alt="Links to the 'About' section."
      >
        <h3 className="link">About Me</h3>
      </Link>
      <Link
        to="/Projects"
        className={`nav-link ${activeLink === "/Projects" ? "active" : ""}`}
        alt="Links to the 'Projects' section."
      >
        <h3 className="link">My Projects</h3>
      </Link>
      <Link
        to="/Resume"
        className={`nav-link ${activeLink === "/Resume" ? "active" : ""}`}
        alt="Links to Resume"
      >
        <h3 className="link">Resume</h3>
      </Link>
      <Link
        to="/Contact"
        className={`nav-link ${activeLink === "/Contact" ? "active" : ""}`}
        alt="Links to the 'Contact' section."
      >
        <h3 className="link">Contact</h3>
      </Link>
      {/* <Link
        to="/Contact"
        onClick={handleContactClick}
        className={`nav-link ${activeLink === "/Contact" ? "active" : ""}`}
        alt="Links to the 'Contact' section."
      >
        <h3 className="link">Contact</h3>
      </Link> */}
    </nav>
  );
}
