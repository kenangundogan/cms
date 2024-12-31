// src/app/components/ui/table/Table.js

"use client";

import { createContext, useContext } from "react";

const TableSectionContext = createContext("body");

const Table = ({ children }) => (
    <div data-type="Table" className="min-w-full">
        <div data-type="Wrapper" className="relative overflow-x-auto bg-white text-sm">
            <table className="min-w-full">
                {children}
            </table>
        </div>
    </div>
);

const Header = ({ children }) => (
    <TableSectionContext.Provider value="header">
        <thead className="bg-gray-50 text-gray-500">{children}</thead>
    </TableSectionContext.Provider>
);

const Footer = ({ children }) => (
    <TableSectionContext.Provider value="footer">
        <tfoot className="bg-gray-50 text-gray-500">{children}</tfoot>
    </TableSectionContext.Provider>
);

const Body = ({ children }) => (
    <TableSectionContext.Provider value="body">
        <tbody>{children}</tbody>
    </TableSectionContext.Provider>
);

const Row = ({ children }) => {
    const section = useContext(TableSectionContext);

    const className =
        section === "header"
            ? "whitespace-pre *:py-4 *:px-6"
            : section === "footer"
                ? "whitespace-pre *:py-4 *:px-6"
                : "hover:bg-gray-50 *:py-4 *:px-6";

    return <tr className={`${className}`}>{children}</tr>;
};

const Cell = ({ children }) => {
    const section = useContext(TableSectionContext);

    const Tag = section === "header" || section === "footer" ? "th" : "td";
    const className =
        section === "header" || section === "footer"
            ? "text-left border"
            : "text-left border";

    return <Tag className={className}>{children}</Tag>;
};

Table.Header = Header;
Table.Body = Body;
Table.Footer = Footer;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
