import React from "react";
import { useNavigate } from "react-router-dom";

export const CardVehicles = (props) => {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate(`/details/vehicles/${props.uid}`);  // Redirige a la página de detalles
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
                    <button className="btn btn-outline">Add to your team <i className="fa-brands fa-old-republic"></i></button>
                </div>
            </div>
        </div>
    );
};
