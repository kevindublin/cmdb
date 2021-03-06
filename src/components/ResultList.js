import React from 'react';

const ResultList = ({ results=[], render}) => {
    return results.map((result) => {
        return <>
            {render(result)}
        </>
    });
}

export default ResultList;