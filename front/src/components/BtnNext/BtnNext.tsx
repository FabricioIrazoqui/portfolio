import React from "react";
import "./BtnNext.css";

interface BtnNextProps {
    handleFlip: () => void;
}

export const BtnNext: React.FC<BtnNextProps> = ({ handleFlip }) => {
    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation();
        e.preventDefault();
        handleFlip();
    };

    return (
        <button className="learn-more AnimationDelay" onClick={handleClick}>
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="button-text text-gray-900">Next</span>
        </button>
    );
};
