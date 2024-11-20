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
                                <li><a className="dropdown-item" href="#">Star Wars: Episodio I – La amenaza fantasma</a></li>
                                <li><a className="dropdown-item" href="#">Star Wars: Episodio II – El ataque de los clones</a></li>
                                <li><a className="dropdown-item" href="#"> Star Wars: Episodio III – La venganza de los Sith</a></li>
                                <li><a className="dropdown-item" href="#"> Star Wars: Episodio IV – La guerra de las galaxias</a></li>
                                <li><a className="dropdown-item" href="#"> Star Wars: Episodio V – El imperio contraataca</a></li>
                                <li><a className="dropdown-item" href="#"> Star Wars: Episodio VI – El retorno del Jedi</a></li>
                                <li><a className="dropdown-item" href="#"> Star Wars: Episodio VII – El despertar de la fuerza</a></li>
                                <li><a className="dropdown-item" href="#"> Star Wars: Episodio VIII – Los últimos Jedi</a></li>
                                <li><a className="dropdown-item" href="#"> Star Wars: Episodio IX – El ascenso de Skywalker</a></li>
                                <li><a className="dropdown-item" href="#"> Star Wars: Las guerras clon</a></li>
                                <li><a className="dropdown-item" href="#"> Rogue One: Una historia de Star Wars</a></li>
                                <li><a className="dropdown-item" href="#"> Han Solo: Una historia de Star Wars</a></li>

                            </ul>
                        </div>

                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button">
                                SERIE
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Star Wars: La Remesa Mala</a></li>
                                <li><a className="dropdown-item" href="#">Obi Wan Kenobi</a></li>
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
                                <li><a className="dropdown-item" href="#">Eras</a></li>
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
