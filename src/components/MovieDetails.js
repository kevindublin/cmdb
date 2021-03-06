import React from 'react';
import noPoster from './no-poster.png'

const MovieDetails = (result) => {
    return <div className="card col-sm-6 result-card mr-2 mb-2">
                <div className="row">
                    <div className="col-sm-6">
                        {result.poster === 'N/A'
                            ? <img className="card-img-top" src={noPoster} alt="poster" />
                            : <img className="card-img-top" src={result.poster} alt="poster" />
                        }
                    </div>
                    <div className="col-sm-6">
                        <div className="card-block">
                            <h6 className="card-title">{result.title} ({result.year}) <span className="badge badge-danger">{result.ranking}</span></h6>
                            <p>
                                <span className="badge badge-danger mr-1 card-badges">{result.rated} </span>
                                <span className="badge badge-danger mr-1 card-badges">{result.runtime} min</span>
                                <span className="badge badge-danger mr-1 card-badges">{result.genre}</span>
                            </p>
                            <p><em>Plot:</em> {result.plot}</p>
                            <br/>
                            <p><em>Starring:</em> {result.starring}</p>
                            <span className="badge badge-danger">{result.type}</span>
                        </div>
                    </div>
                </div>
            </div>;
            }
            
    


export default MovieDetails;