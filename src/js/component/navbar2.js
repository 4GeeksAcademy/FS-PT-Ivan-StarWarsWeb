import React from "react";
import '../../styles/navBar2.css';

export const NavBar2 = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid mb-0">
                <div className="collapse navbar-collapse" style={{ justifyContent: "center" }} id="navbarNav">
                    <div className="d-flex gap-4">

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                NEWS + FEATURES
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                VIDEO
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        
                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                FILMS
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                SERIE
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                GAMES + INTERACTIVE
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                DATABANK
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                DISNEY+
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
