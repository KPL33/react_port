import "./styles.css";
import resume from "../../assets/Kevin_Lewis_Dev_Resume_1-20-24.png";
import pdfDoc from "../../assets/Kevin_Lewis_Dev_Resume_1-20-24.pdf";

export default function Resume() {
  return (
    <div className="resume">
      <img src={resume} alt="Resume" />
      <a
        className="download"
        href="/Kevin_Lewis_Dev_resume_1-20-24.docx" // Adjust the path as needed
        download="Kevin_Lewis_FS_Resume.docx"
      >
        Download MS Word .docx
      </a>
      <a
        className="download"
        href={pdfDoc}
        download="Kevin_Lewis_Dev_Resume.pdf"
      >
        Download .pdf
      </a>
    </div>
  );
}
