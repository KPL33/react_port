import './styles.css'

export default function NavBar() {
    return (
        <nav>
            <a href="#About" alt="Links to the 'About' section."><h3>About Me</h3></a>
            <a href="#Projects" alt="Links to the 'Work' section."><h3>My Projects</h3></a>
            <a target="_blank" rel="noopener noreferrer" href="./assets/Kevin_Lewis_Resume_2023.pdf" alt="Opens 'Resume' in a new tab"><h3>Resume</h3></a>
            <a href="#Contact" alt="Links to the 'Contact' section."><h3>Contact</h3></a>
        </nav>
    );
}