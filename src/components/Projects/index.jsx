//Here, we render our "Projects" page.

import "./styles.css";
import gitajob from "../../assets/gitajob.png";
import shoes from "../../assets/npm_shoes.png";
import mfc from "../../assets/mfc.png";
import scheduler from "../../assets/scheduler.png";
import pwd from "../../assets/pwd.png";
import jate from "../../assets/jate.png";
import weather from "../../assets/weather.png";
import github2 from "../../assets/Octicons-mark-github.svg";
export default function Projects() {
  return (
    <main>
      <h3 className="intro">My Projects</h3>
      <div className="projects">
        <div className="project-box">
          <a href="https://shadowfre4k.github.io/Movie-Fight-Club/">
            <img
              className="box-container"
              src={mfc}
              alt="Image of 'Movie Fight Club App'"
            />
            <h5 className="title">Movie Fight Club</h5>
          </a>
          <div className="github-link">
            <a href="https://github.com/shadowfre4k/Movie-Fight-Club">
              <img className="github2" src={github2} alt="GitHub logo" />
            </a>
          </div>
          <h6 className="desc">Front-End App</h6>
        </div>

        <div className="project-box">
          <a href="https://murmuring-sierra-21351-123e19ae1f23.herokuapp.com/login">
            <img
              className="box-container"
              src={gitajob}
              alt="Image of 'GitAJob App'"
            />
            <h5 className="title">GitAJob</h5>
          </a>
          <div className="github-link">
            <a href="https://github.com/rayr482/job-board">
              <img className="github2" src={github2} alt="GitHub logo" />
            </a>
          </div>
          <h6 className="desc">Full-Stack App</h6>
        </div>
      </div>

      <div className="projects">
        <div className="project-box">
          <a href="https://kpl33.github.io/work_day_scheduler/">
            <img
              className="box-container"
              src={scheduler}
              alt="Image of 'Day Scheduler App'"
            />
            <h5 className="title">Work Day Scheduler</h5>
          </a>
          <div className="github-link">
            <a href="https://github.com/KPL33/work_day_scheduler">
              <img className="github2" src={github2} alt="GitHub logo" />
            </a>
          </div>
          <h6 className="desc">Front-End App</h6>
        </div>

        <div className="project-box">
          <a href="https://kpl33.github.io/pwd_gen">
            <img
              className="box-container"
              src={pwd}
              alt="Image of 'Random Password Generator App'"
            />
            <h5 className="title">Password Generator</h5>
          </a>
          <div className="github-link">
            <a href="https://github.com/KPL33/pwd_gen">
              <img className="github2" src={github2} alt="GitHub logo" />
            </a>
          </div>
          <h6 className="desc">Front-End App</h6>
        </div>
      </div>

      <div className="projects">
        <div className="project-box">
          <a href="https://quiet-wave-07026-0aa4799b37aa.herokuapp.com/">
            <img
              className="box-container"
              src={shoes}
              alt="Image of 'NPM Shoes' App'"
            />
            <h5 className="title">NPM Shoes</h5>
          </a>
          <div className="github-link">
            <a href="https://github.com/SixFourDev/npm-run-start">
              <img className="github2" src={github2} alt="GitHub logo" />
            </a>
          </div>
          <h6 className="desc">Full-Stack App</h6>
        </div>

        <div className="project-box">
          <a href="https://cryptic-everglades-02017-1b72bab49c69.herokuapp.com/">
            <img
              className="box-container"
              src={jate}
              alt="Image of 'Just Another Text Editor App'"
            />
            <h5 className="title">Just Another Text Editor</h5>
          </a>
          <div className="github-link">
            <a href="https://github.com/KPL33/text_editor">
              <img className="github2" src={github2} alt="GitHub logo" />
            </a>
          </div>
          <h6 className="desc">PWA App</h6>
        </div>

        {/* <div className="project-box">
          <a href="https://kpl33.github.io/weather_dashboard/">
            <img
              className="box-container"
              src={weather}
              alt="Image of 'Weather Dashboard App'"
            />
            <h5 className="title">Weather Dashboard</h5>
          </a>
          <div className="github-link">
            <a href="https://github.com/KPL33/weather_dashboard">
              <img className="github2" src={github2} alt="GitHub logo" />
            </a>
          </div>
          <h6 className="desc">Front-End App</h6>
        </div> */}
      </div>
    </main>
  );
}
