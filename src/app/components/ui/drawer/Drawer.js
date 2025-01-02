import React, { useEffect } from "react";

export default function Drawer({ open, position = "left", onClose, children }) {
    const positionClasses = {
        top: "top-0 left-0 w-full h-72",
        right: "top-0 right-0 h-full w-72",
        bottom: "bottom-0 left-0 w-full h-72",
        left: "top-0 left-0 h-full w-72",
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && open) {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose]);

    return (
        <div
            className={`fixed z-50 bg-gray-800 bg-opacity-50 inset-0 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            onClick={onClose}
        >
            <div
                className={`fixed p-4 bg-white shadow-lg transition-transform ${positionClasses[position]
                    } ${open ? "transform-none" : `transform ${getTransform(position)}`}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    ×
                </button>
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
}

const getTransform = (position) => {
    switch (position) {
        case "top":
            return "-translate-y-full";
        case "right":
            return "translate-x-full";
        case "bottom":
            return "translate-y-full";
        case "left":
            return "-translate-x-full";
        default:
            return "-translate-x-full";
    }
};
