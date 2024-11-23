import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { CardPlanets } from "../component/cardPlanets.jsx";


import '../../styles/style.css';

export const Planets = () => {

    const { store,actions } = useContext(Context);
    const sectionRef = useRef(null);

    

    return (
        <div className="text-center mt-5" >
            <section ref={sectionRef}>
                <h2 className="title">Planets</h2>
                <div className="row">   
                    {store.planets?.map(el => (
                        <CardPlanets key={el.uid} 
                        name={el.name}
                        gravity={el.gravity}
                        terrain={el.terrain}
                        properties={el.properties}
                        climate={el.climate}
                        films={el.films}
                        uid={el.uid} 
                        img={`https://starwars-visualguide.com/assets/img/planets/${el.uid}.jpg`} />
                    ))}
                </div>
            </section>
        </div>

    )
}    