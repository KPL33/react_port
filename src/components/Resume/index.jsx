import "./styles.css";
import resume from "../../assets/Kevin_Lewis_Dev_Resume_2024.png";
import pdfDoc from "../../assets/Kevin_Lewis_Dev_Resume_2024.pdf";

export default function Resume() {
  return (
    <div className="resume">
      <img src={resume} alt="Resume" />
      <a
        className="download"
        href={pdfDoc}
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
