import React, { useState } from "react";
import "/workspaces/FS-PT-Ivan-StarWarsWeb/src/styles/navBar.css";

export const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    return (
        <nav className="navbar bg-dark navbar-dark navbar-expand-lg bg-body-tertiary border-bottom border-body">
            <div className="container-fluid">
                
                {/* Redes sociales */}
                <nav id="first-navbar-local" className="navbar bg-body-tertiary">
                    <form className="container-fluid justify-content-start">
                        <button className="btn" type="button" style={{ color: "white" }}>
                            <i className="fa-brands fa-tiktok"></i>
                        </button>
                        <button className="btn" type="button" style={{ color: "white" }}>
                            <i className="fa-brands fa-instagram"></i>
                        </button>
                        <button className="btn" type="button" style={{ color: "white" }}>
                            <i className="fa-brands fa-x-twitter"></i>
                        </button>
                        <button className="btn" type="button" style={{ color: "white" }}>
							<i className="fa-brands fa-facebook"></i>
						</button>
						<button
							className="btn"
							type="button"
							style={{ color: "white" }}
							onClick={() => window.open("https://www.youtube.com/@StarWars", "_blank")}
						>
							<i className="fa-brands fa-youtube"></i>
						</button>
                        <button className="btn" type="button" style={{ color: "white" }}>
                            <img
                                src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_kids_937ed58b.svg?region=0%2C0%2C40%2C15"
                                alt="Star Wars Kids"
                            />
                        </button>
                    </form>
                </nav>

                {/* Imagen de Star Wars centrada */}
                <div className="d-flex justify-content-center align-items-center w-100 position-relative">
                    <a className="navbar-brand mx-auto text-center" href="#">
                        <img
                            src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo_black.png"
                            alt="Star Wars"
                            className="img-fluid"
                            style={{
                                maxWidth: "150px",
                                height: "auto",
                            }}
                        />
                    </a>
                </div>

                {/* Barra de búsqueda */}
                <form className="d-flex align-items-center ms-auto" role="search">
                    {showSearch && (
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            style={{
                                width: "200px",
                                border: "none",
                                outline: "none",
                            }}
                        />
                    )}

                    <button
                        className="btn"
                        type="button"
                        onClick={toggleSearch}
                        style={{ color: "white", border: "none" }}
                    >
                        <i className="fa-solid fa-magnifying-glass me-2"></i> <span>Search</span>
                    </button>
                </form>
            </div>
        </nav>
    );
};
