import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams } from "react-router";

export const Details = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            await actions.getOne(params.uid);
        };
        fetchData();
    }, [params.uid, actions]);

    return (
        <div className="container my-5">
            <div className="card shadow-lg">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title mb-4"><strong>{store.character?.properties?.name}</strong></h2>
                            <div className="details-item">
                                <p><strong>Eye color:</strong> <span className="text-muted">{store.character?.properties?.eye_color}</span></p>
                                <p><strong>Hair color:</strong> <span className="text-muted">{store.character?.properties?.hair_color}</span></p>
                                <p><strong>Height:</strong> <span className="text-muted">{store.character?.properties?.height}</span></p>
                                <p><strong>Mass:</strong> <span className="text-muted">{store.character?.properties?.mass}</span></p>
                                <p><strong>Skin color:</strong> <span className="text-muted">{store.character?.properties?.skin_color}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};