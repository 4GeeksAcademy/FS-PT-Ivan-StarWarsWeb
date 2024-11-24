import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

import '../../styles/navBar2.css';

export const Details = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    

    useEffect(() => {
        actions.getOne(params.uid); // Llama a getOne con el uid del personaje
    }, [params.uid]); // Asegúrate de pasar params.uid como dependencia

    return (
        <div className="container">
            <div className="card">
                <div className="d-flex">
                    <figure>
                        <img src="" alt="" />
                        <figcaption>
                            {store.character?.properties.name}
                        </figcaption>
                    </figure>

                    <div>
                        <p>eye color: {store.character?.properties.eye_color}</p>
                        <p>hair color: {store.character?.properties.hair_color}</p>
                        <p>height: {store.character?.properties.height}</p>
                        <p>mass: {store.character?.properties.mass}</p>
                        <p>skin color: {store.character?.properties.skin_color}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};