import React from 'react';


const Paginator = ({page, totalPages, next, prev}) => {
    return(
        <div className="paginator">
            <p>Page {page} of {totalPages}</p>
            <button className="btn-danger mr-5" onClick={prev}>Previous</button>
            <button className="btn-danger" onClick={next}>Next</button>
        </div>
    );
}

export default Paginator;