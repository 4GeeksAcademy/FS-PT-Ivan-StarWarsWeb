import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams } from "react-router";

export const DetailsFilms = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            await actions.getFour(params.uid);
        };
        fetchData();
    }, []);

    return (
        <div className="container my-5">
            <div className="card shadow-lg">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title mb-4"><strong>{store.film?.properties?.title}</strong></h2>
                            <div className="details-item">
                                <p><strong>Title:</strong> <span className="text-muted">{store.film?.properties?.title}</span></p>
                                <p><strong>Director:</strong> <span className="text-muted">{store.film?.properties?.director}</span></p>
                                <p><strong>Episode Id:</strong> <span className="text-muted">{store.film?.properties?.episode_id}</span></p>
                                <p><strong>Characters:</strong> <span className="text-muted">{store.film?.properties?.characters}</span></p>
                                <p><strong>Planets:</strong> <span className="text-muted">{store.film?.properties?.planets}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};