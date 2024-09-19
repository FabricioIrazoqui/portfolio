import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
    return (
        <div className="">
            <div className="bg-color4 p-4 gap-6 flex items-center justify-evenly max-w-2xl rounded-b-lg m-auto">
                <Link
                    href="/"
                    className="hover:text-blue-600 transition-colorsshadow-lg"
                >
                    About
                </Link>
                <Link
                    href="/works"
                    className="hover:text-blue-600 transition-colors"
                >
                    Works
                </Link>
                <Link
                    href="/experience"
                    className="hover:text-blue-600 transition-colors"
                >
                    Experience
                </Link>
                <Link
                    href="/contact"
                    className="hover:text-blue-600 transition-colors"
                >
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
