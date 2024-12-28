// Filters.js
export default function Filters({ filters, setFilters, columns, setPage }) {
    const handleFilterChange = (field, value) => {
        setFilters((prev) => ({ ...prev, [field]: value }));
        setPage(1);
    };

    return (
        <tr>
            {columns.map((column) => (
                column.filterable ? (
                    <th key={column.field} className="text-left border last:border-r-0 first:border-l-0">
                        <input
                            type="text"
                            placeholder={`Search ${column.label || column.field}...`}
                            value={filters[column.field] || ""}
                            onChange={(e) => handleFilterChange(column.field, e.target.value)}
                            className="w-full py-4 px-6 rounded-sm outline-none placeholder-gray-300"
                        />
                    </th>
                ) : (
                    <th key={column.field} className="text-left border last:border-r-0 first:border-l-0"></th>
                )
            ))}
        </tr>
    );
}


