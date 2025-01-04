"use client";

import React from "react";
import PropTypes from "prop-types";

const Switch = ({
    label = "",
    labelPosition = "right",
    size = "md",
    shape = "default",
    variantType = "default",
    variant = "primary",
    checked = false,
    disabled = false,
    onChange,
    className = "",
    ...props
}) => {
    const baseStyles = `
    relative inline-flex items-center p-1 cursor-pointer transition-all duration-200
    focus:ring disabled:opacity-50 disabled:cursor-not-allowed
  `;

    const sizes = {
        sm: "w-8 h-4",
        md: "w-12 h-6",
        lg: "w-16 h-8",
    };

    const shapes = {
        default: "rounded-sm",
        pill: "rounded-full",
    };

    const defaultVariants = {
        primary: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-300",
        secondary: "bg-gray-500 hover:bg-gray-600 focus:ring-gray-300",
        info: "bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-300",
        success: "bg-green-500 hover:bg-green-600 focus:ring-green-300",
        danger: "bg-red-500 hover:bg-red-600 focus:ring-red-300",
        warning: "bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300",
        black: "bg-gray-800 hover:bg-gray-900 focus:ring-gray-700",
        white: "bg-gray-100 hover:bg-gray-200 focus:ring-gray-300",
    };

    const outlineVariants = {
        primary: "border border-blue-500 text-blue-500 hover:bg-blue-100 focus:ring-blue-300",
        secondary: "border border-gray-500 text-gray-500 hover:bg-gray-100 focus:ring-gray-300",
        info: "border border-indigo-500 text-indigo-500 hover:bg-indigo-100 focus:ring-indigo-300",
        success: "border border-green-500 text-green-500 hover:bg-green-100 focus:ring-green-300",
        danger: "border border-red-500 text-red-500 hover:bg-red-100 focus:ring-red-300",
        warning: "border border-yellow-500 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-300",
        black: "border border-black text-black hover:bg-gray-900 hover:text-white focus:ring-gray-700",
        white: "border border-white text-white hover:bg-gray-200 focus:ring-gray-300",
    };

    const variantClasses = variantType === "default" ? defaultVariants : outlineVariants;

    const switchClasses = `
    ${baseStyles}
    ${sizes[size]}
    ${shapes[shape]}
    ${variantClasses[variant]}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `;

    const handleClasses = `
        shadow transition-transform duration-200 w-[calc(100%/2-0.25rem)] h-full
        ${checked ? "transform translate-x-[calc(100%+0.50rem)]" : "transform translate-x-0"}
        ${shape === "pill" ? "rounded-full" : ""}
        ${variantType === "outline"
            ? `${checked ? defaultVariants[variant] : defaultVariants[variant]}`
            : "bg-white"
        }
    `;

    const labelClasses = `
    ${disabled ? "opacity-50" : ""}
    ${labelPosition === "top" ? "mb-2 text-center" : ""}
    ${labelPosition === "right" ? "ml-2" : ""}
    ${labelPosition === "bottom" ? "mt-2 text-center" : ""}
    ${labelPosition === "left" ? "mr-2" : ""}
  `;

    const containerClasses = `
    inline-flex
    ${labelPosition === "top" || labelPosition === "bottom" ? "flex-col gap-0" : "flex-row items-center gap-2"}
  `;

    return (
        <label className={containerClasses}>
            {label && labelPosition === "top" && <span className={labelClasses}>{label}</span>}
            <div
                className={switchClasses}
                onClick={() => !disabled && onChange?.(!checked)}
                {...props}
            >
                <div className={handleClasses}></div>
            </div>
            {label && labelPosition === "right" && <span className={labelClasses}>{label}</span>}
            {label && labelPosition === "bottom" && <span className={labelClasses}>{label}</span>}
            {label && labelPosition === "left" && <span className={labelClasses}>{label}</span>}
        </label>
    );
};

Switch.propTypes = {
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(["top", "right", "bottom", "left"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    shape: PropTypes.oneOf(["default", "rounded", "pill"]),
    variantType: PropTypes.oneOf(["default", "outline"]),
    variant: PropTypes.oneOf(["primary", "secondary", "info", "success", "danger", "warning", "black", "white"]),
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

export default Switch;
