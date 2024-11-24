import React from "react";
import '../../styles/navBar2.css';

export const NavBar2 = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid mb-0" style={{height:"100px"}}>
                <div className="collapse navbar-collapse" style={{ justifyContent: "center" }} id="navbarNav">
                    <div className="d-flex gap-4">
                        
                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                FILMS
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="films">Films</a></li>
                                <li><a className="dropdown-item" href="planets">Planets</a></li>
                                <li><a className="dropdown-item" href="species">Species</a></li>

                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                SERIE
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="character">Characters</a></li>
                                <li><a className="dropdown-item" href="vehicles">Vehicles</a></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                DATABANK
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Favorites</a></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                DISNEY+
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="https://www.disneyplus.com/es-es/brand/star-wars?msockid=29daf07c4b0d66bb3ec8e3864a636735">Explore</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
