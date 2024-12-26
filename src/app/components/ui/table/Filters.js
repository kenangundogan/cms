// Filters.js
export default function Filters({ filters, setFilters, columns, setPage }) {
    const handleFilterChange = (field, value) => {
        setFilters((prev) => ({ ...prev, [field]: value }));
        setPage(1);
    };

    return (
        <tr className="bg-gray-50">
            {columns.map((column) => (
                column.filterable ? ( // Eğer kolon filterable ise input göster
                    <th key={column.field} className="text-left p-4 border-b border-r last:border-r-0">
                        <input
                            type="text"
                            placeholder={`Search ${column.label || column.field}...`}
                            value={filters[column.field] || ""}
                            onChange={(e) => handleFilterChange(column.field, e.target.value)}
                            className="w-full py-2 px-4 rounded-sm outline-none"
                        />
                    </th>
                ) : (
                    <th key={column.field} className="text-left p-4 border-b border-r last:border-r-0"></th> // Filterable değilse boş bir hücre
                )
            ))}
        </tr>
    );
}


