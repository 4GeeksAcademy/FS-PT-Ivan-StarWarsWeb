import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams } from "react-router";

export const DetailsVehicles = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();  // Para obtener el uid de la URL

    useEffect(() => {
        const fetchData = async () => {
            // Llamada a la acción para obtener el vehículo por su uid
            await actions.getThree(params.uid);
        };
        fetchData();
    }, [params.uid, actions]);  // Solo se ejecuta si el uid cambia

    // Verifica si 'vehicle' está disponible en el store
    const vehicle = store.vehicle; // Cambié 'store.vehicles' a 'store.vehicle'

    if (!vehicle) {
        return <p>Loading...</p>; // Muestra un mensaje mientras se carga el vehículo
    }

    return (
        <div className="container my-5">
            <div className="card shadow-lg">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title mb-4"><strong>{vehicle.name}</strong></h2>
                            <div className="details-item">
                                <p><strong>Model:</strong> <span className="text-muted">{vehicle.model}</span></p>
                                <p><strong>Manufacturer:</strong> <span className="text-muted">{vehicle.manufacturer}</span></p>
                                <p><strong>Cost in credits:</strong> <span className="text-muted">{vehicle.cost_in_credits}</span></p>
                                <p><strong>Length:</strong> <span className="text-muted">{vehicle.length}</span></p>
                                <p><strong>Max speed:</strong> <span className="text-muted">{vehicle.max_atmosphering_speed}</span></p>
                                <p><strong>Pilots:</strong> <span className="text-muted">{vehicle.pilots?.join(", ") || "N/A"}</span></p> {/* Suponiendo que los pilotos son un arreglo */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
