"use client";
import { FC } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NavBar from "@/components/navbar/NavBar";
import { Footer } from "@/components/Footer/Footer";
import "./globals.css";
import { usePathname } from "next/navigation";

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();

    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen bg-color2 text-slate-100">
                <header className="relative">
                    <NavBar />
                </header>
                <main className="flex-grow overflow-auto">
                    <TransitionGroup>
                        <CSSTransition
                            key={pathname}
                            timeout={300}
                            classNames="page"
                        >
                            <div className="page-content">{children} </div>
                        </CSSTransition>
                    </TransitionGroup>
                </main>
                <footer className="">
                    <Footer />
                </footer>
            </body>
        </html>
    );
};

export default Layout;
