//Here, we render our "Footer".

import './styles.css';

import github from '../../assets/Octicons-mark-github.svg';
import linkedin from '../../assets/LI-In-Bug.svg';
import leetcode from '../../assets/leetcode_logo.svg';
//This shows the contents of our static "Footer".
export default function Footer() {
  return (
    <footer id="footer">
      <div className="socials">
        <a href="https://www.linkedin.com/in/kevin-lewis92126"><img id="linkedin" className="social-logo" src={ linkedin } alt="LinkedIn logo" /></a>
        <a href="https://github.com/KPL33"><img id="github" className="social-logo" src={ github }  alt="GitHub logo" /></a>
        <a href="https://leetcode.com/KPL33/"><img id="leetcode" className="social-logo" src={ leetcode } alt="LeetCode logo" /></a>
      </div>
      <div>
        <p id="madewith">Made with React, by Kevin Lewis</p>
      </div>      
    </footer>
  );
}
