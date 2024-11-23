import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { CardCharacter } from "../component/cardCharacter.jsx";

import '../../styles/style.css';

export const Characters = () => {

    const { store,actions } = useContext(Context);
    const sectionRef = useRef(null);

    

    return (
        <div className="text-center mt-5">
            <section ref={sectionRef}>
                <h2 className="title">Character</h2>
                <div className="row">   
                    {store.characters?.map(el => (
                        <CardCharacter key={el.uid} name={el.name} uid={el.uid} img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`} />
                    ))}
                </div>
            </section>
        </div>

    )
}    