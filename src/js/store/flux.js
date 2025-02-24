import { IgnorePlugin } from "webpack";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://swapi.tech/api/',
			characters: [],
			films: [],
			planets: [],
			vehicles: [],
			species: [],
			favourites: [],
			planet: {},
			film: {},
			vehicle: {},
			specie: {},
			
		},
		actions: {
			getFavouriteAndRemove: async (fav) => {
				if (!fav || !fav.uid || !fav.type) {
					//console.error("Invalid favorite object", fav);
					return;
				}
			
				const store = getStore();
				const isFavourite = store.favourites.some(el => el.uid === fav.uid && el.type === fav.type);
				
				if (isFavourite) {
					setStore({
						favourites: store.favourites.filter(el => !(el.uid === fav.uid && el.type === fav.type))
					});
				} else {
					setStore({ favourites: [...store.favourites, fav] });
				}
			},
			getCharacter: async () => {
				try {
					const resp = await fetch(getStore().url + '/people');
					if (!resp.ok) throw new Error('Error fetching people');
					const data = await resp.json();
					setStore({ characters: data.results });
				} catch (error) {
					console.error(error);
				}
			},

			getPlanets: async () => {
				try {
					const resp = await fetch(getStore().url + '/planets');
					if (!resp.ok) throw new Error('Error fetching planets');
					const data = await resp.json();
					setStore({ planets: data.results })

				} catch (error) {
					console.error(error);
				}
			},

			getVehicles: async () => {
				try {
					const resp = await fetch(getStore().url + '/vehicles')
					if (!resp.ok) throw new Error('Error fetching vehicles');
					const data = await resp.json();
					setStore({ vehicles: data.results })

				} catch (error) {
					//console.error(error)
				}
			},
			getFilms: async () => {
				console.log("hola")
				try {
					const resp = await fetch(getStore().url + '/films');
					if (!resp.ok) throw new Error('Error fetching films');
					const data = await resp.json();
					//console.log('Datos obtenidos de la API:', data);
					setStore({ films: data.result });
				} catch (error) {
					console.error('Error en getFilms:', error);
				}
			},
			getSpecies: async () => {
				try {
					const resp = await fetch(getStore().url + '/species');
					if (!resp.ok) throw new Error('Error fetching films');
					const data = await resp.json();
					
					setStore({ species: data.results });
				} catch (error) {
				
				}
			},
			//Character
			getOne: async (uid) => {
				try {
					if (!uid) {
						
						return false;
					}
					const url = getStore().url + "/people/" + uid;
				
					const resp = await fetch(url);
					if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
			
					const data = await resp.json();
					setStore({ character: data.result });
					return true;
				} catch (error) {
					setStore({ error: error.message });
					return false;
				}
			},
			//Planets
			getTwo: async (uid) => {
				try {
					const resp = await fetch(getStore().url + "/planets/" + uid);
					if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
					const data = await resp.json();
					setStore({ planet: data.result });
					return true; 
				} catch (error) {
					
					setStore({ error: error.message });
					return false; 
				}
			},
			//Vehicles
			getThree: async (uid) => {
				try {
					const resp = await fetch(getStore().url + "/vehicles/" + uid);
					if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
					const data = await resp.json();
					console.log('Datos del vehiculo',data.result)
					setStore({ vehicle: data.result }); 
					return true; 
				} catch (error) {
					console.error('Error en getThree:', error);
					setStore({ error: error.message });
					return false;
				}
			},

			//Films
			getFour: async (uid) => {
				
				try {
					const resp = await fetch(getStore().url + "/films/" + uid);
					if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
					const data = await resp.json();
					
					setStore({ film: data.result });
					return true;
				} catch (error) {
					console.error('Error fetching film', error);
				}
			},

			//Species
			getFive: async (uid) => {
				
				try {
					const resp = await fetch(getStore().url + "/species/" + uid);
					if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
					const data = await resp.json();
					setStore({ specie: data.result });
					return true;
				} catch (error) {
					console.error('Error fetching species', error);
				}
			}

		}

	};
};

export default getState;
