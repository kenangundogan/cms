// Table.js
import Filters from "@/app/components/ui/table/Filters";

export default function Table({ items, columns, handleSort, sortField, sortOrder, filters, setFilters, setPage, filter }) {
    return (
        <table data-type="Table" className="min-w-full">
            <thead data-type="Thead" className="bg-gray-50 text-gray-500">
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
            </thead>
            <tbody data-type="Tbody">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50 *:py-4 *:px-6 *:border-b *:border-r *:last:border-b-0">
                            {columns.map((column) => (
                                <td key={column.field} className="last:border-r-0">
                                    {column.render
                                        ? column.render(item[column.field], item) // Tüm satırı render fonksiyonuna geç
                                        : item[column.field] ?? "-"} {/* Eksik değer için fallback */}
                                </td>
                            ))}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={columns.length} className="text-center py-4">
                            Veri bulunamadı.
                        </td>
                    </tr>
                )}
            </tbody>
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
        </table>
    );
}


