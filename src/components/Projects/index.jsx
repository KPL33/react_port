import './styles.css'
import gitajob from '../../assets/gitajob.png';
import mfc from '../../assets/mfc.png';

export default function Projects() {
    return (
        <main>
            <h3 className="intro">My Projects</h3>
            <div className="projects">
                <a href="https://shadowfre4k.github.io/Movie-Fight-Club/">
                    <img className="box-container" src = { mfc } alt="Image of 'Movie Fight Club App'" />
                </a>
            
                <a href="https://murmuring-sierra-21351-123e19ae1f23.herokuapp.com/login">
                    <img className="box-container" src = { gitajob } alt="Image of 'GitAJob App'" />
                    </a>
            </div>

            <div className="projects">
                <a href="https://shadowfre4k.github.io/Movie-Fight-Club/">
                    <img className="box-container" src = { mfc } alt="Image of 'Movie Fight Club App'" />
                </a>
            
                <a href="https://murmuring-sierra-21351-123e19ae1f23.herokuapp.com/login">
                    <img className="box-container" src = { gitajob } alt="Image of 'GitAJob App'" />
                    </a>
            </div>
                   
            <div className="projects">
                <a href="https://shadowfre4k.github.io/Movie-Fight-Club/">
                    <img className="box-container" src = { mfc } alt="Image of 'Movie Fight Club App'" />
                </a>
            
                <a href="https://murmuring-sierra-21351-123e19ae1f23.herokuapp.com/login">
                    <img className="box-container" src = { gitajob } alt="Image of 'GitAJob App'" />
                    </a>
            </div>            
                     
        </main>
    );
}