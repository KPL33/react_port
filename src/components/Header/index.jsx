import NavBar from './components/NavBar';
import './styles.css';

//This shows the contents of our "Header". It renders the "nav-bar" component.
export default function Header() {
    return (
        <div className="Header">
            <div className="main">
                    
            </div>
            
            <div className="nav">
                <NavBar />
            </div>
        </div>
    );
}