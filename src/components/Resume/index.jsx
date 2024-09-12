import "./styles.css";
import resume from "../../assets/Kevin_Lewis_Dev_Resume_2024.png";

export default function Resume() {
  return (
    <div className="resume">
      <div className="resume-image-wrapper">
        <img src={resume} alt="Resume" />
        <div className="link-container">
          <div className="resume-link linkedin-link-on-resume">
            <a href="https://www.linkedin.com/in/kevin-lewis92126"></a>
          </div>

          <div className="resume-link github-link-on-resume">
            <a href="https://github.com/KPL33"></a>
          </div>

          <div className="resume-link projects-link-on-resume">
            <a href="/Projects"></a>
          </div>

          <div className="resume-link email-link-on-resume">
            <a href="/Contact"></a>
          </div>

          <div className="resume-link phone-link-on-resume">
            <a href="tel:+18582041792"></a>
          </div>
        </div>
      </div>

      <a
        className="download"
        href="/Kevin_Lewis_Dev_Resume_2024.pdf"
        download="Kevin_Lewis_Dev_Resume.pdf"
      >
        Download .pdf
      </a>
      <a
        className="download"
        href="/Kevin_Lewis_Design_Resume_2024.docx"
        download="Kevin_Lewis_FS_Resume.docx"
      >
        Download MS Word .docx
      </a>
    </div>
  );
}
