import profilepic from '../../assets/gs_no_shad.jpg';

import './styles.css';
//Shows the contents of our "About" page, which also loads as the default.
export default function About() {
    return (
      <section id="about">
        <div id="pic-box">
          <img id="profile-pic" src={ profilepic } alt="Picture of Kevin Lewis" />
        </div>

        <div id="paragraph-box">
          <p>
          I am a graduate of UCSD's full-stack web development program and have over 23 years of experience in the industries of Design and Publishing. I hope you enjoy the various projects that I'm showcasing here. I am actively seeking work and always looking to network and collaborate with like-minded, motivated developers. Enjoy, and contact me, should you have any questions on my work or background!
          </p>
        </div>   
      </section>
    );
  }
  