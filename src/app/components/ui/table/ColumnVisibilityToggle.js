import { useState, useRef, useEffect } from "react";

export default function ColumnVisibilityToggle({ columns, visibleColumnKeys, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleOutsideClick = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    return (
        <div className="relative ml-auto text-sm" ref={dropdownRef}>
            {/* Dropdown Aç/Kapat Butonu */}
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="bg-white border px-4 py-2 rounded-sm"
            >
                Column Visibility
            </button>

            {/* Dropdown İçeriği */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border rounded-sm shadow-lg z-10">
                    <div className="flex flex-col">
                        {columns.map((col) => (
                            <label key={col.field} className="flex items-center gap-2 p-4 border-b">
                                <input
                                    type="checkbox"
                                    checked={visibleColumnKeys.includes(col.field)}
                                    onChange={(e) => onChange(col.field, e.target.checked)}
                                />
                                <span>{col.label || col.field}</span>
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
