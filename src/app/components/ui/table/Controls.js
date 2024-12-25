export default function Controls({ limit, setLimit, setPage, options }) {
    if (!options) {
        options = [10, 20, 40, 60, 100];
    }
    return (
        <div className="flex items-center mb-4 gap-2">
            <span>Göster:</span>
            <select
                className="border border-gray-300 rounded px-2 py-1"
                value={limit}
                onChange={(e) => {
                    setLimit(Number(e.target.value));
                    setPage(1);
                }}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <span>kayıt</span>
        </div>
    );
}
