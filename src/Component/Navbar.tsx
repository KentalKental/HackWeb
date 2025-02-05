// BOOTSTRAP 5
import 'bootstrap/dist/css/bootstrap.min.css';

// BOOTSTRAP ICONS
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
    return (
        <nav className="navbar px-3 navbar-expand-lg bg-transparent">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Logo / Brand */}
                <a href="#" className="navbar-brand fw-bold">TRADE</a>

                {/* Navbar Links */}
                <ul className="navbar-nav d-flex flex-row gap-4 mx-auto fw-bold">
                    <li className="nav-item">
                        <a href="#" className="nav-link">CREATE HACKATHON</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">JOIN HACKATHON</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">MENTORSHIP</a>
                    </li>
                </ul>

                {/* Profile Section */}
                <div className="profile d-flex align-items-center">
                    <a href='#'>
                        <img
                            src="..\src\assets\pfp.jpg"
                            className="img-fluid rounded-circle"
                            alt="Profile"
                            style={{ height: "30px", width: "30px", marginRight: "8px" }}
                        />
                        <img src="..\src\assets\ArrowPfp.svg" alt="" />                        
                    </a>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
