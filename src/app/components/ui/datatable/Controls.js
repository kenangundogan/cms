// src/app/components/ui/datatable/Controls.js
export default function Controls({ limit, setLimit, setPage, options }) {
    if (!options) {
        options = [10, 20, 40, 60, 100];
    }
    return (
        <div data-type="Controls" className="flex items-center gap-2 text-sm">
            <select
                className="border rounded py-2 outline-none indent-1 min-w-14"
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
        </div>
    );
}
