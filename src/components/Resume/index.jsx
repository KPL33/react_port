import resume from "../../assets/kevin_lewis_Resume_2023.pdf"

export default function Resume() {
    return (
      <div>
        <iframe src={ resume } width="100%" height="1000px" title="Resume"></iframe>
      </div>
    );
}