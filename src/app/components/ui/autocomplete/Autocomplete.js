"use client";
import { useState, useEffect } from "react";

export default function Autocomplete({
    endpoint,
    name,
    responseMapping,
    searchKey,
    minChars = 1,
    displayFields = [],
    itemKeyField = null,
    selectedValueField = null,
    maxLength = 50,
    placeholder = "Arama yapın...",
    size = "md",
}) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const sizes = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    const fetchData = async () => {
        if (query.length < minChars) {
            setResults([]);
            return;
        }

        setLoading(true);
        try {
            const filterParam = `filter[${searchKey}]=${query}`;
            const url = `${endpoint}?${filterParam}`;
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error("Veri çekilirken hata oluştu.");
            }

            const data = await res.json();
            const mappedResults = data?.[responseMapping.data] || [];
            setResults(mappedResults);
        } catch (err) {
            console.error("Hata:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const debounce = setTimeout(fetchData, 300);
        return () => clearTimeout(debounce);
    }, [query]);

    const handleSelect = (item) => {
        let valueToSet = "";
        if (selectedValueField && item[selectedValueField]) {
            valueToSet = item[selectedValueField];
        } else if (displayFields.length > 0) {
            valueToSet = item[displayFields[0]] || "";
        }

        setQuery(valueToSet);
        setResults([]);
    };

    return (
        <div className="relative">
            <label htmlFor="autocomplete" className="block text-sm font-medium text-gray-700">
                {name}
            </label>
            <div className="relative mt-1">
                <input
                    type="text"
                    id="autocomplete"
                    maxLength={maxLength}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className={`w-full ${sizes[size]} border border-gray-300 rounded-sm shadow-sm
                     focus:ring-indigo-500 focus:border-indigo-500`}
                    placeholder={placeholder}
                />

                {loading && (
                    <div className="absolute top-0 right-0 mt-2 mr-4 text-sm text-gray-500">
                        Yükleniyor...
                    </div>
                )}

                {results.length > 0 && (
                    <ul
                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60
                       rounded-md overflow-auto focus:outline-none sm:text-sm"
                    >
                        {results.map((item, index) => {
                            const listKey =
                                itemKeyField && item[itemKeyField] !== undefined
                                    ? item[itemKeyField]
                                    : index;

                            const displayedText = displayFields
                                .map((field) => item[field])
                                .join(" ");

                            return (
                                <li
                                    key={listKey}
                                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                                    onClick={() => handleSelect(item)}
                                >
                                    {displayedText}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
}
