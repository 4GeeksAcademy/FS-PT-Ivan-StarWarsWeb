import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams } from "react-router";

export const DetailsSpecies = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            await actions.getFive(params.uid);
        };
        fetchData();
    }, []);

    return (
        <div className="container my-5">
            <div className="card shadow-lg">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title mb-4"><strong>{store.specie?.properties?.name}</strong></h2>
                            <div className="details-item">
                                <p><strong>Hair Colors:</strong> <span className="text-muted">{store.specie?.properties?.hair_colors}</span></p>
                                <p><strong>Language:</strong> <span className="text-muted">{store.specie?.properties?.language}</span></p>
                                <p><strong>People:</strong> <span className="text-muted">{store.specie?.properties?.people}</span></p>
                                <p><strong>Designation:</strong> <span className="text-muted">{store.specie?.properties?.designation}</span></p>
                                <p><strong>Skin Colors:</strong> <span className="text-muted">{store.specie?.properties?.skin_colors}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};