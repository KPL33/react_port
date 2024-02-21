import { useLocation } from "react-router-dom";
import About from "../About";
import Projects from "../Projects";
import Resume from "../Resume";
import Contact from "../Contact";
// import Contact2 from "../Page/Contact2";

import "./styles.css";

export default function Page() {
  const { pathname: currentPage } = useLocation();

  let activeContent;
  if (currentPage === "/About") {
    activeContent = <About />;
  } else if (currentPage === "/Projects") {
    activeContent = <Projects />;
  } else if (currentPage === "/Resume") {
    activeContent = <Resume />;
  } else if (currentPage === "/Contact") {
    activeContent = <Contact />;
  // } else if (currentPage === "/Contact2") {
  //   activeContent = <Contact2 />;
  } else {
    activeContent = <About />;
  }

  return <div className="page">{activeContent}</div>;
}
