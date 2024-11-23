import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { CardCharacter } from "../component/cardCharacter.jsx";

export const Characters = () => {

    const { store,actions } = useContext(Context);
    const sectionRef = useRef(null);

    

    return (
        <div className="text-center mt-5">
            <section ref={sectionRef}>
                <h2>Character</h2>
                <div className="row">   
                    {store.characters?.map(el => (
                        <CardCharacter key={el.uid} name={el.name} uid={el.uid} img={''} />
                    ))}
                </div>
            </section>
        </div>

    )
}    