import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams } from "react-router";

export const DetailsVehicles = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    
    useEffect(() => {
        const fetchData = async () => {
            await actions.getThree(params.uid);
            
        };
        fetchData();
    }, []);  


    return (
        <div className="container my-5">
            <div className="card shadow-lg">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title mb-4"><strong>{store.vehicle?.properties?.name}</strong></h2>
                            <div className="details-item">
                                <p><strong>Model:</strong> <span className="text-muted">{store.vehicle?.properties?.model}</span></p>
                                <p><strong>Manufacturer:</strong> <span className="text-muted">{store.vehicle?.properties?.manufacturer}</span></p>
                                <p><strong>Cost in credits:</strong> <span className="text-muted">{store.vehicle?.properties?.cost_in_credits}</span></p>
                                <p><strong>Lenght:</strong> <span className="text-muted">{store.vehicle?.properties?.length}</span></p>
                                <p><strong>Max speed:</strong> <span className="text-muted">{store.vehicle?.properties?.max_atmosphering_speed}</span></p>
                                <p><strong>Passengers:</strong> <span className="text-muted">{store.vehicle?.properties?.passengers}</span></p> {/* Suponiendo que los pilotos son un arreglo */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
