import React from 'react';
import Arrow from "../Images/arrow.png";

const BackButton = () => {
    return (
        <button type="button"
                className="border-2 px-5 py-1 rounded"
                onClick={() => window.history.back()}
        >
            <img className="h-5" src={Arrow || undefined} alt=""/>
        </button>
    );
};

export default BackButton;