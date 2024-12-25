// Filters.js
export default function Filters({ filters, setFilters, setPage, columns }) {
    const handleFilterChange = (field, value) => {
        setFilters((prev) => ({ ...prev, [field]: value }));
        setPage(1);
    };

    return (
        <div className="mb-4 flex gap-2">
            {columns.map((column) => (
                <input
                    key={column.field}
                    type="text"
                    placeholder={`Ara ${column.label}...`}
                    value={filters[column.field]}
                    onChange={(e) => handleFilterChange(column.field, e.target.value)}
                    className="border px-2 py-1 rounded"
                />
            ))}
        </div>
    );
}
