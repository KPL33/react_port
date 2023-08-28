import "./styles.css";
import gitajob from "../../assets/gitajob.png";
import mfc from "../../assets/mfc.png";
import scheduler from "../../assets/scheduler.png";
import pwd from "../../assets/pwd.png";
import jate from "../../assets/jate.png";
import weather from "../../assets/weather.png";
import github from "../../assets/Octicons-mark-github.svg";
export default function Projects() {
  return (
    <main>
      <h3 className="intro">My Projects</h3>
      <div className="projects">
        <a
          className="project-box"
          href="https://shadowfre4k.github.io/Movie-Fight-Club/"
        >
          <div>
            <img
              className="box-container"
              src={mfc}
              alt="Image of 'Movie Fight Club App'"
            />
            <h5 className="title">Movie Fight Club</h5>
            <div className="github-link">
              <a href="https://github.com/KPL33"><img id="github" src={ github }  alt="GitHub logo" /></a>
            </div>
          </div>
        </a>
        <a
          className="project-box"
          href="https://murmuring-sierra-21351-123e19ae1f23.herokuapp.com/login"
        >
          <div>
            <img
              className="box-container"
              src={gitajob}
              alt="Image of 'GitAJob App'"
            />
          </div>
        </a>
      </div>
      <div className="projects">
        <a
          className="project-box"
          href="https://kpl33.github.io/work_day_scheduler/"
        >
          <div>
            <img
              className="box-container"
              src={scheduler}
              alt="Image of 'Day Scheduler App'"
            />
          </div>
        </a>
        <a className="project-box" href="https://kpl33.github.io/pwd_gen">
          <div>
            <img
              className="box-container"
              src={pwd}
              alt="Image of 'Random Password Generator App'"
            />
          </div>
        </a>
      </div>
      <div className="projects">
      <a className="project-box" href="https://cryptic-everglades-02017-1b72bab49c69.herokuapp.com/">
          <div>
            <img
              className="box-container"
              src={jate}
              alt="Image of 'Just Another Text Editor App'"
            />
          </div>
        </a>
        <a className="project-box" className="project-box" href="https://kpl33.github.io/weather_dashboard/">
          <div>
            <img
              className="box-container"
              src={weather}
              alt="Image of 'Weather Dashboard App'"
            />
          </div>
        </a>
      </div>
    </main>
  );
}
