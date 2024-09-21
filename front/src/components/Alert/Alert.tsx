import React, { useEffect } from "react";
import "./Alert.css";

interface AlertProps {
    message: string;
    type?: "success" | "error";
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({
    message,
    type = "success",
    onClose,
}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            className={`absolute top-0 right-0 transform md:p-4 p-2 rounded-3xl transition-opacity duration-300 boxShadow border-black font-bold ${
                type === "success"
                    ? "bg-green-200 text-black"
                    : "bg-red-200 text-black"
            }`}
            style={{ animation: "slideDown 0.5s ease-in-out" }}
        >
            {message}
        </div>
    );
};

export default Alert;
