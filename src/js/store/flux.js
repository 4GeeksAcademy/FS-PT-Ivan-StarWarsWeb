import { IgnorePlugin } from "webpack";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://swapi.tech/api/',
			characters:[],
		},
		actions: {
			getCharacter: async () => {
				try{
					const resp = await fetch(getStore().url+'/people');
					if(!resp.ok) throw new Error('Error fetching people');
					const data = await resp.json();
				console.log('data---->', data);
				console.log('data.results---->', data.results);
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
					console.log('data--->', data.results)
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
					console.log('data--->', data.results)
					setStore({vehicles: data.results})
					
				} catch(error) {
					console.error(error)
				}
			}
		
		}

	};
};

export default getState;
