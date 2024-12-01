import React from "react";
import { Link } from "react-router-dom"; 
import '../../styles/navBar2.css';

export const NavBar2 = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid mb-0" style={{ height: "100px" }}>
                <div className="collapse navbar-collapse" style={{ justifyContent: "center" }} id="navbarNav">
                    <div className="d-flex gap-4">

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                FILMS
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/films">Films</Link></li>
                                <li><Link className="dropdown-item" to="/planets">Planets</Link></li>
                                <li><Link className="dropdown-item" to="/species">Species</Link></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                SERIE
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/character">Characters</Link></li>
                                <li><Link className="dropdown-item" to="/vehicles">Vehicles</Link></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                DATABANK
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/favourites">Favorites</Link></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                DISNEY+
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="https://www.disneyplus.com/es-es/brand/star-wars?msockid=29daf07c4b0d66bb3ec8e3864a636735">Explore</a></li> {/* Mantén el uso de <a> para enlaces externos */}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};