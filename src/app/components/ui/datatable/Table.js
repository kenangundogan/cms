// src/app/components/ui/datatable/Table.js
import TableHeader from "@/app/components/ui/datatable/TableHeader";
import TableBody from "@/app/components/ui/datatable/TableBody";
import TableFooter from "@/app/components/ui/datatable/TableFooter";

export default function Table({ items, columns, handleSort, sortField, sortOrder, filters, setFilters, setPage, filter }) {
    return (
        <table data-type="Table" className="min-w-full">
            <TableHeader
                columns={columns}
                handleSort={handleSort}
                sortField={sortField}
                sortOrder={sortOrder}
                filters={filters}
                setFilters={setFilters}
                setPage={setPage}
                filter={filter}
            />
            <TableBody items={items} columns={columns} />
            <TableFooter
                columns={columns}
                handleSort={handleSort}
                sortField={sortField}
                sortOrder={sortOrder}
                filters={filters}
                setFilters={setFilters}
                setPage={setPage}
                filter={filter}
            />
        </table>
    );
}
