'use client';

import { useState, createContext, useContext } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import React from 'react';

// Context oluştur
const AccordionContext = createContext();

// Accordion bileşeni
const Accordion = ({ children, isAllOpen = false, trigger = "click", className }) => {
    const [openItems, setOpenItems] = useState(
        Array.isArray(children)
            ? children.map((child) => child.props.defaultOpen || isAllOpen)
            : [isAllOpen]
    );

    const toggleItem = (index) => {
        setOpenItems((prevState) =>
            prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
        );
    };

    const setHoverState = (index, state) => {
        setOpenItems((prevState) =>
            prevState.map((isOpen, i) => (i === index ? state : isOpen))
        );
    };

    return (
        <AccordionContext.Provider value={{ openItems, toggleItem, setHoverState, trigger }}>
            <div data-type="Accordion" className={`w-full flex flex-col gap-2 p-4 ${className || ''}`}>
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
Accordion.Item = ({ children, defaultOpen = false, index }) => {
    const { openItems, toggleItem, setHoverState, trigger } = useContext(AccordionContext);

    const isOpen = openItems[index];

    const handleMouseEnter = () => {
        if (trigger === "hover") {
            setHoverState(index, true);
        }
    };

    const handleMouseLeave = () => {
        if (trigger === "hover") {
            setHoverState(index, false);
        }
    };

    const handleClick = () => {
        if (trigger === "click") {
            toggleItem(index);
        }
    };

    return (
        <div
            className="border rounded-sm"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { isOpen })
            )}
        </div>
    );
};

// Head bileşeni
Accordion.Head = ({ title, isOpen }) => {
    return (
        <div data-type="head" className="flex justify-between items-center p-4 bg-white">
            <span className="text-md font-bold">{title}</span>
            {isOpen ? (
                <ChevronUpIcon className="w-5 h-5" />
            ) : (
                <ChevronDownIcon className="w-5 h-5" />
            )}
        </div>
    );
};

// Body bileşeni
Accordion.Body = ({ children, isOpen }) => {
    return (
        <div data-type="body" className={`px-4 transition-all duration-300 overflow-hidden border-t ${isOpen ? 'py-4 max-h-auto' : 'max-h-0 border-transparent'}`}>
            {isOpen && children}
        </div>
    );
};

export default Accordion;
