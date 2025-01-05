"use client";

import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const SelectContext = createContext();

const sizes = {
    sm: "text-sm py-1 px-2",
    md: "text-base py-2 px-3",
    lg: "text-lg py-3 px-4",
};

const Select = ({
    children,
    value,
    onChange,
    size = "md",
    disabled = false,
    multiple = false,
}) => {
    const isValueArray = Array.isArray(value);

    if (multiple && !isValueArray) {
        throw new Error(
            "The `value` prop supplied to <Select> must be an array if `multiple` is true."
        );
    }

    return (
        <div className="relative w-full">
            <select
                className={clsx(
                    "block w-full border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-500",
                    sizes[size],
                    disabled && "bg-gray-100 cursor-not-allowed"
                )}
                value={value}
                onChange={(e) =>
                    onChange(
                        multiple
                            ? Array.from(e.target.selectedOptions).map((o) => o.value)
                            : e.target.value
                    )
                }
                disabled={disabled}
                multiple={multiple}
            >
                {children}
            </select>
        </div>
    );
};


Select.propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    disabled: PropTypes.bool,
    multiple: PropTypes.bool,
};

const Option = ({ value, children, disabled = false }) => {
    return (
        <option value={value} disabled={disabled}>
            {children}
        </option>
    );
};

Option.propTypes = {
    value: PropTypes.any.isRequired,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
};

const Optgroup = ({ label, children }) => {
    return (
        <optgroup label={label} className="font-semibold text-gray-700">
            {children}
        </optgroup>
    );
};

Optgroup.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

Select.Option = Option;
Select.Optgroup = Optgroup;

export default Select;
