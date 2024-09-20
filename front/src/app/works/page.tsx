"use client";
import React, { useRef } from "react";
import Works from "./works";
import { Proyects } from "@/components/Utils/projects";

const ParentComponent: React.FC = ({}) => {
    const proyects = Proyects;
    const carouselRef = useRef<{ goNext: () => void; goPrev: () => void }>(
        null
    );

    const cards = proyects?.map((proyect, key) => (
        <div key={key} className="p-4 md:p-8 w-[90%] ">
            <h2 className="md:text-4xl text-xl TextShadow font-medium text-center md:mb-4 md:mt-4">
                {proyect.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div>
                    <div className=" p-8">
                        {proyect.description.map((d, i) => (
                            <p
                                key={i}
                                className="text-left md:text-left max-w-2xl p-4"
                            >
                                {d}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4 md:p-8 bg-color3 boxShadow rounded-xl">
                    <div>
                        <h2 className="md:text-2xl text-lg TextShadow font-medium  md:mb-2">
                            Lenguajes
                        </h2>
                        <ul>
                            {proyect.lenguajes.map((l, i) => (
                                <li key={i}>{l}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="md:text-2xl text-lg TextShadow font-medium  md:mb-2">
                            Frameworks
                        </h2>
                        <ul>
                            {proyect.frameworks.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="md:text-2xl text-lg TextShadow font-medium  md:mb-2">
                            Tools
                        </h2>
                        <ul>
                            {proyect.tools.map((t, i) => (
                                <li key={i}>{t}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="md:text-2xl text-lg TextShadow font-medium  md:mb-2">
                            Libraries
                        </h2>
                        <ul>
                            {proyect.libraries.map((l, i) => (
                                <li key={i}>{l}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="md:text-2xl text-lg TextShadow font-medium  md:mb-2">
                            Database
                        </h2>
                        <ul>
                            {proyect.database.map((d, i) => (
                                <li key={i}>{d}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="md:text-2xl text-lg TextShadow font-medium  md:mb-2">
                            Cloud Service
                        </h2>
                        <ul>
                            {proyect.cloudService.map((c, i) => (
                                <li key={i}>{c}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ));

    const next = () => {
        if (carouselRef.current) {
            carouselRef.current.goNext();
        }
    };

    const prev = () => {
        if (carouselRef.current) {
            carouselRef.current.goPrev();
        }
    };

    return (
        <div className="relative">
            <Works ref={carouselRef} cards={cards} />

            <div className="carousel-controls md:flex fixed md:top-1/2 top-[95%]  ">
                <button onClick={prev} className="bg-white md:bg-transparent">
                    Prev
                </button>
                <button onClick={next} className="">
                    Next
                </button>
            </div>
        </div>
    );
};

export default ParentComponent;
