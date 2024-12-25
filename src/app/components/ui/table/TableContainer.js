// TableContainer.js
import { useEffect, useState } from "react";
import Table from "@/app/components/ui/table/Table";
import Pagination from "@/app/components/ui/table/Pagination";
import Controls from "@/app/components/ui/table/Controls";

export default function TableContainer({
    endpoint,
    pagination = { active: false, options: {} },
    filter = false, // Filtreleme aktif mi?
    showControls = { active: false, options: [10, 20, 40, 60, 100] },
    sort = false, // Sıralama aktif mi?
    customColumns = [],
    responseMapping = { data: "items" },
    visibleColumns = [], // Sadece gösterilecek kolonlar
    hiddenColumns = [], // Gizlenecek kolonlar
}) {
    const [items, setItems] = useState([]);
    const [meta, setMeta] = useState(null);
    const [links, setLinks] = useState(null);
    const [columns, setColumns] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [sortField, setSortField] = useState("id");
    const [sortOrder, setSortOrder] = useState("asc");
    const [filters, setFilters] = useState({});

    const fetchColumnsAndData = async () => {
        try {
            const params = new URLSearchParams({
                page,
                limit,
                ...(sort ? { sort: sortOrder === "desc" ? `-${sortField}` : sortField } : {}),
                ...Object.entries(filters).reduce((acc, [key, value]) => {
                    if (value.trim() !== "") acc[`filter[${key}]`] = value.trim();
                    return acc;
                }, {}),
            });

            const res = await fetch(`${endpoint}?${params.toString()}`);
            if (!res.ok) throw new Error("Veri çekilirken hata oluştu.");

            const data = await res.json();

            const resolvePath = (obj, path) =>
                path.split(".").reduce((acc, key) => (acc ? acc[key] : null), obj);

            const itemsData = resolvePath(data, responseMapping.data) || [];

            let metaData = null;
            let linksData = null;

            if (pagination.active) {
                const options = pagination.options || {};
                metaData = {
                    current_page: resolvePath(data, options.currentPage),
                    last_page: resolvePath(data, options.lastPage),
                    per_page: resolvePath(data, options.perPage),
                    total: resolvePath(data, options.total),
                    path: resolvePath(data, options.path),
                    from: resolvePath(data, options.from),
                    to: resolvePath(data, options.to),
                };

                linksData = resolvePath(data, options.links) || null;

                if (!linksData && options.links) {
                    console.warn(
                        `Warning: The key "${options.links}" does not exist in the API response. Please check the "pagination.options.links" mapping.`
                    );
                }

                Object.entries(metaData).forEach(([key, value]) => {
                    if (value === null || value === undefined) {
                        console.warn(
                            `Warning: The key "${options[key]}" does not exist in the API response. Please check the "pagination.options" mapping for "${key}".`
                        );
                    }
                });
            }

            if (itemsData.length > 0 && columns.length === 0) {
                const initialColumns = Object.keys(itemsData[0]).map((key) => ({
                    field: key,
                    label: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " "),
                    render: null,
                }));

                // Kolonları filtrele
                const filteredColumns = initialColumns.filter((col) => {
                    // Eğer `visibleColumns` tanımlıysa, sadece bu kolonları göster
                    if (visibleColumns.length > 0) {
                        return visibleColumns.includes(col.field);
                    }
                    // Eğer `hiddenColumns` tanımlıysa, bu kolonları gizle
                    if (hiddenColumns.length > 0) {
                        return !hiddenColumns.includes(col.field);
                    }
                    // Varsayılan olarak tüm kolonları göster
                    return true;
                });

                const mergedColumns = filteredColumns.map((col) => {
                    const customColumn = customColumns.find((c) => c.field === col.field);
                    return customColumn
                        ? {
                              ...col,
                              ...customColumn,
                              label: customColumn.label || col.label,
                          }
                        : col;
                });

                setColumns(mergedColumns);

                if (filter) {
                    setFilters(
                        filteredColumns.reduce((acc, column) => {
                            acc[column.field] = "";
                            return acc;
                        }, {})
                    );
                }

                setSortField(filteredColumns[0]?.field || "");
            }

            setItems(itemsData);
            setMeta(metaData);
            setLinks(linksData);
        } catch (err) {
            console.error("Hata:", err);
        }
    };

    useEffect(() => {
        fetchColumnsAndData();
    }, [page, limit, sortField, sortOrder, filters]);

    const handleSort = (field) => {
        if (!sort) return;

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
                    {showControls.active && (
                        <Controls
                            limit={limit}
                            setLimit={setLimit}
                            setPage={setPage}
                            options={showControls.options}
                        />
                    )}
                    <Table
                        items={items}
                        columns={columns}
                        handleSort={handleSort}
                        sortField={sortField}
                        sortOrder={sortOrder}
                        filters={filters}
                        setFilters={setFilters}
                        setPage={setPage}
                        filter={filter}
                    />
                    {pagination.active && meta && (
                        <Pagination meta={meta} links={links} setPage={setPage} />
                    )}
                </>
            ) : (
                <p>Yükleniyor...</p>
            )}
        </div>
    );
}
