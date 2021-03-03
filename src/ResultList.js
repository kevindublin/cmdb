import React from 'react';
import ResultCard from './ResultCard.js'

const ResultList = (props) => {
    return <>
        {props.results.map((result) => (
        <ResultCard 
          key={result.imdbID}
          poster={result.Poster} 
          title={result.Title} 
          type={result.Type} 
          year={result.Year}
          />
      ))}
    </>
}

export default ResultList;