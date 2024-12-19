// src/app/components/ui/accordion/Accordion.js

'use client';

import { useState, createContext, useContext } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import React from 'react';

// Context oluştur
const AccordionContext = createContext();

// Accordion bileşeni
const Accordion = ({ children, isAllOpen = false, closeOthers = false, className }) => {
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
        <AccordionContext.Provider value={{ openItems, toggleItem }}>
            <div
                data-type="Accordion"
                className={`w-full flex flex-col gap-2 p-4 ${className || ''}`}
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
    const { openItems } = useContext(AccordionContext);

    const isOpen = openItems[index];

    return (
        <div
            data-type="Item"
            className={`rounded-sm flex flex-col ${disable ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { isOpen, index, disable })
            )}
        </div>
    );
};

// Head bileşeni
Accordion.Head = ({ children, isOpen, index, disable }) => {
    const { toggleItem } = useContext(AccordionContext);

    const containerClass = `flex items-center gap-4 p-4 cursor-pointer bg-white justify-between ${disable ? 'cursor-not-allowed' : ''}`;

    const iconClass = `w-5 h-5`;

    const handleClick = () => {
        if (!disable) {
            toggleItem(index);
        }
    };

    return (
        <div data-type="Head" className={containerClass} onClick={handleClick}>
            <span>{children}</span>
            {isOpen ? <ChevronUpIcon className={iconClass} /> : <ChevronDownIcon className={iconClass} />}
        </div>
    );
};

// Body bileşeni
Accordion.Body = ({ children, isOpen }) => {
    const containerClass = `transition-all duration-300 overflow-hidden border-t px-4 bg-white ${isOpen ? 'py-4 max-h-screen' : 'max-h-0 border-transparent'}`;

    return <div data-type="Body" className={containerClass}>{isOpen && children}</div>;
};

export default Accordion;
