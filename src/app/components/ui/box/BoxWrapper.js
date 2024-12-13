'use client';

const BoxWrapper = ({ children, className }) => {
    return (
        <div data-name="BoxWrapper" className={`${className || ''}`}>
            {children}
        </div>
    );
};

export default BoxWrapper;
