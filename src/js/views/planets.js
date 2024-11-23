import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { CardPlanets } from "../component/cardPlanets.jsx";

export const Planets = () => {

    const { store,actions } = useContext(Context);
    const sectionRef = useRef(null);

    

    return (
        <div className="text-center mt-5">
            <section ref={sectionRef}>
                <h2>Planets</h2>
                <div className="row">   
                    {store.planets?.map(el => (
                        <CardPlanets key={el.uid} 
                        name={el.name}
                        gravity={el.gravty}
                        terrain={el.terrain}
                        properties={el.properties}
                        climate={el.climate}
                        films={el.films}
                        uid={el.uid} 
                        img={''} />
                    ))}
                </div>
            </section>
        </div>

    )
}    