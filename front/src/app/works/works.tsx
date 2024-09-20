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

    // Verifica si hay tarjetas y establece la longitud total
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

    // Si no hay tarjetas, se muestra un mensaje
    if (totalCards === 0) {
        return <div>No projects available.</div>;
    }

    return (
        <div className="carousel-container md:h-[75vh] h-full">
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
            <div className="carousel-indicators">
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
