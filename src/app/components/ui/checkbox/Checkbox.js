"use client";

import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({
    label = "",
    variantType = "default",
    variant = "primary",
    size = "md",
    shape = "default",
    checked = false,
    disabled = false,
    onChange,
    className = "",
    ...props
}) => {

    const baseStyles = `
        relative appearance-none cursor-pointer
        focus:ring transition duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        checked:before:absolute checked:before:inset-0 checked:before:m-auto checked:before:w-1/2 checked:before:h-1/2
    `;

    const sizes = {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
    };

    const shapes = {
        default: "rounded-sm",
        rounded: "rounded-md checked:before:rounded-md",
        pill: "rounded-lg checked:before:rounded-lg",
        circle: "rounded-full aspect-square checked:before:rounded-full checked:before:aspect-square",
    };

    const defaultVariants = {
        primary: `bg-blue-500 hover:bg-blue-600 focus:ring-blue-300 checked:bg-blue-600 checked:border-blue-300 checked:before:bg-white`,
        secondary: `bg-gray-500 hover:bg-gray-600 focus:ring-gray-300 checked:bg-gray-600 checked:border-gray-300 checked:before:bg-white`,
        info: `bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-300 checked:bg-indigo-600 checked:border-indigo-300 checked:before:bg-white`,
        success: `bg-green-500 hover:bg-green-600 focus:ring-green-300 checked:bg-green-600 checked:border-green-300 checked:before:bg-white`,
        danger: `bg-red-500 hover:bg-red-600 focus:ring-red-300 checked:bg-red-600 checked:border-red-300 checked:before:bg-white`,
        warning: `bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300 checked:bg-yellow-600 checked:border-yellow-300 checked:before:bg-white`,
        black: `bg-gray-800 hover:bg-gray-900 focus:ring-gray-700 checked:bg-gray-900 checked:border-gray-700 checked:before:bg-white`,
        white: `bg-gray-100 hover:bg-gray-200 focus:ring-gray-300 checked:bg-gray-200 checked:border-gray-300 checked:before:bg-white`,
    };

    const outlineVariants = {
        primary: `border border-blue-500 text-blue-500 hover:bg-blue-100 focus:ring-blue-300 checked:border-blue-300 checked:before:bg-blue-500`,
        secondary: `border border-gray-500 text-gray-500 hover:bg-gray-100 focus:ring-gray-300 checked:border-gray-300 checked:before:bg-gray-500`,
        info: `border border-indigo-500 text-indigo-500 hover:bg-indigo-100 focus:ring-indigo-300 checked:border-indigo-300 checked:before:bg-indigo-500`,
        success: `border border-green-500 text-green-500 hover:bg-green-100 focus:ring-green-300 checked:border-green-300 checked:before:bg-green-500`,
        danger: `border border-red-500 text-red-500 hover:bg-red-100 focus:ring-red-300 checked:border-red-300 checked:before:bg-red-500`,
        warning: `border border-yellow-500 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-300 checked:border-yellow-300 checked:before:bg-yellow-500`,
        black: `border border-black text-black checked:bg-gray-900 checked:border-gray-700 checked:before:bg-black`,
        white: `border border-white text-white checked:bg-gray-200 checked:border-gray-300 checked:before:bg-white`,
    };

    const variantClasses = variantType === "default" ? defaultVariants : outlineVariants;

    const combinedStyles = `
        ${baseStyles}
        ${sizes[size]}
        ${shapes[shape]}
        ${variantClasses[variant]}
        ${className}
    `;

    return (
        <label className="flex items-center space-x-2">
            <input
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onChange={(e) => onChange?.(e.target.checked)}
                className={combinedStyles}
                {...props}
            />
            {label && (
                <span className={disabled ? "text-gray-400" : "text-gray-700"}>{label}</span>
            )}
        </label>
    );
};

Checkbox.propTypes = {
    label: PropTypes.string,
    variantType: PropTypes.oneOf(["default", "outline"]),
    variant: PropTypes.oneOf(["primary", "secondary", "info", "success", "danger", "warning", "black", "white"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    shape: PropTypes.oneOf(["default", "rounded", "pill", "circle"]),
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

export default Checkbox;
