// Table.js
import Filters from "@/app/components/ui/table/Filters";

export default function Table({ items, columns, handleSort, sortField, sortOrder, filters, setFilters, setPage, filter }) {
    return (
        <div className="w-full overflow-x-auto border rounded-sm text-sm">
            <table className="min-w-full">
                <thead className="whitespace-pre">
                    {/* Sıralama başlıkları */}
                    <tr className="bg-gray-50">
                        {columns.map((column) => (
                            <th
                                key={column.field}
                                className="text-left p-4 cursor-pointer border-b border-r last:border-r-0"
                                onClick={() => handleSort(column.field)}
                            >
                                <div className="flex items-center justify-between gap-1">
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
                    {items.length > 0 ? (
                        items.map((item, index) => (
                            <tr key={index} className=" hover:bg-gray-50 *:py-2 *:px-4 *:border-b *:border-r *:last:border-b-0">
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
            </table>
        </div>
    );
}


