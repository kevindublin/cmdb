import React from 'react';
import noPoster from './no-poster.png'

const truncate = (str, len) => {
    return str.length > len ? `${str.substring(0, len-3)}...` : str;
}

const ResultCard = (result) => {
    return <div className="col-sm-3 mb-3">
                <div className="card result-card"
                    style={{cursor: 'pointer'}} 
                    onClick={result.getDetails}>
                    {result.poster === 'N/A'
                        ? <img className="card-img-top" src={noPoster} alt="poster" />
                        : <img className="card-img-top" src={result.poster} alt="poster" />
                    }
                    <div className="card-body">
                            <p className="card-text">{truncate(result.title, 20)} ({truncate(result.year, 7)})</p>
                        <span className="badge badge-danger">{result.type}</span>
                    </div>
                </div>
            </div>
            }

export default ResultCard;