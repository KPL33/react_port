import "./styles.css";
import resume from "../../assets/Kevin_Lewis_Dev_Resume_1-24.png";

export default function Resume() {
    return (
      <div className="resume">
        <img src={resume} />
        <a
          className="download"
          href="../../assets/Kevin_Lewis_FS_resume_1-24.docx"
          download="Kevin_Lewis_FS_resume.docx"
        >
          Download MS Word .docx
        </a>
        <a
          className="download"
          href="../../assets/Kevin_Lewis_Dev_Resume_1-24.pdf"
          download="Kevin_Lewis_FS_resume.pdf"
        >
          Download .pdf
        </a>
      </div>
    );
}