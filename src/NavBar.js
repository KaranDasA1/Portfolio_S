import './NavBar.css';
import logo from './assets/logo.png'; // Import the logo

function NavBar() {
    return (
        <div className="navbar">
            <img src={logo} alt="Logo" className="nav-logo" /> {logo.png}
            <ul className="nav-items">
                <li className="nav-item"><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">About</a></li>
                <li className="nav-item"><a href="#">Projects</a></li>
                <li className="nav-item"><a href="#">Resume</a></li>
            </ul>
        </div>
    );
}

export default NavBar;
