import './styles.css'

//This shows the contents of our static "Footer".
export default function Footer() {
  return (
    <footer>
      <div id="socials">
        <img src="src/assets/LI-In-Bug.svg" alt="LinkedIn logo" />
        <img id="github" src="src/assets/Octicons-mark-github.svg" alt="GitHub logo" />
        <img src="src/assets/leetcode_logo.svg" alt="LeetCode logo" />
      </div>
      <div>
        <p>Made with React, by Kevin Lewis</p>
      </div>      
    </footer>
  );
}
