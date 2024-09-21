"use client";
import { Buttons } from "./buttons";
import "./Footer.css";

export const Footer = () => {
    return (
        <div className="position">
            <div>
                <Buttons />
            </div>
            <a
                href="/Fabricio Irazoqui.pdf"
                target="_blank"
                className="download-link bg-white font-medium rounded-3xl p-4 md:pt-2 md:pb-2 text-black md:absolute md:right-[2%] relative hover:bg-zinc-400 transition-colors"
            >
                View CV
            </a>
        </div>
    );
};
