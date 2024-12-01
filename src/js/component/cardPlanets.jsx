import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardPlanets = (props) => {
    const { actions } = useContext(Context);


    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate(`/detailsPlanets/planets/${props.uid}`); 
    };

    const handleFavourite = () => {
        const fav = { 
            uid: props.uid,
            type: "planets", 
            name: props.name,
            img: props.img
        };
        actions.getFavouriteAndRemove(fav);
    };
    return (
        <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='card'>
                <figure>
                    <img className="card-img-top" src={props.img} alt={props.name} />
                    <figcaption>{props.name}</figcaption>
                </figure>
                <div className="d-flex">
                    <button className="btn btn-primary" onClick={handleLearnMore}>Learn more</button>
                    <button className="btn btn-outline" onClick={handleFavourite}>Add to your team <i className="fa-brands fa-old-republic"></i></button>
                </div>
            </div>
        </div>
    );
}