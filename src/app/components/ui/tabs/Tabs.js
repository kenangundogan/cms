// src/app/components/ui/tabs/Tabs.js

'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import React from 'react';

const TabsContext = createContext();

const Tabs = ({ children, defaultActive = 0, activeIndex = null, className }) => {
    const [activeTab, setActiveTab] = useState(activeIndex !== null ? activeIndex : defaultActive);

    useEffect(() => {
        if (activeIndex !== null) {
            setActiveTab(activeIndex);
        }
    }, [activeIndex]);

    const switchTab = (index) => {
        setActiveTab(index);
    };

    return (
        <TabsContext.Provider value={{ activeTab, switchTab }}>
            <div
                data-type="Tabs"
                className={`w-full flex flex-col gap-2 p-4 ${className || ''}`}
            >
                {children}
            </div>
        </TabsContext.Provider>
    );
};

Tabs.Head = ({ children }) => {
    return (
        <div
            data-type="Head"
            className="flex flex-row gap-2 bg-white snap-x snap-mandatory snap-start touch-pan-x overflow-x-auto whitespace-nowrap"
        >
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, { index, role: 'head', key: index })
            )}
        </div>
    );
};

Tabs.Body = ({ children }) => {
    return (
        <div data-type="Body" className='bg-white'>
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, { index, role: 'content', key: index })
            )}
        </div>
    );
};

Tabs.Item = ({ children, index, role }) => {
    const { activeTab, switchTab } = useContext(TabsContext);

    const isActive = activeTab === index;

    if (role === 'head') {
        const handleClick = () => {
            switchTab(index);
        };

        return (
            <div
                data-type="Item"
                className={`cursor-pointer p-4 whitespace-pre ${isActive ? 'font-bold border-b-2' : ''}`}
                onClick={handleClick}
            >
                {children}
            </div>
        );
    }

    if (role === 'content') {
        return (
            <div
                data-type="Item"
                className={`${isActive ? 'block' : 'hidden'} p-4`}
            >
                {children}
            </div>
        );
    }

    return null;
};

Tabs.Head.displayName = 'Tabs.Head';
Tabs.Body.displayName = 'Tabs.Body';
Tabs.Item.displayName = 'Tabs.Item';

export default Tabs;
