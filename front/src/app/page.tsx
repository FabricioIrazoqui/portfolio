"use client";
import { FC } from "react";
import About from "@/components/about/About";
import HardSkills from "@/components/HardSkills/HardSkills";
import SoftSkills from "@/components/SoftSkills/SoftSkills";
import Lenguaje from "@/components/Lenguaje/Lenguaje";

const HomePage: FC = () => {
    return (
        <>
            <About />
            <HardSkills />
            <SoftSkills />
            <Lenguaje />
        </>
    );
};

export default HomePage;
