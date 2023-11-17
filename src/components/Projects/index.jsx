import "./styles.css";
import gitajob from "../../assets/gitajob.png";
import shoes from "../../assets/npm_shoes.png";
import mfc from "../../assets/mfc.png";
import scheduler from "../../assets/scheduler.png";
import pwd from "../../assets/passfinder.png";
import jate from "../../assets/jate.png";
// import weather from "../../assets/weather.png";
import github2 from "../../assets/Octicons-mark-github.svg";

import checkmateThumb from "../../assets/checkmate_thumb.jpg";
// import checkmatePrev from "../../assets/checkmate_prev.jpg";
import geminiThumb from "../../assets/gemini_thumb.jpg";
// import geminiPrev from "../../assets/gemini_prev.jpg";
import twitThumb from "../../assets/fmg_twitter_thumb.jpg";
// import twitPrev from "../../assets/fmg_twitter_prev.jpg";
import battlecompThumb from "../../assets/battlecomp_thumb.jpg";
// import battlecompPrev from "../../assets/battlecomp_prev.jpg";
import diamondOneThumb from "../../assets/diamond1_thumb.jpg";
// import diamondOnePrev from "../../assets/diamond1_prev.jpg";
import diamondTwoThumb from "../../assets/diamond2_thumb.jpg";
// import diamondTwoPrev from "../../assets/diamond2_prev.jpg";


export default function Projects() {
  return (
    <div className="projects-page-box">
      <h3 className="intro">Apps</h3>
      <div id="apps-section">
        <div className="app-box">
          <a href="https://candid-snickerdoodle-e60aa3.netlify.app/">
            <img
              className="box-container"
              src={pwd}
              alt="Image of 'Random Password Generator App'"
            />
            <h5 className="title">PassFinder</h5>
          </a>
          <div className="github-link">
            <a href="https://github.com/KPL33/passfinder">
              <img className="github2" src={github2} alt="GitHub logo" />
            </a>
          </div>
          <h6 className="desc">
            Front-End App. Generates passwords.
          </h6>
        </div>
        <div className="app-box">
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
          <h6 className="desc">
            Front-End App. Compares Rotten Tomatoes scores.
          </h6>
        </div>

        <div className="app-box">
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
          <h6 className="desc">
            Full-Stack,
            <br />
            Job-Search App.
          </h6>
        </div>

        <div className="app-box">
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
          <h6 className="desc">Front-End App.</h6>
        </div>
        <div className="app-box">
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
          <h6 className="desc">
            Full-Stack,
            <br />
            E-Commerce App.
          </h6>
        </div>

        <div className="app-box">
          <a href="https://cryptic-everglades-02017-1b72bab49c69.herokuapp.com/">
            <img
              className="box-container"
              src={jate}
              alt="Image of 'Just Another Text Editor App'"
            />
            <h5 className="title">J.A.T.E.</h5>
          </a>
          <div className="github-link">
            <a href="https://github.com/KPL33/text_editor">
              <img className="github2" src={github2} alt="GitHub logo" />
            </a>
          </div>
          <h6 className="desc">
            PWA App for
            <br />
            Text Editing
          </h6>
        </div>
      </div>

      <div className="projects-page-box">
        <h3 className="intro">Ad Design</h3>
        <div id="ad-section">
          <a href="https://candid-snickerdoodle-e60aa3.netlify.app/">
            <img
              className="ad fp"
              src={checkmateThumb}
              alt="Image of 'Checkmate'ad"
            />
          </a>

          <a href="https://candid-snickerdoodle-e60aa3.netlify.app/">
            <img
              className="ad one-sixth-vt"
              src={geminiThumb}
              alt="Image of 'Gemini Customs' ad"
            />
          </a>

          <a href="https://candid-snickerdoodle-e60aa3.netlify.app/">
            <img
              className="ad one-half-hz"
              src={twitThumb}
              alt="Image of 'FMG Twitter' ad"
            />
          </a>

          <a href="https://candid-snickerdoodle-e60aa3.netlify.app/">
            <img
              className="ad fp"
              src={battlecompThumb}
              alt="Image of 'Battle Comp' ad"
            />
          </a>

          <a href="https://candid-snickerdoodle-e60aa3.netlify.app/">
            <img
              className="ad fp"
              src={diamondOneThumb}
              alt="Image of 'Diamond D Custom Leather' ad, version 1"
            />
          </a>

          <a href="https://candid-snickerdoodle-e60aa3.netlify.app/">
            <img
              className="ad fp"
              src={diamondTwoThumb}
              alt="Image of 'Diamond D Custom Leather' ad, version 2"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
