import React from 'react';

const ErrorMessage = (props) => {
    return <>
        <h5>Error: {props.error}</h5>
    </>
}

export default ErrorMessage;