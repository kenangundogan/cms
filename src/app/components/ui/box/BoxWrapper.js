'use client';

const BoxWrapper = ({ children, className }) => {
    return (
        <div data-type="BoxWrapper" className={`${className || ''}`}>
            {children}
        </div>
    );
};

export default BoxWrapper;
