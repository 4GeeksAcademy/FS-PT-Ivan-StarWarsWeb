import { IgnorePlugin } from "webpack";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://swapi.tech/api/',
			characters:[],
			films:[],
			planets:[],
			vehicles:[],
			species:[],
		},
		actions: {
			getCharacter: async () => {
				try{
					const resp = await fetch(getStore().url+'/people');
					if(!resp.ok) throw new Error('Error fetching people');
					const data = await resp.json();
					setStore({characters: data.results});
				} catch (error){
					console.error(error);
				}
			},

			getPlanets: async () => {
				try{
					const resp = await fetch(getStore().url+'/planets');
					if(!resp.ok) throw new Error('Error fetching planets');
					const data = await resp.json();
					setStore({planets: data.results})

				} catch (error){
					console.error(error);
				}
			},

			getVehicles: async () => {
				try{
					const resp = await fetch(getStore().url+'/vehicles')
					if(!resp.ok) throw new Error('Error fetching vehicles');
					const data = await resp.json();
					setStore({vehicles: data.results})
					
				} catch(error) {
					console.error(error)
				}
			},
			getFilms: async () => {
				try {
					const resp = await fetch(getStore().url+ '/vehicles');
					if (!resp.ok) throw new Error('Error fetching films');
					const data = await resp.json();
					console.log('Datos obtenidos de la API:', data); 
					setStore({ films: data.results });
				} catch (error) {
					console.error('Error en getFilms:', error);
				}
			},
			getSpecies: async () => {
				try {
					const resp = await fetch(getStore().url+ '/species');
					if (!resp.ok) throw new Error('Error fetching films');
					const data = await resp.json();
					console.log('Datos obtenidos de la API:', data);
					setStore({ species: data.results });
				} catch (error) {
					console.error('Error en getSpecies:', error);
				}
			},
			getOne: async (uid) => {
				try {
					const resp = await fetch(getStore().url + "/people/" + uid);
					if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
					const data = await resp.json();
					setStore({ character: data.result });
					return true; // Indica que la carga fue exitosa
				} catch (error) {
					console.error('Error en getOne:', error);
					setStore({ error: error.message });
					return false; // Indica que hubo un error
				}
			},

			getTwo: async (uid) => {
                try {
					const resp = await fetch(getStore().url + "/planets/" + uid);
					if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
					const data = await resp.json();
					setStore({ planets: data.result });
					return true; // Indica que la carga fue exitosa
				} catch (error) {
					console.error('Error en getOne:', error);
					setStore({ error: error.message });
					return false; // Indica que hubo un error
				}
            },

		}

	};
};

export default getState;
