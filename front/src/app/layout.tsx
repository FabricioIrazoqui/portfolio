"use client";
import { Footer } from "@/components/Footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FC, useState, useEffect } from "react";
import "./globals.css";

const variants = {
    initial: {
        opacity: 0,
        x: "-100%",
    },
    enter: {
        opacity: 1,
        x: "0%",
        transition: { duration: 0.3 },
    },
    exit: {
        opacity: 0,
        x: "100%",
        transition: { duration: 0.3 },
    },
};

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        setIsFirstLoad(false);
    }, []);

    return (
        <html lang="en">
            <head>
                <title>Fabricio Irazoqui</title>
                <meta name="Portfolio" content="Desarrollador Full Stack." />
            </head>
            <body className="flex flex-col min-h-screen bg-color2 text-slate-100 text-sm md:text-base">
                <header className="relative">
                    <NavBar />
                </header>
                <main className="flex-grow overflow-auto">
                    <motion.div
                        key={pathname}
                        initial={isFirstLoad ? false : "initial"}
                        animate="enter"
                        exit="exit"
                        variants={variants}
                    >
                        {children}
                    </motion.div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
};

export default Layout;
