// TableContainer.js
import { useEffect, useState } from "react";
import Table from "@/app/components/ui/table/Table";
import Pagination from "@/app/components/ui/table/Pagination";
import Filters from "@/app/components/ui/table/Filters";

export default function TableContainer({ endpoint, pagination = false, filter = false, showControls = false, customColumns = [] }) {
    const [items, setItems] = useState([]);
    const [meta, setMeta] = useState(null);
    const [columns, setColumns] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [sortField, setSortField] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [filters, setFilters] = useState({});

    const fetchColumnsAndData = async () => {
        try {
            const params = new URLSearchParams({
                page,
                limit,
                sort: sortOrder === "desc" ? `-${sortField}` : sortField,
                ...Object.entries(filters).reduce((acc, [key, value]) => {
                    if (value.trim() !== "") acc[`filter[${key}]`] = value.trim();
                    return acc;
                }, {}),
            });

            const res = await fetch(`${endpoint}?${params.toString()}`);
            if (!res.ok) throw new Error("Veri çekilirken hata oluştu.");

            const data = await res.json();

            // İlk veri setinden sütunları çıkart
            if (data.items.length > 0 && columns.length === 0) {
                const initialColumns = Object.keys(data.items[0]).map((key) => ({
                    field: key,
                    label: key.charAt(0).toUpperCase() + key.slice(1),
                }));

                // Custom columns ile birleştir
                const mergedColumns = initialColumns.map((col) => {
                    const customColumn = customColumns.find((c) => c.field === col.field);
                    return customColumn ? { ...col, ...customColumn } : col;
                });

                setColumns(mergedColumns);

                // Filtreler için dinamik state oluştur
                setFilters(
                    initialColumns.reduce((acc, column) => {
                        acc[column.field] = "";
                        return acc;
                    }, {})
                );

                setSortField(initialColumns[0]?.field || "");
            }

            setItems(data.items);
            setMeta(data.meta);
        } catch (err) {
            console.error("Hata:", err);
        }
    };

    useEffect(() => {
        fetchColumnsAndData();
    }, [page, limit, sortField, sortOrder, filters]);

    const handleSort = (field) => {
        if (sortField === field) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortOrder("asc");
        }
        setPage(1);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Dinamik Tablo</h1>
            {columns.length > 0 ? (
                <>
                    {showControls && (
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
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="40">40</option>
                                <option value="60">60</option>
                                <option value="100">100</option>
                            </select>
                            <span>kayıt</span>
                        </div>
                    )}
                    {filter && (
                        <Filters filters={filters} setFilters={setFilters} setPage={setPage} columns={columns} />
                    )}
                    <Table items={items} handleSort={handleSort} sortField={sortField} sortOrder={sortOrder} columns={columns} />
                    {pagination && meta && (
                        <Pagination meta={meta} setPage={setPage} />
                    )}
                </>
            ) : (
                <p>Yükleniyor...</p>
            )}
        </div>
    );
}
