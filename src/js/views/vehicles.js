import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { CardVehicles } from "../component/cardVehicles.jsx";

import '../../styles/style.css';

export const Vehicles = () => {

    const { store,actions } = useContext(Context);
    const sectionRef = useRef(null);

    

    return (
        <div className="text-center mt-5" >
            <section ref={sectionRef}>
                <h2 className="title">Planets</h2>
                <div className="row">   
                    {store.planets?.map(el => (
                        <CardVehicles key={el.uid} 
                        name={el.name}
                        cargo_capaccity={el.cargo_capaccity}
                        created={el.created}
                        crew={el.crew}
                        edited={el.edited}
                        max_atmosphering_speed={el.max_atmosphering_speed}
                        manufactured={el.manufactured}
                        lenght={el.lenght}
                        consumables={el.consumables}
                        cost_in_credits={el.cost_in_credits}
                        model={el.model}
                        films={el.films}
                        pilots={el.pilots}
                        passenger={el.passenger}
                        uid={el.uid} 
                        img={``} />
                    ))}
                </div>
            </section>
        </div>

    )
}    