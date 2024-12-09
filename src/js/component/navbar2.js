import React from "react";
import { Link } from "react-router-dom"; 
import '../../styles/navBar2.css';

export const NavBar2 = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <div className="container-fluid" style={{ padding: "10px" }}>
            {/* Botón de colapso a la derecha */}
            <button
              className="navbar-toggler ms-auto" // ms-auto empuja el botón hacia la derecha
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
      
            {/* Menú desplegable */}
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <div className="d-flex flex-column flex-lg-row gap-4 align-items-center">
                {/* Dropdown FILMS */}
                <div className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    FILMS
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/films">
                        Films
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/planets">
                        Planets
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/species">
                        Species
                      </Link>
                    </li>
                  </ul>
                </div>
      
                {/* Dropdown SERIE */}
                <div className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SERIE
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/character">
                        Characters
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/vehicles">
                        Vehicles
                      </Link>
                    </li>
                  </ul>
                </div>
      
                {/* Dropdown DATABANK */}
                <div className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    DATABANK
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/favourites">
                        Favorites
                      </Link>
                    </li>
                  </ul>
                </div>
      
                {/* Dropdown DISNEY+ */}
                <div className="dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    DISNEY+
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.disneyplus.com/es-es/brand/star-wars?msockid=29daf07c4b0d66bb3ec8e3864a636735"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Explore
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
      
};