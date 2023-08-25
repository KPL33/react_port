import profilepic from '../../assets/gs_no_shad.jpg';

import './styles.css';
//This shows the contents of our default page-load, the "About".
export default function About() {
    return (
      <section id="about">
        <img id="profile-pic" src={ profilepic } alt="Picture of Kevin Lewis" />

        <p>
        I have over 23 years of experience in the industries of Design and Publishing. For the past 15+ years, I served as Production Manager for Publishers' Development Corporation. Due to budget cuts, my role was absorbed and I am looking for a new opportunity to contribute to the bright future of a stable company.
        </p>
       </section>
    );
  }
  