"use client";

import { useState, useRef, createContext, useContext, useEffect } from "react";

const DropdownContext = createContext();

export default function Dropdown({
    buttonText = "Dropdown",
    direction = "bottom",
    disable = false,
    size = "md",
    children,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownWidth, setDropdownWidth] = useState(null);
    const buttonRef = useRef(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        if (!disable) {
            setIsOpen((prev) => !prev);
        }
    };

    const sizeClasses = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    const directionClasses = {
        bottom: "top-full left-0",
        top: "bottom-full left-0",
        right: "top-0 left-full",
        left: "top-0 right-full",
    };

    useEffect(() => {
        if (buttonRef.current) {
            setDropdownWidth(buttonRef.current.offsetWidth);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <DropdownContext.Provider value={{ isOpen, toggleDropdown }}>
            <div className={`relative inline-block text-left`} ref={dropdownRef}>
                <button
                    ref={buttonRef}
                    onClick={toggleDropdown}
                    disabled={disable}
                    className={`${sizeClasses[size]} flex items-center justify-between bg-white border border-gray-300 rounded focus:outline-none ${disable ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
                        }`}
                >
                    <span>{buttonText}</span>
                    <svg
                        className={`w-5 h-5 ml-2 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                            }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
                {isOpen && (
                    <div
                        className={`absolute z-10 bg-white border border-gray-300 rounded shadow-lg ${directionClasses[direction]}`}
                        style={{ minWidth: dropdownWidth }}
                    >
                        {children}
                    </div>
                )}
            </div>
        </DropdownContext.Provider>
    );
}

Dropdown.Head = function DropdownHead({ children }) {
    return <div className="px-4 py-2 bg-gray-50 border-y">{children}</div>;
};

Dropdown.Body = function DropdownBody({ children }) {
    return (
        <div className="max-h-40 overflow-auto">
            <ul className="py-1">{children}</ul>
        </div>
    );
};

Dropdown.Item = function DropdownItem({ children, onClick }) {
    const { toggleDropdown } = useContext(DropdownContext);

    const handleClick = () => {
        onClick && onClick();
        toggleDropdown();
    };

    return (
        <li
            onClick={handleClick}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
        >
            {children}
        </li>
    );
};

Dropdown.Foot = function DropdownFoot({ children }) {
    return <div className="px-4 py-2 bg-gray-50 border-t">{children}</div>;
};
