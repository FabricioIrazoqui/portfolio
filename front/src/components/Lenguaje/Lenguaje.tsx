import React from "react";
import Image from "next/image";
import Talk from "@/assets/talk-symbol-of-speech-bubbles-svgrepo-com.svg";

const Lenguaje: React.FC = () => {
    return (
        <div className="md:p-10 p-4">
            <div className="flex gap-4 md:mb-8 mb-4 p-4 border-b-[0.5px]">
                <h1 className="md:text-5xl text-3xl TextShadow font-medium">
                    Lenguaje
                </h1>
                <Image
                    src={Talk}
                    alt={`Talk logo`}
                    width={45}
                    height={25}
                    className="rounded-full bg-slate-100 p-2"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-color3 p-4 md:p-8">
                <div className="flex md:gap-5 gap-2 items-center md:justify-start justify-center">
                    <h2 className="md:text-3xl text-xl">Spanish</h2>
                    <div className="w-4 h-4 md:w-8 md:h-8 border-4 border-red-600 bg-red-600 rounded-full"></div>
                    <div className="w-4 h-4 md:w-8 md:h-8 border-4 border-red-600 bg-red-600 rounded-full"></div>
                    <div className="w-4 h-4 md:w-8 md:h-8 border-4 border-red-600 bg-red-600 rounded-full"></div>
                    <div className="w-4 h-4 md:w-8 md:h-8 border-4 border-red-600 bg-red-600 rounded-full"></div>
                    <div className="w-4 h-4 md:w-8 md:h-8 border-4 border-red-600 bg-red-600 rounded-full"></div>
                    <p>Native</p>
                </div>
                <div className="flex md:gap-5 gap-2 items-center md:justify-start justify-center">
                    <h2 className="md:text-3xl text-xl ">English</h2>
                    <div className="w-4 h-4 md:w-8 md:h-8 border-4 border-red-600 bg-red-600 rounded-full"></div>
                    <div className="w-4 h-4 md:w-8 md:h-8 border-4 border-red-600 rounded-full"></div>
                    <div className="w-4 h-4 md:w-8 md:h-8 border-4 border-red-600 rounded-full"></div>
                    <div className="w-4 h-4 md:w-8 md:h-8 border-4 border-red-600 rounded-full"></div>
                    <div className="w-4 h-4 md:w-8 md:h-8 border-4 border-red-600 rounded-full"></div>
                    <h2 className="md:text-3xl text-2xl m-0 pb-1 font-extrabold blinking">
                        +
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Lenguaje;
