import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
            <Link className="navbar-brand" to="/">Home</Link>
            <div>
                <ul className="navbar-nav">

                    <li className="nav-item">

                        <Link to="/"
                            className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "navlink"}
                        >
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/about"
                            className={window.location.pathname === "/about" ? "nav-link active" : "navlink"}
                        >
                            About
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/portfolio"
                            className={window.location.pathname === "/portfolio" ? "nav-link active" : "navlink"}
                        >
                            Portfolio
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/contact"
                            className={window.location.pathname === "/contact" ? "nav-link active" : "navlink"}
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