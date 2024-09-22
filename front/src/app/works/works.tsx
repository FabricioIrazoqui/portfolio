import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./works.css";

interface WorksProps {
    cards: JSX.Element[];
}

const Works = forwardRef<
    { goNext: () => void; goPrev: () => void },
    WorksProps
>(({ cards }, ref) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const totalCards = cards.length;

    const goNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards);
    };

    const goPrev = () => {
        setActiveIndex(
            (prevIndex) => (prevIndex - 1 + totalCards) % totalCards
        );
    };

    useImperativeHandle(ref, () => ({
        goNext,
        goPrev,
    }));

    if (totalCards === 0) {
        return <div>No projects available.</div>;
    }

    return (
        <div className="carousel-container md:h-[75vh] relative">
            <div className="carousel-content">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`cardWorks ${activeIndex === index ? "Active" : ""}`}
                    >
                        {card}
                    </div>
                ))}
            </div>
            <div className="carousel-indicators fixed md:bottom-[10%] bottom-[11.5%] z-50">
                {cards.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${
                            activeIndex === index ? "indicator-active" : ""
                        }`}
                    ></span>
                ))}
            </div>
        </div>
    );
});

Works.displayName = "Works";
export default Works;
