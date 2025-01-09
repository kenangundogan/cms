import React, { useState } from "react";
import PropTypes from "prop-types";
import './DateTimePicker.css';

const DateTimePicker = ({
    label,
    id,
    name,
    mode = "date",
    placeholder = "",
    value,
    defaultValue,
    onChange,
    onBlur,
    onFocus,
    error: externalError = "",
    helperText = "",
    tooltip = "",
    iconLeft,
    iconRight,
    disabled = false,
    required: isRequired = false,
    size = "md",
    className = "",
    ...props
}) => {
    const sizes = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    const [internalValue, setInternalValue] = useState(defaultValue || "");

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInternalValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    const displayValue = value !== undefined ? value : internalValue;
    const displayError = externalError;

    return (
        <div className={`flex flex-col space-y-1 ${className}`}>
            {label && (
                <label
                    htmlFor={id}
                    className={`text-sm font-medium text-gray-700 ${isRequired ? 'after:content-["*"] after:ml-0.5 after:text-red-500' : ""
                        }`}
                >
                    {label}
                    {tooltip && (
                        <span className="ml-2 text-gray-400 cursor-pointer" title={tooltip}>
                            ⓘ
                        </span>
                    )}
                </label>
            )}

            <div className="relative">
                {iconLeft && (
                    <span className="absolute inset-y-0 left-0 p-3 flex items-center text-gray-400 pointer-events-none">
                        {iconLeft}
                    </span>
                )}

                <input
                    id={id}
                    name={name}
                    type={
                        mode === "date"
                            ? "date"
                            : mode === "time"
                                ? "time"
                                : mode === "datetime"
                                    ? "datetime-local"
                                    : mode === "week"
                                        ? "week"
                                        : "text"
                    }
                    placeholder={placeholder}
                    value={displayValue}
                    onChange={handleChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    disabled={disabled}
                    required={isRequired}
                    aria-invalid={!!displayError}
                    aria-describedby={
                        displayError ? `${id}-error` : `${id}-helper`
                    }
                    className={`appearance-none w-full border ${displayError ? "border-red-500" : "border-gray-300"
                        } rounded-sm shadow-sm focus:ring ${displayError
                            ? "focus:ring-red-500"
                            : "focus:ring-blue-300 focus:border-blue-500"
                        } ${iconLeft ? "pl-10" : ""} ${iconRight ? "pr-10" : ""
                        } ${disabled ? "bg-gray-100 cursor-not-allowed" : ""
                        } ${sizes[size]}`}
                    {...props}
                />

                {iconRight && (
                    <span className="absolute inset-y-0 right-0 p-3 flex items-center text-gray-400 pointer-events-none">
                        {iconRight}
                    </span>
                )}
            </div>

            {helperText && !displayError && (
                <span id={`${id}-helper`} className="text-sm text-gray-500">
                    {helperText}
                </span>
            )}

            {displayError && (
                <span id={`${id}-error`} className="text-xs text-red-500">
                    {displayError}
                </span>
            )}
        </div>
    );
};

DateTimePicker.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(["date", "time", "datetime", "week"]),
    placeholder: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    error: PropTypes.string,
    helperText: PropTypes.string,
    tooltip: PropTypes.string,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    className: PropTypes.string,
};

export default DateTimePicker;
