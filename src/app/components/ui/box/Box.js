'use client';

import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

const Box = ({ children, className, style }) => {
    return (
        <div data-name="box" className='p-4'>
            <div
                className={`w-full flex flex-col gap-4 bg-white border rounded-sm ${className || ''}`}
                style={style}
            >
                {children}
            </div>
        </div>
    );
};

Box.Title = ({ children }) => {
    return (
        <div data-name="head" className="p-4 border-b">
            <div className="flex justify-between">
                <div className="text-md font-bold">{children}</div>
                <div className="relative group">
                    <EllipsisVerticalIcon className="size-5 cursor-pointer" />
                    <div className="group-hover:block hidden absolute right-0 w-full min-w-44 bg-white">
                        <ul className="flex flex-col text-sm p-4 border shadow-lg *:hover:cursor-pointer">
                            <li className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-sm">
                                <span className="border border-black w-3 h-3 rounded-full"></span>
                                <span className="text-sm">Full Screen</span>
                            </li>
                            <li className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-sm">
                                <span className="border border-black w-3 h-3 rounded-full"></span>
                                <span className="text-sm">Minimize</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

Box.Body = ({ children }) => {
    return <div data-name="body" className="p-4">{children}</div>;
};

Box.Footer = ({ children }) => {
    return <div data-name="footer" className="p-4 border-t">{children}</div>;
};

export default Box;
