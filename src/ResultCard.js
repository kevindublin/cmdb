import React from 'react';
import testUtils from 'react-dom/test-utils';
import noPoster from './no-poster.png'

const truncate = (str, len) => {
    return str.length > len ? `${str.substring(0, len-3)}...` : str;
}

const ResultCard = (result) => {
    return <div className="col-sm-2 mb-3">
                <div className="card result-card">
                    {result.poster === 'N/A'
                        ? <img className="card-img-top" src={noPoster} alt="poster" />
                        : <img className="card-img-top" src={result.poster} alt="poster" />
                    }
                    <div className="card-body">
                            <p className="card-text">{truncate(result.title, 20)} ({truncate(result.year, 7)})</p>
                        <span className="badge badge-info">{result.type}</span>
                    </div>
                </div>
            </div>
            }

export default ResultCard;