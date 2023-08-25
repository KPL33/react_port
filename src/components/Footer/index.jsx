import './styles.css';

import github from '../../assets/Octicons-mark-github.svg';
import linkedin from '../../assets/LI-In-Bug.svg';
import leetcode from '../../assets/leetcode_logo.svg';
//This shows the contents of our static "Footer".
export default function Footer() {
  return (
    <footer>
      <div id="socials">
        <img id="linkedin" src={ linkedin } alt="LinkedIn logo" />
        <img id="github" src={ github }  alt="GitHub logo" />
        <img id="leetcode" src={ leetcode } alt="LeetCode logo" />
      </div>
      <div>
        <p>Made with React, by Kevin Lewis</p>
      </div>      
    </footer>
  );
}
