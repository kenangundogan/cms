// src/app/components/ui/accordion/Accordion.js

'use client';

import { useState, createContext, useContext } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import React from 'react';

// Context oluştur
const AccordionContext = createContext();

// Accordion bileşeni
const Accordion = ({ children, isAllOpen = false, closeOthers = false, direction = "vertical", className }) => {
    const [openItems, setOpenItems] = useState(
        Array.isArray(children)
            ? children.map((child) => child.props.defaultOpen || isAllOpen)
            : [isAllOpen]
    );

    const toggleItem = (index) => {
        setOpenItems((prevState) =>
            prevState.map((isOpen, i) => {
                if (closeOthers) return i === index ? !isOpen : false;
                return i === index ? !isOpen : isOpen;
            })
        );
    };

    return (
        <AccordionContext.Provider value={{ openItems, toggleItem, direction }}>
            <div
                data-type="Accordion"
                className={`w-full ${direction === "horizontal" ? 'flex-row' : 'flex-col'} flex gap-2 p-4 ${className || ''}`}
            >
                {Array.isArray(children)
                    ? children.map((child, index) =>
                        React.cloneElement(child, { index, key: index })
                    )
                    : React.cloneElement(children, { index: 0, key: 0 })}
            </div>
        </AccordionContext.Provider>
    );
};

// Accordion Item bileşeni
Accordion.Item = ({ children, defaultOpen = false, index, disable = false }) => {
    const { openItems, direction } = useContext(AccordionContext);

    const isOpen = openItems[index];

    return (
        <div
            className={`border rounded-sm flex ${direction === "horizontal" ? 'flex-row' : 'flex-col'}
            ${disable ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { isOpen, direction, index, disable })
            )}
        </div>
    );
};

// Head bileşeni
Accordion.Head = ({ children, isOpen, direction, index, disable }) => {
    const { toggleItem } = useContext(AccordionContext);
    const isHorizontal = direction === "horizontal";

    const containerClass = `flex items-center gap-4 p-4 cursor-pointer bg-white
        ${isHorizontal ? 'flex-col' : 'flex-row'} justify-between
        ${disable ? 'cursor-not-allowed' : ''}`;

    const titleClass = `text-md font-bold ${isHorizontal ? 'writing-mode-vertical' : ''}`;
    const iconClass = `w-5 h-5 ${isHorizontal ? 'transform rotate-90' : ''}`;

    const handleClick = () => {
        if (!disable) {
            toggleItem(index);
        }
    };

    return (
        <div data-type="head" className={containerClass} onClick={handleClick}>
            <span className={titleClass}>{children}</span>
            {isOpen ? <ChevronUpIcon className={iconClass} /> : <ChevronDownIcon className={iconClass} />}
        </div>
    );
};

// Body bileşeni
Accordion.Body = ({ children, isOpen, direction }) => {
    const isHorizontal = direction === "horizontal";

    const containerClass = isHorizontal
        ? `transition-all duration-300 overflow-hidden border-l py-4 ${isOpen ? 'px-4 max-w-screen' : 'max-w-0 border-transparent'}`
        : `transition-all duration-300 overflow-hidden border-t px-4 ${isOpen ? 'py-4 max-h-screen' : 'max-h-0 border-transparent'}`;

    return <div data-type="body" className={containerClass}>{isOpen && children}</div>;
};

export default Accordion;
