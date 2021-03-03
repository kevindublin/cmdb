import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = (result) => {
    return <div className="card col-sm-4 result-card mr-2 mb-2">
                <div className="row">
                    <div className="col-sm-6">
                        <img className="card-img" src={result.poster} alt="" />
                    </div>
                    <div className="col-sm-6">
                        <div className="card-block">
                            <h6 className="card-title">{result.title} ({result.year}) <em>{result.ranking}</em></h6>
                            <p>
                                <span className="badge badge-info card-badges">{result.rated} </span>
                                <span className="badge badge-info card-badges">{result.runtime} min</span>
                                <span className="badge badge-info card-badges">{result.genre}</span>
                            </p>
                            <p><em>Plot:</em> {result.plot}</p>
                            <br/>
                            <p><em>Starring:</em> {result.starring}</p>
                            <span className="badge badge-info">{result.type}</span>
                        </div>
                    </div>
                </div>
            </div>;
            }
            
    


export default MovieDetails;