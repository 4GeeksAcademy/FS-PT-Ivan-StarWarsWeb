import React, { useState } from "react";

export const Navbar = () => {
	const [showSearch, setShowSearch] = useState(false);

	const toggleSearch = () => {
		setShowSearch(!showSearch);
	};
	return (
		<nav class="navbar bg-dark navbar-dark navbar-expand-lg bg-body-tertiary border-bottom border-body">
			<div className="container-fluid">
			<nav id="first-navbar-local"class="navbar bg-body-tertiary">
					<form class="container-fluid justify-content-start">
						<button
							className="btn"
							type="button"
							style={{ color: "white" }}
						>
							<i class="fa-brands fa-tiktok"></i>					
						</button>

						<button
							className="btn"
							type="button"
							style={{ color: "white" }}
						>
							<i class="fa-brands fa-instagram"></i>					
						</button>

						<button
							className="btn"
							type="button"
							style={{ color: "white" }}
						>
							<i class="fa-brands fa-x-twitter"></i>					
						</button>

						<button
							className="btn"
							type="button"
							style={{ color: "white" }}
						>
							<i class="fa-brands fa-facebook"></i>					
						</button>

						<button
							className="btn"
							type="button"
							style={{ color: "white" }}
						>
							<i class="fa-brands fa-youtube"></i>					
						</button>

						<button
							className="btn"
							type="button"
							style={{ color: "white" }}
						>
							<img src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_kids_937ed58b.svg?region=0%2C0%2C40%2C15" alt="Star Wars Kids"/>
						</button>
					</form>
				</nav>


				 <a class="navbar-brand d-flex justify-content-center align-items-center" href="#" >
					<img src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo_black.png" href="#"
					style={{width: "100px", height: "100px", marginLeft:"400px"}}/>
					</a>

				<form className="d-flex align-items-center ms-auto" role="search">

					{showSearch && (
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							style={{ width: "200px" }}
						/>
					)}

					<button
						className="btn"
						type="button"
						onClick={toggleSearch}
						style={{ color: "white" }}
					>
						<i class="fa-solid fa-magnifying-glass me-2"></i> <span>Search</span>
					</button>
				</form>
			</div>
		</nav>
	);
};
