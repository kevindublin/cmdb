import React from 'react';

const Modal = ({show=false, onClose, children}) => {
    return(
        <div>
            <div>
                <button className="btn-outline-danger mb-1" onClick={onClose}> Back </button>
            </div>
            { children }
        </div>
    );
}

export default Modal;