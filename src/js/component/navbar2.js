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
                                NEWS + FEATURES
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Notices</a></li>
                                <li><a className="dropdown-item" href="#">Games</a></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                VIDEO
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Adventures</a></li>
                            </ul>
                        </div>
                        
                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                FILMS
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Films</a></li>
                                <li><a className="dropdown-item" href="#">Starships</a></li>
                                <li><a className="dropdown-item" href="planets-section">Planets</a></li>
                                <li><a className="dropdown-item" href="#">Species</a></li>

                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                SERIE
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="character-section">Characters</a></li>
                                <li><a className="dropdown-item" href="#">Vehicles</a></li>
                                <li><a className="dropdown-item" href="#">Star Wars Rebels</a></li>
                                <li><a className="dropdown-item" href="#">Tales of Jedi</a></li>
                                <li><a className="dropdown-item" href="#">Andor</a></li>
                                <li><a className="dropdown-item" href="#">Skeleton Crew</a></li>
                                <li><a className="dropdown-item" href="#">The Mandalorian</a></li>
                                <li><a className="dropdown-item" href="#">El Libro de Boba Fett</a></li>
                                <li><a className="dropdown-item" href="#">Ahsoka</a></li>
                                <li><a className="dropdown-item" href="#">Star Wars Resistance</a></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                GAMES + INTERACTIVE
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Star Wars Outlaws </a></li>
                                <li><a className="dropdown-item" href="#">Star Wars: Bounty Hunter</a></li>
                                <li><a className="dropdown-item" href="#">LEGO Star Wars II: The Original Trilogy</a></li>
                                <li><a className="dropdown-item" href="#">LEGO Star Wars: The Skywalker Saga</a></li>
                                <li><a className="dropdown-item" href="#">Star Wars: Squadrons</a></li>
                                <li><a className="dropdown-item" href="#">Star Wars Episode I: Racer</a></li>
                                <li><a className="dropdown-item" href="#">Star Wars Jedi Knight: Jedi Academy </a></li>
                                <li><a className="dropdown-item" href="#">Star Wars Jedi: Fallen Order</a></li>
                                <li><a className="dropdown-item" href="#">Star Wars Battlefront II</a></li>

                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                DATABANK
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">All Databank</a></li>
                                <li><a className="dropdown-item" href="#">Favorites</a></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                DISNEY+
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Explore</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
