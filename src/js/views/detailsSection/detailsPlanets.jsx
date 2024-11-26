import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams } from "react-router";

export const DetailsPlanets = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            await actions.getTwo(params.uid);
        };
        fetchData();
    }, [params.uid, actions]);

    return (
        <div className="container my-5">
            <div className="card shadow-lg">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title mb-4"><strong>{store.planets?.properties?.name}</strong></h2>
                            <div className="details-item">
                                <p><strong>Gravity:</strong> <span className="text-muted">{store.planets?.properties?.gravity}</span></p>
                                <p><strong>Created:</strong> <span className="text-muted">{store.planets?.properties?.created}</span></p>
                                <p><strong>Population:</strong> <span className="text-muted">{store.planets?.properties?.population}</span></p>
                                <p><strong>Terrain:</strong> <span className="text-muted">{store.planets?.properties?.terrain}</span></p>
                                <p><strong>Films:</strong> <span className="text-muted">{store.planets?.properties?.films}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};