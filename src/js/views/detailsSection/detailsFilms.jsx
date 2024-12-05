import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useParams } from "react-router";

export const DetailsFilms = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        const fetchFilmDetails = async () => {
            const filmData = await getFour(params.uid);
            setFilmDetails(filmData);
        };
        fetchFilmDetails();
    }, [params.uid]);

    const film = store.films?.find(f => f.uid === params.uid);

    return (
        <div className="container my-5">
            <div className="card shadow-lg">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title mb-4"><strong>{filmDetails?.title}</strong></h2>
                            <div className="details-item">
                                <p><strong>Episode:</strong> <span className="text-muted">{filmDetails?.episode_id}</span></p>
                                <p><strong>Director:</strong> <span className="text-muted">{filmDetails?.director}</span></p>
                                <p><strong>Producer:</strong> <span className="text-muted">{filmDetails?.producer}</span></p>
                                <p><strong>Release Date:</strong> <span className="text-muted">{filmDetails?.release_date}</span></p>
                                <p><strong>Opening Crawl:</strong> <span className="text-muted">{filmDetails?.opening_crawl}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};