'use client';

const Example = ({ children, className }) => {
    return (
        <div data-type="Example">
            <div className={`w-full flex flex-col p-4 ${className || ''}`}>
                {children}
            </div>
        </div>
    );
};

Example.Title = ({ children }) => {
    return <div data-type="Title" className="text-xl font-bold">{children}</div>;
};

Example.Description = ({ children }) => {
    return <div data-type="Description" className="text-sm mb-4">{children}</div>;
};

Example.Body = ({ children }) => {
    return <div data-type="Body" className="bg-example bg-slate-50 rounded-md overflow-hidden text-sm p-4">
        {children}
    </div>;
};

export default Example;
