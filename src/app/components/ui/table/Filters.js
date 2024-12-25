// Filters.js
export default function Filters({ filters, setFilters, columns, setPage }) {
    const handleFilterChange = (field, value) => {
        setFilters((prev) => ({ ...prev, [field]: value }));
        setPage(1);
    };

    return (
        <tr>
            {columns.map((column) => (
                <th key={column.field} className="text-left py-2 px-4">
                    <input
                        type="text"
                        placeholder={`Ara ${column.label || column.field}...`}
                        value={filters[column.field] || ""}
                        onChange={(e) => handleFilterChange(column.field, e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded"
                    />
                </th>
            ))}
        </tr>
    );
}

