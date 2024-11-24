import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { CardSpecies } from "../component/cardSpecies.jsx";

import '../../styles/style.css';

export const Species = () => {

    const { store, actions } = useContext(Context);
    const sectionRef = useRef(null);



    return (
        <div className="text-center mt-5">
            <section ref={sectionRef}>
                <h2 className="title">Species</h2>
                <div className="row">
                    {store.species?.map(el => (
                        <CardSpecies key={el.uid}
                            name={el.name}
                            uid={el.uid} 
                            average_height={el.average_height}
                            classification={el.classification}
                            created={el.created}
                            designation={el.designation}
                            edited={el.edited}
                            eye_colors={el.eye_colors}
                            hair_colors={el.hair_colors}
                            homeworld={el.homeworld}
                            language={el.language}
                            people={el.people}                  
                            films={el.films}
                            skin_colors={el.skin_colors}
                            img={`https://starwars-visualguide.com/assets/img/species/${el.uid}.jpg`} />
                    ))}
                </div>
            </section>
        </div>

    )
}    