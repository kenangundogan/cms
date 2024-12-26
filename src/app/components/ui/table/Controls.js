export default function Controls({ limit, setLimit, setPage, options }) {
    if (!options) {
        options = [10, 20, 40, 60, 100];
    }
    return (
        <div className="flex items-center gap-2 text-sm">
            <span>Göster:</span>
            <select
                className="border rounded-sm py-2 px-3 outline-none"
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
