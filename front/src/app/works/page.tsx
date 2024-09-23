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
        <div
            key={key}
            className=" md:w-[90%] w-screen h-full flex flex-col m-auto"
        >
            {proyect.name ? (
                <h2
                    translate="no"
                    className="md:text-4xl text-2xl TextShadow font-medium text-center md:mb-4 md:mt-4"
                >
                    {proyect.name}
                </h2>
            ) : (
                ""
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-4 items-center justify-center h-fit overflow-y-auto">
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
                <div className="grid grid-cols-2 gap-2 p-4 md:p-8 bg-color3 boxShadow rounded-xl md:overflow-y-auto w-fit m-auto">
                    {proyect.lenguajes ? (
                        <div className="flex flex-col w-fit">
                            <h2 className="md:text-2xl text-lg TextShadow font-medium  md:mb-2">
                                Lenguajes
                            </h2>
                            <ul>
                                {proyect.lenguajes.map((l, i) => (
                                    <li translate="no" key={i}>
                                        {l}
                                    </li>
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
                                    <li translate="no" key={i}>
                                        {f}
                                    </li>
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
                                    <li translate="no" key={i}>
                                        {t}
                                    </li>
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
                                    <li translate="no" key={i}>
                                        {l}
                                    </li>
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
                                    <li translate="no" key={i}>
                                        {d}
                                    </li>
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
                                    <li translate="no" key={i}>
                                        {c}
                                    </li>
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

            <div className=" md:text-xl text-base md:text-white  text-black z-10 ">
                <button
                    onClick={prev}
                    className="md:p-3 p-1 md:left-4 left-2 fixed top-1/2 bg-white md:bg-transparent hover:bg-white md:hover:text-black rounded-full z-50"
                >
                    Prev
                </button>
                <button
                    onClick={next}
                    className="md:p-3 p-1 md:right-4 right-2  fixed top-1/2 bg-white md:bg-transparent hover:bg-white md:hover:text-black rounded-full z-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ParentComponent;
