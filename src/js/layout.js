import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { NavBar2 } from "./component/navbar2";

import { ViewCharacters } from "./sections/viewCharacters.jsx";
import { ViewPlanets } from "./sections/viewPlanets.jsx";
import { ViewVehicles } from "./sections/viewVehicles.jsx";
import { ViewFilms } from "./sections/viewFilms.jsx";
import { ViewSpecies } from "./sections/viewSpecies.jsx";
import { Details } from "./views/detailsSection/details.jsx";
import { DetailsPlanets } from "./views/detailsSection/detailsPlanets.jsx"
import { DetailsVehicles } from "./views/detailsSection/detailsVehicles.jsx";
import { DetailsFilms } from "./views/detailsSection/detailsFilms.jsx";
import { DetailsSpecies } from "./views/detailsSection/detailsSpecies.jsx";
import { AddTeam } from "./sections/addTeam.jsx";


const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="starWarsWeb">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<NavBar2 />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/details/:type/:uid" element={<Details />} />
						<Route path="/detailsFilms/:type/:uid" element={<DetailsFilms/>}/>
						<Route path="/detailsPlanets/:type/:uid" element={<DetailsPlanets />} />
						<Route path="/detailsSpecies/:type/:uid" element={<DetailsSpecies />} />
						<Route path="detailsVehicles/:type/:uid" element={<DetailsVehicles/>} />
						<Route path="/favourites" element={<AddTeam />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/character" element={<ViewCharacters />} />
						<Route path="/planets" element={<ViewPlanets />} />
						<Route path="/vehicles" element={<ViewVehicles />} />
						<Route path="/films" element={<ViewFilms />} />
						<Route path="/species" element={<ViewSpecies />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);