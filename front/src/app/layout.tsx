"use client";
import { FC, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import NavBar from "@/components/navbar/NavBar";
import { Footer } from "@/components/Footer/Footer";
import "./globals.css";
import { usePathname } from "next/navigation";

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
    const nodeRef = useRef(null);
    const pathname = usePathname();

    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen bg-color2 text-slate-100 text-sm md:text-base">
                <header className="relative">
                    <NavBar />
                </header>
                <main className="flex-grow overflow-auto">
                    <CSSTransition
                        key={pathname}
                        timeout={300}
                        classNames="page"
                    >
                        <div ref={nodeRef} className="page-content">
                            {children}{" "}
                        </div>
                    </CSSTransition>
                </main>
                <footer className="">
                    <Footer />
                </footer>
            </body>
        </html>
    );
};

export default Layout;
