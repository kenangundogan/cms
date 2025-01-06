// src/app/components/ui/list/List.js

"use client";

import React from "react";

const List = ({ children, oddEven = false, activeItems = [] }) => (
    <ul className="w-full overflow-hidden bg-white rounded-sm border divide-y">
        {children.map((child, index) =>
            oddEven
                ? React.cloneElement(child, {
                    isOdd: index % 2 === 0,
                    isActive: activeItems.includes(index),
                })
                : React.cloneElement(child, {
                    isActive: activeItems.includes(index),
                })
        )}
    </ul>
);

const Row = ({ children, isOdd, isActive }) => (
    <li
        className={`hover:bg-gray-100 ${isActive
                ? "bg-blue-100"
                : isOdd
                    ? "bg-gray-50"
                    : "bg-white"
            }`}
    >
        <div className="flex flex-wrap gap-4 items-center">{children}</div>
    </li>
);

const RowItem = ({ children }) => (
    <span className="p-4">{children}</span>
);

List.Row = Row;
List.Row.Item = RowItem;

export default List;
