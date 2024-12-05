import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardSpecies = (props) => {

    const navigate = useNavigate();
    const { actions } = useContext(Context);
    
    const handleLearnMore = () => {
        navigate(`/detailsSpecies/species/${props.uid}`); 
    };
    const handleFavourite = () => {
        const fav = { 
            uid: props.uid,
            type: "species", 
            ...props 
        };
        actions.getFavouriteAndRemove(fav);
    };

    return (
        <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='card'>
                <figure>
                    <img className="card-img-top" src={props.img} alt={props.name} />
                    <figcaption>{props.name}</figcaption>
                <figure>
                    <div className="d-flex">
                        <button className="btn btn-primary" onClick={handleLearnMore}>Learn more</button>
                        <button className="btn btn-outline" onClick={handleFavourite}>Add your team <i className="fa-brands fa-old-republic"></i></button>
                    </div>
                </figure> 
                </figure>
            </div>
        </div>
    )
}