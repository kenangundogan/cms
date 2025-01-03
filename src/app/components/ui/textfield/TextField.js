// src/app/components/ui/textfield/TextField.js

'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    required,
    email,
    phone,
    minLength as minLengthValidator,
    maxLength as maxLengthValidator,
    lettersOnly,
    numbersOnly,
} from './validators';

const TextField = ({
    label,
    id,
    name,
    type = 'text',
    placeholder = '',
    value,
    defaultValue,
    onChange,
    onBlur,
    onFocus,
    error: externalError = '',
    helperText = '',
    tooltip = '',
    iconLeft,
    iconRight,
    disabled = false,
    required: isRequired = false,
    minLength,
    maxLength,
    rows,
    showCharacterCount = false,
    blockInvalidInput = false,
    validators = [],
    className = '',
    ...props
}) => {
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const [internalError, setInternalError] = useState('');

    const runValidators = (currentValue) => {
        const allValidators = [...validators];

        if (minLength) {
            allValidators.push((val) => minLengthValidator(val, minLength));
        }

        if (maxLength) {
            allValidators.push((val) => maxLengthValidator(val, maxLength));
        }

        for (const validator of allValidators) {
            const errorMessage = validator(currentValue);
            if (errorMessage) {
                return errorMessage;
            }
        }
        return '';
    };

    const handleChange = (e) => {
        let newValue = e.target.value;

        if (blockInvalidInput) {
            for (const validator of validators) {
                if (validator === lettersOnly && !/^[a-zA-Z\s]*$/.test(newValue)) {
                    return;
                }
                if (validator === numbersOnly && !/^[0-9]*$/.test(newValue)) {
                    return;
                }
            }
        }

        if (onChange) {
            onChange(e);
        }

        if (value === undefined) {
            setInternalValue(newValue);
        }

        const error = runValidators(newValue);
        setInternalError(error);
    };

    const displayValue = value !== undefined ? value : internalValue;
    const displayError = externalError || internalError;

    return (
        <div className={`flex flex-col space-y-1 ${className}`}>

            {label && (
                <label
                    htmlFor={id}
                    className={`text-sm font-medium text-gray-700 ${isRequired ? 'after:content-["*"] after:ml-0.5 after:text-red-500' : ''
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
                    <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
                        {iconLeft}
                    </span>
                )}

                {type === 'textarea' ? (
                    <textarea
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        value={displayValue}
                        onChange={handleChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        disabled={disabled}
                        required={isRequired}
                        rows={rows}
                        minLength={minLength}
                        maxLength={maxLength}
                        aria-invalid={!!displayError}
                        aria-describedby={displayError ? `${id}-error` : `${id}-helper`}
                        className={`border ${displayError ? 'border-red-500' : 'border-gray-300'
                            } rounded-sm shadow-sm px-4 py-3 text-sm focus:ring ${displayError
                                ? 'focus:ring-red-500'
                                : 'focus:ring-blue-300 focus:border-blue-500'
                            } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                        {...props}
                    />
                ) : (
                    <input
                        id={id}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        value={displayValue}
                        onChange={handleChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        disabled={disabled}
                        required={isRequired}
                        minLength={minLength}
                        maxLength={maxLength}
                        aria-invalid={!!displayError}
                        aria-describedby={displayError ? `${id}-error` : `${id}-helper`}
                        className={`border ${displayError ? 'border-red-500' : 'border-gray-300'
                            } rounded-sm shadow-sm px-4 py-3 text-sm focus:ring ${displayError
                                ? 'focus:ring-red-500'
                                : 'focus:ring-blue-300 focus:border-blue-500'
                            } ${iconLeft ? 'pl-10' : ''
                            } ${iconRight ? 'pr-10' : ''
                            } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''
                            }`}
                        {...props}
                    />
                )}

                {iconRight && (
                    <span className="absolute inset-y-0 right-2 flex items-center text-gray-400">
                        {iconRight}
                    </span>
                )}
            </div>

            {showCharacterCount && (
                <div className="text-xs text-gray-500 mt-1">
                    {displayValue.length}
                    {maxLength ? ` / ${maxLength}` : ''} characters
                </div>
            )}

            {helperText && !displayError && (
                <span id={`${id}-helper`} className="text-sm text-gray-500">
                    {helperText}
                </span>
            )}

            {displayError && (
                <span id={`${id}-error`} className="text-sm text-red-500">
                    {displayError}
                </span>
            )}
        </div>
    );
};

TextField.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel', 'textarea']),
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    rows: PropTypes.number,
    showCharacterCount: PropTypes.bool,
    blockInvalidInput: PropTypes.bool,
    validators: PropTypes.arrayOf(PropTypes.func),
    className: PropTypes.string,
};

export default TextField;
