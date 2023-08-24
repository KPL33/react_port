import { Link } from 'react-router-dom';
import './styles.css'

export default function NavBar() {
    return (
        <nav>
            <Link to="/About" alt="Links to the 'About' section."><h3>About Me</h3></Link>
            <Link to="/Projects" alt="Links to the 'Projects' section."><h3>My Projects</h3></Link>
            <Link to="/Resume" alt="Links to Resume"><h3>Resume</h3></Link>
            <Link to="Contact" alt="Links to the 'Contact' section."><h3>Contact</h3></Link>
        </nav>
    );
}