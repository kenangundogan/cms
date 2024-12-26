// src/app/components/ui/table/TableContainer.js

import { useEffect, useState } from "react";
import Table from "@/app/components/ui/table/Table";
import Pagination from "@/app/components/ui/table/Pagination";
import Controls from "@/app/components/ui/table/Controls";
import ColumnVisibilityToggle from "@/app/components/ui/table/ColumnVisibilityToggle";

export default function TableContainer({
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
                    filterable: true,
                }));

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

    const handleColumnVisibilityChange = (field, isVisible) => {
        setVisibleColumnKeys((prev) =>
            isVisible ? [...prev, field] : prev.filter((key) => key !== field)
        );
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                {columnVisibilityToggle && columns.length > 0 && (
                    <ColumnVisibilityToggle
                        columns={columns}
                        visibleColumnKeys={visibleColumnKeys}
                        onChange={handleColumnVisibilityChange}
                    />
                )}
            </div>
            {columns.length > 0 ? (
                <>
                    <div className="">
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
                        <div className="flex flex-wrap justify-between items-start border rounded-sm border-t-0 px-4">
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
                    </div>
                </>
            ) : (
                <p>Yükleniyor...</p>
            )}
        </div>
    );
}
