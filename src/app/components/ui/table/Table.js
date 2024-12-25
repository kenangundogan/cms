// Table.js
export default function Table({ items, handleSort, sortField, sortOrder, columns }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.field}
                                className="text-left py-2 px-4 cursor-pointer"
                                onClick={() => handleSort(column.field)}
                            >
                                <div className="flex items-center">
                                    {column.label}
                                    {sortField === column.field && <span>{sortOrder === "asc" ? "▲" : "▼"}</span>}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            {columns.map((column) => (
                                <td key={column.field} className="py-2 px-4">
                                    {column.render
                                        ? column.render(item[column.field], item)
                                        : item[column.field]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
