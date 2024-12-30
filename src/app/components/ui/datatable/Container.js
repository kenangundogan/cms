// src/app/components/ui/datatable/Container.js
import { useEffect, useState } from "react";
import Table from "@/app/components/ui/datatable/Table";
import Pagination from "@/app/components/ui/datatable/Pagination";
import Controls from "@/app/components/ui/datatable/Controls";
import ColumnVisibilityToggle from "@/app/components/ui/datatable/ColumnVisibilityToggle";

export default function Container({
    endpoint,
    pagination = { active: false, options: {} },
    filter = false,
    showControls = { active: false, options: [10, 20, 40, 60, 100] },
    sort = false,
    customColumns = [],
    addColumns = [],
    responseMapping = { data: "items" },
    visibleColumns = [],
    hiddenColumns = [],
    columnVisibilityToggle = false,
}) {
    const [items, setItems] = useState([]);
    const [meta, setMeta] = useState(null);
    const [links, setLinks] = useState(null);
    const [columns, setColumns] = useState([]);
    const [visibleColumnKeys, setVisibleColumnKeys] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [sortField, setSortField] = useState("id");
    const [sortOrder, setSortOrder] = useState("asc");
    const [filters, setFilters] = useState({});
    const [errorMessage, setErrorMessage] = useState(""); // Hata mesajı için state

    const resolvePath = (obj, path) => {
        if (!path) return null;

        const parts = path
            .replace(/\[(\w+)\]/g, ".$1")
            .split(".")
            .filter(Boolean);

        return parts.reduce((acc, key) => {
            if (acc && Object.prototype.hasOwnProperty.call(acc, key)) {
                return acc[key];
            }
            return null;
        }, obj);
    };


    const fetchColumnsAndData = async () => {
        try {
            setErrorMessage(""); // Önceki hatayı temizle
            const params = new URLSearchParams({
                page,
                limit,
                ...(sort ? { sort: sortOrder === "desc" ? `-${sortField}` : sortField } : {}),
                ...Object.entries(filters).reduce((acc, [key, value]) => {
                    if (value.trim() !== "") acc[`filter[${key}]`] = value.trim();
                    return acc;
                }, {}),
            });

            const url = `${endpoint}?${params.toString()}`;
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error(
                    `API isteği başarısız oldu. (HTTP ${res.status}: ${res.statusText})`
                );
            }

            const data = await res.json();

            if (!data) {
                throw new Error("API'den boş veri döndü.");
            }




            const itemsData = resolvePath(data, responseMapping.data) || [];
            setItems(itemsData);

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

                setMeta(metaData);
                setLinks(linksData);
            }

            if (itemsData.length > 0 && columns.length === 0) {
                const initialColumns = Object.keys(itemsData[0]).reduce((acc, key) => {
                    const customCol = customColumns.find((c) => c.field === key);

                    if (customCol) {
                        acc.push({
                            field: key,
                            label: customCol.label || key,
                            render: customCol.render || null,
                            filterable: customCol.filterable ?? true, // yoksa default true
                        });
                        return acc;
                    }

                    const val = itemsData[0][key];
                    if (val !== null && typeof val === "object") {
                        return acc;
                    }

                    acc.push({
                        field: key,
                        label: key.charAt(0).toUpperCase() + key.slice(1),
                        render: null,
                        filterable: true,
                    });

                    return acc;
                }, []);

                const allColumns = [
                    ...initialColumns.filter((col) => {
                        if (visibleColumns.length > 0) {
                            return visibleColumns.includes(col.field);
                        }
                        if (hiddenColumns.length > 0) {
                            return !hiddenColumns.includes(col.field);
                        }
                        return true;
                    }),
                    ...addColumns.map((col) => ({
                        ...col,
                        filterable: col.filterable ?? false,
                    })),
                ];

                const mergedColumns = allColumns.map((col) => {
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
                setVisibleColumnKeys(mergedColumns.map((col) => col.field));

                if (filter) {
                    setFilters(
                        allColumns.reduce((acc, column) => {
                            if (column.filterable) {
                                acc[column.field] = "";
                            }
                            return acc;
                        }, {})
                    );
                }

                setSortField(allColumns[0]?.field || "");
            }
        } catch (error) {
            console.error("Detaylı Hata:", error.message);
            setErrorMessage(
                <>
                    <div>
                        <p>Veri yüklenirken bir hata oluştu.</p>
                        <p>Lütfen <strong>{endpoint}</strong> endpoint'ini kontrol edin veya daha sonra tekrar deneyin.</p>
                    </div>
                </>
            );
            setItems([]);
            setMeta(null);
            setColumns([]);
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

    const handleColumnVisibilityChange = (field, isVisible) => {
        setVisibleColumnKeys((prev) =>
            isVisible ? [...prev, field] : prev.filter((key) => key !== field)
        );
    };

    return (
        <div>
            {errorMessage && (
                <div data-type="DataTable">
                    <div className="mb-4 p-4 bg-red-100 text-red-700 border border-red-300">
                        <strong>Hata:</strong>
                        <span className="ml-2">
                            {errorMessage}
                        </span>
                    </div>
                </div>
            )}
            {columns.length > 0 ? (
                <>
                    <div data-type="DataTable">
                        <div data-type="DataTableWrapper" className="w-full bg-white border text-sm">
                            <div data-type="Head" className="relative z-20 flex items-center py-4 px-6">
                                <div data-type="Title" className="font-bold text-xl">Data Table</div>
                                {columnVisibilityToggle && (
                                    <ColumnVisibilityToggle
                                        columns={columns}
                                        visibleColumnKeys={visibleColumnKeys}
                                        onChange={handleColumnVisibilityChange}
                                    />
                                )}
                            </div>

                            <div data-type="Body" className="overflow-x-auto">
                                <Table
                                    items={items}
                                    columns={columns.filter((col) => visibleColumnKeys.includes(col.field))}
                                    handleSort={handleSort}
                                    sortField={sortField}
                                    sortOrder={sortOrder}
                                    filters={filters}
                                    setFilters={setFilters}
                                    setPage={setPage}
                                    filter={filter}
                                />
                            </div>

                            {(pagination.active || showControls.active) && (
                                <div data-type="Foot" className="overflow-hidden flex flex-wrap justify-between items-start gap-4 py-4 px-6">

                                    {pagination.active && meta && (
                                        <Pagination meta={meta} links={links} setPage={setPage} />
                                    )}

                                    {showControls.active && (
                                        <Controls
                                            limit={limit}
                                            setLimit={setLimit}
                                            setPage={setPage}
                                            options={showControls.options}
                                        />
                                    )}

                                </div>
                            )}
                        </div>
                    </div>
                </>
            ) : !errorMessage ? (
                <div data-type="DataTable" className="p-4">
                    <div data-type="DataTableWrapper" className="w-full bg-white border rounded-xl text-sm">
                        <p className="py-4 px-6">Yükleniyor...</p>
                    </div>
                </div>

            ) : null}
        </div>
    );
}
