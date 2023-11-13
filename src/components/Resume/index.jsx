//Here, we render our "Resume".
import "./styles.css";
import resume from "../../assets/Kevin_Lewis_Dev_Resume_10-2023.pdf"

export default function Resume() {
    return (
      <iframe
        src={`${resume}#zoom=180`}
        width="100%"
        height="100%"
        title="Resume"
      ></iframe>
    );
}