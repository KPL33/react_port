import NavBar from '../NavBar';
import './styles.css';

//This shows the contents of our "Header". It renders the "nav-bar" component.
export default function Header() {
    return (
        <header>
            <div className="header-box" id="logo">
                <p>test</p>
            </div>
            <div className="header-box" id="name-webdev">
                <h1 id="name">Kevin Lewis</h1>
                <h3 id="webdev">Full-Stack Web Developer</h3>
            </div>
            <div id="nav">
                <NavBar />
            </div>
        </header>
    );
}
