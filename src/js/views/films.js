import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import { CardFilms } from "../component/cardFilms.jsx";

import '../../styles/style.css';

export const Films = () => {

    const { store,actions } = useContext(Context);
    const sectionRef = useRef(null);

    useEffect(()=>{
        actions.getFilms()
    },[])


    return (
        <div className="text-center mt-5">
            <section ref={sectionRef}>
                <h2 className="title">Films</h2>
                <div className="row">   
                    {store.films?.map(el => (
                        <CardFilms key={el.uid} 
                        characters={el.characters} 
                        created={el.created}
                        director={el.director}
                        edited={el.edited}
                        episode_id={el.episode_id}
                        opening_crawl={el.opening_crawl}
                        planets={el.planets}
                        producer={el.producer}
                        released={el.released}
                        species={el.species}
                        starships={el.starships}
                        title={el.title}
                        vehicles={el.vehicles}
                        uid={el.uid} 
                        img={`https://starwars-visualguide.com/assets/img/films/${el.uid}.jpg`} />
                    ))}
                </div>
            </section>
        </div>

    )
}    

