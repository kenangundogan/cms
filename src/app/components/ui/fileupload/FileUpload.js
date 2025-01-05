'use client';

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const FileUpload = ({
    id,
    name,
    multiple = false,
    accept = '',
    maxFileSize,
    onChange,
    disabled = false,
    className = '',
    size = 'md',
    placeholder = 'Select files...',
    fileTooLargeMessage = (fileName, maxSize) => `"${fileName}" exceeds the size limit (${maxSize} MB).`,
    ...props
}) => {
    const fileInputRef = useRef();
    const [files, setFiles] = useState([]);
    const [error, setError] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const sizes = {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-5 py-3',
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const validFiles = [];
        let errorMessage = '';

        if (maxFileSize) {
            selectedFiles.forEach((file) => {
                if (file.size <= maxFileSize) {
                    validFiles.push(file);
                } else {
                    errorMessage = fileTooLargeMessage(file.name, maxFileSize / (1024 * 1024));
                }
            });
        } else {
            validFiles.push(...selectedFiles);
        }

        setFiles(validFiles);
        setError(errorMessage);
        if (onChange) onChange(validFiles);
    };

    const toggleFileList = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className={`flex flex-col space-y-2 ${className}`}>
            <div className="relative flex items-center">
                {/* Hidden file input */}
                <input
                    id={id}
                    name={name}
                    type="file"
                    ref={fileInputRef}
                    multiple={multiple}
                    accept={accept}
                    disabled={disabled}
                    onChange={handleFileChange}
                    className="hidden"
                    {...props}
                />
                {/* Choose File Button */}
                <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    disabled={disabled}
                    className={`border border-gray-300 rounded-l-md bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring focus:ring-blue-300 focus:outline-none ${sizes[size]} ${disabled ? 'cursor-not-allowed bg-gray-200' : ''}`}
                >
                    Choose File
                </button>
                {/* Placeholder or file count */}
                <div
                    onClick={toggleFileList}
                    className={`flex-grow border border-gray-300 border-l-0 rounded-r-md bg-white text-gray-500 truncate px-3 cursor-pointer ${sizes[size]} ${disabled ? 'bg-gray-100' : ''}`}
                >
                    {files.length > 0
                        ? `${files.length} file(s) selected`
                        : placeholder}
                </div>
            </div>

            {/* File list (shown when expanded) */}
            {isExpanded && files.length > 0 && (
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    {files.map((file, index) => (
                        <li key={index}>
                            <span className="truncate">
                                {file.name}
                            </span>
                        </li>
                    ))}
                </ul>
            )}

            {/* Error message */}
            {error && (
                <div className="text-sm text-red-500 mt-1">
                    {error}
                </div>
            )}
        </div>
    );
};

FileUpload.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    multiple: PropTypes.bool,
    accept: PropTypes.string,
    maxFileSize: PropTypes.number,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    placeholder: PropTypes.string,
    fileTooLargeMessage: PropTypes.func,
};

export default FileUpload;
