"use client";
import React, { useRef } from "react";
import Works from "./works";
import Link from "next/link";
import { Proyects } from "@/Utils/projects";

const ParentComponent: React.FC = () => {
    const carouselRef = useRef<{ goNext: () => void; goPrev: () => void }>(
        null
    );
    const proyects = Proyects;
    const cards = proyects?.map((proyect, key) => (
        <div key={key} className="p-4 md:p-8 md:w-[90%]">
            {proyect.name ? (
                <h2 className="md:text-4xl text-2xl TextShadow font-medium text-center md:mb-4 md:mt-4">
                    {proyect.name}
                </h2>
            ) : (
                ""
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center h-fit">
                <div className="">
                    {proyect.description ? (
                        <div className=" md:p-8 p-2 md:overflow-y-auto relative">
                            {proyect.description.map((d, i) => (
                                <p
                                    key={i}
                                    className="text-left md:text-left max-w-2xl p-4"
                                >
                                    {d}
                                </p>
                            ))}
                        </div>
                    ) : (
                        ""
                    )}
                    {proyect.github && (
                        <Link
                            href={proyect.github[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit m-auto md:p-2 md:pl-4 md:pr-4 pl-3 pr-3 rounded-xl p-1 bg-color4 hover:bg-color1 transition-colors flex"
                        >
                            GitHub
                        </Link>
                    )}
                </div>
                <div className="grid grid-cols-2 gap-4 p-4 md:p-8 bg-color3 boxShadow rounded-xl md:overflow-y-auto">
                    {proyect.lenguajes ? (
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
                    ) : (
                        ""
                    )}
                    {proyect.frameworks ? (
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
                    ) : (
                        ""
                    )}
                    {proyect.tools ? (
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
                    ) : (
                        ""
                    )}
                    {proyect.libraries ? (
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
                    ) : (
                        ""
                    )}
                    {proyect.database ? (
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
                    ) : (
                        ""
                    )}
                    {proyect.cloudService ? (
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
                    ) : (
                        ""
                    )}
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

            <div className="carousel-controls md:absolute fixed flex md:top-1/2 top-[95%] md:text-xl text-base md:text-white  text-black">
                <button
                    onClick={prev}
                    className="md:p-3 p-1 md:left-4 left-2 fixed md:absolute top-[87%] md:top-0 bg-white md:bg-transparent hover:bg-white md:hover:text-black"
                >
                    Prev
                </button>
                <button
                    onClick={next}
                    className="md:p-3 p-1 md:right-4 right-2 md:absolute fixed top-[87%] md:top-0 bg-white md:bg-transparent hover:bg-white md:hover:text-black"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ParentComponent;
