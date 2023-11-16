import profilepic from "../../assets/gs_no_shad.jpg";

import "./styles.css";
//Shows the contents of our "About" page, which also loads as the default.
export default function About() {
  return (
    <section id="about" className="box">
      <div id="row1">
        <div id="pic-box">
          <img id="profile-pic" src={profilepic} alt="Picture of Kevin Lewis" />
        </div>

        <div id="paragraph-box-1">
          <h3 className="snark">Long Story Short...</h3>
          <p className="paragraph">
            I am a graduate of <span>UCSD</span>&apos;s full-stack web
            development program and have over 23 years of experience in the
            industries of Design and Publishing. Within this portfolio,
            you&apos;ll find a showcase of projects. I am actively in pursuit of
            new opportunities and keen to engage in networking and explore
            potential collaborations with fellow developers. Should you have any
            inquiries about my work or background, please don&apos;t hesitate to
            reach out.
          </p>
        </div>
      </div>

      <div id="row2">
        <h3 className="snark" id="long">Short Story Long...</h3>
        <p className="paragraph">
          From an early age, my passion for design and art has been a driving
          force in shaping my worldview. I believe that creative thinking can
          give us a greater understanding of each other. Every design conveys a
          message. Whether that design lands you a job or gets someone thinking
          a bit differently for a moment, art can be a powerful catalyst for
          positive change.
        </p>
        <p className="paragraph">
          I have dedicated my career to the creative fields, steadily gaining
          valuable experience along the way. Starting with my first job in the
          industry, which revolved around the creation of phone book ads, I
          recognized the crucial role of design in advertising.
        </p>
        <p className="paragraph">
          Venturing into magazine publishing, I refined my skills, immersing
          myself in the dynamic interplay of creativity and the business side of
          the industry. Collaborating with external partners, including printing
          plants and other vendors, enhanced my organizational and
          problem-solving prowess.
        </p>
        <p className="paragraph">
          Guiding a talented team during my 3.5 years in a leadership role
          provided me with the invaluable opportunity to deepen my understanding
          of my staff and colleagues. These cumulative experiences, empowered me to
          navigate the industry&apos;s complexities and to ensure that my
          creative endeavors are not just visually impactful but also
          strategically aligned with broader business objectives.
        </p>
      </div>
    </section>
  );
}
