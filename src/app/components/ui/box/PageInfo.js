'use client';

const PageInfo = ({ children, className }) => {
    return (
        <div data-name="PageInfo" className='p-4'>
            <div className={`w-full flex flex-col gap-1 ${className || ''}`}>
                {children}
            </div>
        </div>
    );
};

PageInfo.Title = ({ children }) => {
    return <div data-name="title" className="text-2xl font-bold">{children}</div>;
};

PageInfo.Description = ({ children }) => {
    return <div data-name="description" className="text-sm">{children}</div>;
};

export default PageInfo;
