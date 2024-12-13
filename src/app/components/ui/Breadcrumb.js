'use client';

import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const Breadcrumb = ({ children, className }) => {
    const items = React.Children.toArray(children);

    return (
        <div data-type="Breadcrumb" className="p-4">
            <ul className={`w-full flex gap-1 items-center text-xs ${className || ''}`}>
                {items.map((child, index) => (
                    <li
                        key={index}
                        data-type="item"
                        className="flex items-center gap-2"
                    >
                        {child}

                        {index < items.length - 1 && (
                            <ChevronRightIcon className="size-2 text-gray-500" />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

Breadcrumb.Item = ({ children, href }) => {
    return href ? (
        <a href={href} className="font-bold hover:underline">
            {children}
        </a>
    ) : (
        <span>{children}</span>
    );
};

export default Breadcrumb;
