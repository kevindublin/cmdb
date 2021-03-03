import React from 'react';


const ResultCard = (result) => {
    return <div className="col-sm-2 mb-5">
                <div className="card result-card">
                    <img className="card-img-top" src={result.poster} alt="poster" />
                    <div className="card-body">
                        <a href="https://go.com" className="stretched-link"><p className="card-text">{result.title} ({result.year})</p></a>
                        <span className="badge badge-info">{result.type}</span>
                    </div>
                </div>
            </div>
            }

export default ResultCard;