// import profilepic from "../../assets/gs_no_shad.jpg";

import "./styles.css";
//Shows the contents of our "About" page, which also loads as the default.
export default function About() {
  return (
    <section id="about" className="box">
      <div id="row1">
        {/* <div id="pic-box">
          <img id="profile-pic" src={profilepic} alt="Picture of Kevin Lewis" />
        </div> */}

        <div className="paragraph-box">
            <h3 className="snark">Long Story Short...</h3>
          <p className="paragraph">
            I am a graduate of <span>UCSD</span>&apos;s Full-Stack Web
            Development program and have over 23 years of experience in the
            industries of Design and Publishing. Within this portfolio,
            you&apos;ll find my full resume and a showcase of projects. I am
            actively pursuing collaborations with fellow developers, new employment
            opportunities and networking.
            Should you have any inquiries about my work or background, please
            don&apos;t hesitate to reach out.
          </p>
        </div>
      </div>

      <div id="row2">
        <div className="paragraph-box">
          <h3 className="snark" id="long">
            Short Story Long...
          </h3>
          
          <p className="paragraph">
            I have dedicated my career to the creative fields, steadily gaining
            valuable experience along the way. Starting with my first job in the
            industry, which revolved around the creation of phone book ads, I
            recognized the crucial role of design in advertising.
          </p>
          <p className="paragraph">
            Venturing into magazine publishing, I refined my skills, immersing
            myself in the dynamic interplay of creativity and the business side
            of the industry. Collaborating with external partners, including
            printing plants and other vendors, I was able to enhance my
            organizational and problem-solving prowess.
          </p>
          <p className="paragraph">
            Guiding a talented team during my 3.5 years in a leadership role
            provided me with the invaluable opportunity to deepen my
            understanding of my staff and colleagues. These cumulative
            experiences empowered me to navigate the industry&apos;s
            complexities and to ensure that my creative endeavors are not just
            visually impactful but also strategically aligned with broader
            business objectives.
          </p>
        </div>
      </div>
    </section>
  );
}
