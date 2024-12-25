// Table.js
import Filters from "@/app/components/ui/table/Filters";

export default function Table({ items, columns, handleSort, sortField, sortOrder, filters, setFilters, setPage, filter }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
                <thead>
                    {/* Sıralama başlıkları */}
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.field}
                                className="text-left py-2 px-4 cursor-pointer"
                                onClick={() => handleSort(column.field)}
                            >
                                <div className="flex items-center gap-1">
                                    <span>{column.label || column.field}</span>
                                    {sortField === column.field && <span>{sortOrder === "asc" ? "▲" : "▼"}</span>}
                                </div>
                            </th>
                        ))}
                    </tr>
                    {/* Filtreleme satırı, sadece filter aktifse gösterilir */}
                    {filter && (
                        <Filters filters={filters} setFilters={setFilters} columns={columns} setPage={setPage} />
                    )}
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            {columns.map((column) => (
                                <td key={column.field} className="py-2 px-4">
                                    {column.render ? column.render(item[column.field], item) : item[column.field]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


