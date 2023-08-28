import NavBar from '../NavBar';
import './styles.css';

//This shows the contents of our "Header". It renders the "nav-bar" component.
export default function Header() {
    return (
        <header>
            <div className="header-box" id="logo-box">
                <p>test</p>
            </div>
            <div className="header-box" id="name-box">
                <h1 id="name">Kevin Lewis</h1>
            </div>
            <div className="header-box" id="webdev-box">
                <h1 id="webdev">Full-Stack Web Developer</h1>
            </div>
            <div id="nav">
                <NavBar />
            </div>
        </header>
    );
}
