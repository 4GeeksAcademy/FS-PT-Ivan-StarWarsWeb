import React, { useContext } from "react";
import { Context } from "../store/appContext"; 

export const AddTeam = () => {
    const { store, actions } = useContext(Context);

    const handleRemoveFavourite = (fav) => {
        actions.getFavouriteAndRemove(fav); 
    };

    return (
        <div className="container py-5"> 
            <h1 className="text-center text-white mb-4">Favorites</h1>
            <div className="row">
                {store.favourites.length > 0 ? (
                    store.favourites.map((fav, index) => (
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                            <div className="card h-100 bg-dark text-white shadow-sm">
                                <figure className="card-body">
                                    <div className="d-flex justify-content-center align-items-center" style={{height: '200px'}}> 
                                        <img
                                            className="card-img-top img-fluid" 
                                            src={fav.img || "https://via.placeholder.com/150"}
                                            alt={fav.name}
                                            style={{maxHeight: '100%', maxWidth: '100%', objectFit: 'contain'}}
                                        />
                                    </div>
                                    <figcaption className="text-center mt-3" style={{ color: 'white' }}>{fav.name}</figcaption> 
                                </figure>
                                <div className="d-flex justify-content-center mt-3">
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleRemoveFavourite(fav)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-white">No favorites yet.</p>
                )}
            </div>
        </div>
    );
};
