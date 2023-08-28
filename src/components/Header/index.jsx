import NavBar from '../NavBar';
import './styles.css';

//This shows the contents of our "Header". It renders the "nav-bar" component.
export default function Header() {
    return (
        <header>
            <div id="logo-container">
                <p>test</p>
            </div>
            <div id="name-box">
                <h1 id="name">Kevin Lewis</h1>
            </div>
            
            <div id="nav">
                <NavBar />
            </div>
        </header>
    );
}
