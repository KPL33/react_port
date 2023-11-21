import { useState } from "react";
import Carousel from "../Carousel";

import "./styles.css";

import gitajob from "../../assets/gitajob.png";
import shoes from "../../assets/npm_shoes.png";
import mfc from "../../assets/mfc.png";
import scheduler from "../../assets/scheduler.png";
import pwd from "../../assets/passfinder.png";
import jate from "../../assets/jate.png";
import github2 from "../../assets/github2.svg";
// import weather from "../../assets/weather.png";

// import checkmateThumb from "../../assets/checkmate_thumb.jpg";
// import geminiThumb from "../../assets/gemini_thumb.jpg";
// import twitThumb from "../../assets/fmg_twitter_thumb.jpg";
// import battlecompThumb from "../../assets/battlecomp_thumb.jpg";
// import diamondOneThumb from "../../assets/diamond1_thumb.jpg";
// import diamondTwoThumb from "../../assets/diamond2_thumb.jpg";

export default function Projects() {
  const [clickedBoxes, setClickedBoxes] = useState({});
  const [reveal, setReveal] = useState(false);

  const appData = [
    {
      id: 1,
      imageUrl: pwd,
      title: "PassFinder",
      link: "https://candid-snickerdoodle-e60aa3.netlify.app/",
      githubLink: "https://github.com/KPL33/passfinder",
      description: "Click to view this Front-End Password Generator App",
    },
    {
      id: 2,
      imageUrl: mfc,
      title: "Movie Fight Club",
      link: "https://shadowfre4k.github.io/Movie-Fight-Club/",
      githubLink: "https://github.com/shadowfre4k/Movie-Fight-Club",
      description: "Click to view this Front-End Entertainment Rating App",
    },
    {
      id: 3,
      imageUrl: gitajob,
      title: "GitAJob",
      link: "https://murmuring-sierra-21351-123e19ae1f23.herokuapp.com/login",
      githubLink: "https://github.com/rayr482/job-board",
      description: "Click to view this Full-Stack Job-Search App",
    },
    {
      id: 4,
      imageUrl: scheduler,
      title: "Work Day Scheduler",
      link: "https://kpl33.github.io/work_day_scheduler/",
      githubLink: "https://github.com/KPL33/work_day_scheduler",
      description: "Click to view this Front-End Scheduling App",
    },
    {
      id: 5,
      imageUrl: shoes,
      title: "NPM Shoes",
      link: "https://quiet-wave-07026-0aa4799b37aa.herokuapp.com/",
      githubLink: "https://github.com/SixFourDev/npm-run-start",
      description: "Click to view this Full-Stack E-Commerce App",
    },
    {
      id: 6,
      imageUrl: jate,
      title: "J.A.T.E.",
      link: "https://cryptic-everglades-02017-1b72bab49c69.herokuapp.com/",
      githubLink: "https://github.com/KPL33/text_editor",
      description: "Click to view this PWA Text Editing App",
    },
  ];

  const handleBoxClick = (id) => {
    if (clickedBoxes[id] && reveal) {
      window.location.href = appData.find((app) => app.id === id).link;
    } else {
      setClickedBoxes((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }));
      setReveal(true);
    }
  };

  const handleMouseEnter = (id) => {
    if (window.innerWidth <= 500 && clickedBoxes[id]) {
      setClickedBoxes((prevState) => ({
        ...prevState,
        [id]: true,
      }));
      setReveal(true);
    }
  };

  const handleMouseLeave = (id) => {
    if (window.innerWidth <= 500 && clickedBoxes[id]) {
      setClickedBoxes((prevState) => ({
        ...prevState,
        [id]: false,
      }));
      setReveal(false);
    }
  };

  return (
    <div className="projects-page-box">
      <h3 className="intro">Apps</h3>
      <div id="apps-section">
        {appData.map((app) => (
          <div
            key={app.id}
            className={`app-box ${clickedBoxes[app.id] ? "clicked" : ""} ${
              clickedBoxes[app.id] && reveal ? "reveal" : ""
            }`}
            onClick={() => handleBoxClick(app.id)}
            onMouseEnter={() => handleMouseEnter(app.id)}
            onMouseLeave={() => handleMouseLeave(app.id)}
          >
            <a href={app.link} onClick={(e) => e.preventDefault()}>
              <img
                className="box-container"
                src={app.imageUrl}
                alt={`Image of ${app.title}`}
              />
              <h5
                className={`title ${
                  clickedBoxes[app.id] ? "visible" : "hidden"
                }`}
              >
                {app.title}
              </h5>
              <h6
                className={`desc ${
                  clickedBoxes[app.id] ? "visible" : "hidden"
                }`}
              >
                {app.description}
              </h6>
            </a>
            <div
              className={`github-link ${
                clickedBoxes[app.id] ? "visible" : "hidden"
              }`}
            >
              <a href={app.githubLink}>
                <img className="github2" src={github2} alt="GitHub logo" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <h3 className="intro">Ad Design</h3>
      <div id="ad-section">
        <Carousel />
      </div>
    </div>
  );
}
