"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "./navbar.css";

const NavBar: React.FC = () => {
    const pathname = usePathname();

    return (
        <div className="">
            <div className="bg-color4 p-4 gap-6 flex items-center justify-evenly max-w-2xl rounded-b-lg m-auto font-bold TextShadow">
                <Link
                    href="/"
                    className={`nav-link ${pathname === "/" ? "active" : ""}`}
                >
                    About
                </Link>
                <Link
                    href="/works"
                    className={`nav-link ${pathname === "/works" ? "active" : ""}`}
                >
                    Works
                </Link>
                <Link
                    href="/experience"
                    className={`nav-link ${pathname === "/experience" ? "active" : ""}`}
                >
                    Experience
                </Link>
                <Link
                    href="/contact"
                    className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
                >
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
