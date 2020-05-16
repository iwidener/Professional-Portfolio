import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
            <Link className="navbar-brand" to="/Professional-Portfolio/">Inna Widener</Link>
            <div>
                <ul className="navbar-nav">

                    <li className="nav-item">

                        <Link to="/Professional-Portfolio/"
                            className={window.location.pathname === "/Professional-Portfolio/" || window.location.pathname === "/Professional-Portfolio/about" ? "nav-link active" : "nav-link"}
                        >
                            About
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/Professional-Portfolio/portfolio"
                            className={window.location.pathname === "/Professional-Portfolio/portfolio" ? "nav-link active" : "nav-link"}
                        >
                            Portfolio
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/Professional-Portfolio/contact"
                            className={window.location.pathname === "/Professional-Portfolio/contact" ? "nav-link active" : "nav-link"}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;