import { Link } from 'react-router-dom';
import './styles.css'

export default function NavBar() {
    return (
        <nav className="nav-box">
            <Link to="/About" className="nav-link" alt="Links to the 'About' section."><h3 className="link">About Me</h3></Link>
            <Link to="/Projects" className="nav-link" alt="Links to the 'Projects' section."><h3 className="link">My Projects</h3></Link>
            <Link to="/Resume" className="nav-link" alt="Links to Resume"><h3 className="link">Resume</h3></Link>
            <Link to="Contact" className="nav-link" alt="Links to the 'Contact' section."><h3 className="link">Contact</h3></Link>
        </nav>
    );
}