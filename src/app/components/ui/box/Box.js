'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

// Context oluştur
const BoxContext = createContext();

// Box bileşeni
const Box = ({ children, className }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        setIsFullScreen((prevState) => !prevState);
    };

    // Escape tuşunu dinlemek için useEffect
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isFullScreen) {
                setIsFullScreen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Cleanup
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isFullScreen]);

    return (
        <BoxContext.Provider value={{ isFullScreen, toggleFullScreen }}>
            <div data-name="Box" className={`p-4 ${isFullScreen ? 'fixed inset-0 w-full h-full shadow-xl bg-yellow-50/75 z-50' : ''}`}>
                <div className={`w-full flex flex-col gap-4 bg-white border rounded-sm ${className || ''}`}>
                    {children}
                </div>
            </div>
        </BoxContext.Provider>
    );
};

// Head bileşeni
Box.Head = ({ children }) => {
    const { isFullScreen, toggleFullScreen } = useContext(BoxContext);

    return (
        <div data-name="head" className="p-4 border-b">
            <div className="flex justify-between">
                <div className="text-md font-bold">{children}</div>
                <div className="relative group">
                    <EllipsisVerticalIcon className="size-5 cursor-pointer" />
                    <div className="group-hover:block hidden absolute right-0 w-full min-w-44 bg-white">
                        <ul className="flex flex-col text-sm p-4 border shadow-lg">
                            <li
                                className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-sm cursor-pointer"
                                onClick={toggleFullScreen}
                            >
                                <span className="border border-black w-3 h-3 rounded-full"></span>
                                <span className="text-sm">{isFullScreen ? 'Exit Full Screen' : 'Full Screen'}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Body bileşeni
Box.Body = ({ children }) => {
    return <div data-name="body" className="p-4">{children}</div>;
};

// Footer bileşeni
Box.Footer = ({ children }) => {
    return <div data-name="footer" className="p-4 border-t">{children}</div>;
};

export default Box;
