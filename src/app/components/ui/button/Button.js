"use client";

import React from "react";
import PropTypes from "prop-types";

const Button = ({
    type = "button",
    variantType = "default",
    variant = "primary",
    size = "md",
    shape = "default",
    disabled = false,
    className = "",
    onClick,
    children,
    icon,
    ...props
}) => {
    const baseStyles =
        "inline-flex items-center justify-center font-medium focus:outline-none focus:ring";

    const shapes = {
        default: "rounded-sm",
        rounded: "rounded-lg",
        pill: "rounded-full",
        circle: "rounded-full w-10 h-10 p-0 flex items-center justify-center",
    };

    const defaultVariants = {
        primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300 disabled:bg-blue-300 disabled:cursor-not-allowed",
        secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed",
        info: "bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-300 disabled:bg-indigo-300 disabled:cursor-not-allowed",
        success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-300 disabled:bg-green-300 disabled:cursor-not-allowed",
        danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300 disabled:bg-red-300 disabled:cursor-not-allowed",
        warning: "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-300 disabled:bg-yellow-300 disabled:cursor-not-allowed",
        black: "bg-black text-white hover:bg-black focus:ring-gray-900 disabled:bg-gray-900 disabled:cursor-not-allowed",
        white: "bg-white text-black hover:bg-white focus:ring-gray-100 disabled:bg-gray-100 disabled:cursor-not-allowed",
    };

    const outlineVariants = {
        primary: "border border-blue-500 text-blue-500 hover:bg-blue-100 focus:ring-blue-300",
        secondary: "border border-gray-500 text-gray-500 hover:bg-gray-100 focus:ring-gray-300",
        info: "border border-indigo-500 text-indigo-500 hover:bg-indigo-100 focus:ring-indigo-300",
        success: "border border-green-500 text-green-500 hover:bg-green-100 focus:ring-green-300",
        danger: "border border-red-500 text-red-500 hover:bg-red-100 focus:ring-red-300",
        warning: "border border-yellow-500 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-300",
        black: "border border-black text-black",
        white: "border border-white text-white",
    };

    const textVariants = {
        primary: "text-blue-500 hover:underline focus:ring-blue-300",
        secondary: "text-gray-500 hover:underline focus:ring-gray-300",
        info: "text-indigo-500 hover:underline focus:ring-indigo-300",
        success: "text-green-500 hover:underline focus:ring-green-300",
        danger: "text-red-500 hover:underline focus:ring-red-300",
        warning: "text-yellow-500 hover:underline focus:ring-yellow-300",
        black: "text-black hover:underline focus:ring-gray-900",
        white: "text-white hover:underline focus:ring-gray-100",
    };

    const sizes = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    const variantClasses =
        variantType === "outline"
            ? outlineVariants[variant]
            : variantType === "text"
                ? textVariants[variant]
                : defaultVariants[variant];

    const combinedClassName = `${baseStyles} ${shapes[shape]} ${variantClasses} ${variantType !== "text" && shape !== "circle" ? sizes[size] : ""
        } ${className}`;

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={combinedClassName}
            {...props}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    variantType: PropTypes.oneOf(["default", "outline", "text"]),
    variant: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "danger",
        "warning",
        "black",
        "white",
    ]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    shape: PropTypes.oneOf(["default", "rounded", "pill", "circle"]),
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    icon: PropTypes.node,
};

export default Button;
