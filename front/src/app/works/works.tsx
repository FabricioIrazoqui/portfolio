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

    const totalCards = cards ? cards.length : 0;

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
        <div className="carousel-container md:h-[77vh] h-full">
            <div
                className="carousel-content"
                style={{
                    transform: `translateX(-${activeIndex * 100}%)`,
                }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`cardWorks ${
                            activeIndex === index ? "Active" : "phone"
                        }`}
                    >
                        {card}
                    </div>
                ))}
            </div>
            <div className="carousel-indicators fixed md:absolute md:-bottom-3 bottom-[10%]">
                {cards.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${
                            activeIndex === index ? "indicator-active" : ""
                        }`}
                    ></span>
                ))}
            </div>
            <div className="carousel-controls"></div>
        </div>
    );
});

Works.displayName = "Works";

export default Works;
