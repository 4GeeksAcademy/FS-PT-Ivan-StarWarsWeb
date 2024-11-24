import React from "react";

export const CardSpecies = (props) => {


    return (
        <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='card'>
                <figure>
                    <img className="card-img-top" src={props.img} alt={props.name} />
                    <figcaption>{props.name}</figcaption>
                <figure>
                    <div className="d-flex">
                        <button className="btn btn-primary">Learn more</button>
                        <button className="btn btn-outline">Add your team <i class="fa-brands fa-old-republic"></i></button>
                    </div>
                </figure> 
                </figure>
            </div>
        </div>
    )
}