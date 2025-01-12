import { useState, useEffect, useRef } from "react";
// import Carousel from "../Carousel";
// import AppCarousel from "../AppCarousel";

import "./styles.css";

import atg from "../../assets/atg.jpg";
// import gitajob from "../../assets/gitajob.png";
// import shoes from "../../assets/npm_shoes.png";
import mf from "../../assets/mf.jpg";
import scheduler from "../../assets/scheduler.png";
import pwd from "../../assets/passfinder.png";
import jate from "../../assets/jate.png";
import github_app_box from "../../assets/github_app_box.svg";
import weather from "../../assets/weather.png";
import AdCarousel from "../AdCarousel";

export default function Projects() {
  const [clickedBoxes, setClickedBoxes] = useState({});
  const [reveal, setReveal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1440);
  const clickedBoxRef = useRef(null);

  const appData = [
    {
      id: 1,
      imageUrl: atg,
      title: "Against the Grains",
      link: "https://againstthegrains-aa0209e9c70a.herokuapp.com/",
      githubLink: "https://github.com/KPL33/cereal-shop",
      description: "Click to view this Full-Stack E-Commerce App",
    },
    {
      id: 2,
      imageUrl: mf,
      title: "Movie Fight",
      link: "https://rt-movie-fight.netlify.app/",
      githubLink: "https://github.com/KPL33/movie-fight",
      description: "Click to view this Front-End Movie Rating App",
    },
    {
      id: 3,
      imageUrl: pwd,
      title: "PassFinder",
      link: "https://pass-finder.netlify.app/",
      githubLink: "https://github.com/KPL33/passfinder",
      description: "Click to view this Front-End Password Generator App",
    },
    {
      id: 4,
      imageUrl: weather,
      title: "WeatherWise",
      link: "https://weather-wise-site.netlify.app/",
      githubLink: "https://github.com/KPL33/weather",
      description: "Click to view this Front-End Weather App",
    },
    {
      id: 5,
      imageUrl: jate,
      title: "J.A.T.E.",
      link: "https://cryptic-everglades-02017-1b72bab49c69.herokuapp.com/",
      githubLink: "https://github.com/KPL33/text_editor",
      description: "Click to view this PWA Text Editing App",
    },
    {
      id: 6,
      imageUrl: scheduler,
      title: "Work Day Scheduler",
      link: "https://kpl33.github.io/work_day_scheduler/",
      githubLink: "https://github.com/KPL33/work_day_scheduler",
      description: "Click to view this Front-End Scheduling App",
    },
    // {
    //   id: 7,
    //   imageUrl: gitajob,
    //   title: "GitAJob",
    //   link: "https://murmuring-sierra-21351-123e19ae1f23.herokuapp.com/login",
    //   githubLink: "https://github.com/rayr482/job-board",
    //   description: "Click to view this Full-Stack Job-Search App",
    // },
    // {
    //   id: 8,
    //   imageUrl: shoes,
    //   title: "NPM Shoes",
    //   link: "https://quiet-wave-07026-0aa4799b37aa.herokuapp.com/",
    //   githubLink: "https://github.com/SixFourDev/npm-run-start",
    //   description: "Click to view this Full-Stack E-Commerce App",
    // }
  ];

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 600;
      const newIsSmallScreen = window.innerWidth <= 1440;

      // Reset state when transitioning between mobile and non-mobile views
      if (isMobile !== newIsMobile) {
        setIsMobile(newIsMobile);
        setClickedBoxes({});
        setReveal(false);
      }

      if (isSmallScreen !== newIsSmallScreen) {
        setIsSmallScreen(newIsSmallScreen);
      }
    };

    handleResize(); // Set initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, isSmallScreen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        clickedBoxRef.current &&
        !clickedBoxRef.current.contains(event.target)
      ) {
        // Click occurred outside the clicked app-box, reset opacity
        setClickedBoxes({});
        setReveal(false);
      }
    };

    // Event listener for clicks outside the clicked app-box
    document.body.addEventListener("click", handleOutsideClick);
    document.body.addEventListener("scroll", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
      document.body.removeEventListener("scroll", handleOutsideClick);
    };
  }, []);

  const handleBoxClick = (id, isGitHubLink) => {
    const app = appData.find((app) => app.id === id);

    if (!isMobile) {
      if (!isGitHubLink && !clickedBoxes[id]) {
        // On larger screens, first click reveals details
        setClickedBoxes((prevState) => ({
          ...prevState,
          [id]: true,
        }));
        setReveal(true);
      } else if (!isGitHubLink && clickedBoxes[id]) {
        // On larger screens, subsequent clicks redirect to the app link
        window.open(app.link, "_blank");
      } else if (isGitHubLink) {
        // Open GitHub link when the GitHub logo is clicked
        window.open(app.githubLink, "_blank");
      }
    } else {
      if (!isGitHubLink && !clickedBoxes[id]) {
        // On smaller screens, first click reveals details
        setClickedBoxes((prevState) => ({
          ...prevState,
          [id]: true,
        }));
        setReveal(true);
      } else if (!isGitHubLink && clickedBoxes[id]) {
        // On smaller screens, subsequent clicks redirect to the app link
        window.open(app.link, "_blank");
      } else if (isGitHubLink) {
        // Open GitHub link when the GitHub logo is clicked
        window.open(app.githubLink, "_blank");
      }
    }
  };

  const handleMouseEnter = (id) => {
    if (!isMobile || (isMobile && clickedBoxes[id])) {
      setClickedBoxes((prevState) => ({
        ...prevState,
        [id]: true,
      }));
      setReveal(true);
    }
  };

  const handleMouseLeave = (id) => {
    if (isMobile && clickedBoxes[id]) {
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
        {appData.slice(0, -2).map((app) => (
          <div
            key={app.id}
            className={`app-box ${clickedBoxes[app.id] ? "clicked" : ""} ${
              clickedBoxes[app.id] && reveal ? "reveal" : ""
            }`}
            onClick={() => handleBoxClick(app.id, false)}
            onMouseEnter={() => handleMouseEnter(app.id)}
            onMouseLeave={() => handleMouseLeave(app.id)}
          >
            <a
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.preventDefault()}
            >
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
              <a
                href={app.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  handleBoxClick(app.id, true);
                }}
              >
                <img
                  className="github2"
                  src={github_app_box}
                  alt="GitHub logo"
                />
              </a>
            </div>
          </div>
        ))}
        {isSmallScreen ? (
          appData.slice(-2).map((app) => (
            <div
              key={app.id}
              className={`app-box ${clickedBoxes[app.id] ? "clicked" : ""} ${
                clickedBoxes[app.id] && reveal ? "reveal" : ""
              }`}
              onClick={() => handleBoxClick(app.id, false)}
              onMouseEnter={() => handleMouseEnter(app.id)}
              onMouseLeave={() => handleMouseLeave(app.id)}
            >
              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.preventDefault()}
              >
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
                <a
                  href={app.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleBoxClick(app.id, true);
                  }}
                >
                  <img
                    className="github2"
                    src={github_app_box}
                    alt="GitHub logo"
                  />
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="pair">
            {appData.slice(-2).map((app) => (
              <div
                key={app.id}
                className={`app-box ${clickedBoxes[app.id] ? "clicked" : ""} ${
                  clickedBoxes[app.id] && reveal ? "reveal" : ""
                }`}
                onClick={() => handleBoxClick(app.id, false)}
                onMouseEnter={() => handleMouseEnter(app.id)}
                onMouseLeave={() => handleMouseLeave(app.id)}
              >
                <a
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.preventDefault()}
                >
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
                  <a
                    href={app.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleBoxClick(app.id, true);
                    }}
                  >
                    <img
                      className="github2"
                      src={github_app_box}
                      alt="GitHub logo"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <h3 className="intro">Design</h3>
      <div id="ad-section">
        {/* <Carousel /> */}
        <AdCarousel />
      </div>
    </div>
  );
}
