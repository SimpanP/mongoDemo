import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../image/logo-no-background.png";

function Navbar() {
  return (
    <header className="header">
      <nav className="main-nav">
        <img className="lyr-img" src={Logo} alt="Lyr" />
        <ul className="main-nav-list">
          <li>
            <Link className="main-nav-link" to="/">
              New Quiz
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
