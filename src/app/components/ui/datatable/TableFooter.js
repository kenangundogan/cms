// src/app/components/ui/datatable/TableFooter.js
import Filters from "@/app/components/ui/datatable/Filters";

export default function TableFooter({ columns, handleSort, sortField, sortOrder, filters, setFilters, setPage, filter }) {
    return (
        <tfoot data-type="Tfoot" className="bg-gray-50">
            <tr className="whitespace-pre *:py-4 *:px-6">
                {columns.map((column) => (
                    <th
                        key={column.field}
                        className="text-left cursor-pointer border last:border-r-0 first:border-l-0"
                        onClick={() => handleSort(column.field)}
                    >
                        <div className="flex items-center justify-between gap-1">
                            <span>{column.label || column.field}</span>
                            {sortField === column.field && <span>{sortOrder === "asc" ? "▲" : "▼"}</span>}
                        </div>
                    </th>
                ))}
            </tr>
            {filter && (
                <Filters filters={filters} setFilters={setFilters} columns={columns} setPage={setPage} />
            )}
        </tfoot>
    );
}
