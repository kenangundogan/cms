// src/app/docs/table/page.js

"use client";
import { useEffect, useState } from "react";

export default function TablePage() {
    // -- TABLO VERİLERİ VE META BİLGİLERİ --
    const [items, setItems] = useState([]);
    const [meta, setMeta] = useState(null);

    // -- SAYFALAMA --
    const [page, setPage] = useState(1);

    // Kullanıcının seçeceği gösterim sayısı (limit). Varsayılan 10 yapalım.
    const [limit, setLimit] = useState(10);

    // -- SIRALAMA --
    const [sortField, setSortField] = useState("id");
    const [sortOrder, setSortOrder] = useState("asc"); // "asc" veya "desc"

    // -- FİLTRE (ARAMA) KUTULARI (her sütun için ayrı state) --
    const [filterID, setFilterID] = useState("");
    const [filterMember, setFilterMember] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const [filterStatus, setFilterStatus] = useState("");

    // -- VERİ ÇEKME FONKSİYONU --
    const fetchData = async () => {
        try {
            const params = new URLSearchParams();
            params.set("page", page);
            params.set("limit", limit);

            // sort parametresi: desc için başa '-' ekliyoruz
            const sortParam = sortOrder === "desc" ? `-${sortField}` : sortField;
            params.set("sort", sortParam);

            // Filtre parametreleri
            if (filterID.trim() !== "") {
                params.set("filter[id]", filterID.trim());
            }
            if (filterMember.trim() !== "") {
                params.set("filter[member]", filterMember.trim());
            }
            if (filterLocation.trim() !== "") {
                params.set("filter[location]", filterLocation.trim());
            }
            if (filterStatus.trim() !== "") {
                params.set("filter[status]", filterStatus.trim());
            }

            const res = await fetch(`/api/table?${params.toString()}`);
            if (!res.ok) {
                throw new Error("Veri çekilirken hata oluştu.");
            }

            const data = await res.json();
            setItems(data.items);
            setMeta(data.meta);
        } catch (err) {
            console.error("Hata:", err);
        }
    };

    // -- EFEKT: page, limit, sort veya filtre değiştiğinde veriyi çek --
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, limit, sortField, sortOrder, filterID, filterMember, filterLocation, filterStatus]);

    // -- SIRALAMA BAŞLIKLARINA TIKLANINCA SIRALAMA YÖNÜNÜ DEĞİŞTİRME --
    const handleSort = (field) => {
        if (sortField === field) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortOrder("asc");
        }
        setPage(1);
    };

    // -- SAYFALAMA BUTONLARI (<< < [1..5] > >>) --
    const handleFirstPage = () => {
        if (page !== 1) setPage(1);
    };
    const handleLastPage = () => {
        if (meta && page !== meta.last_page) setPage(meta.last_page);
    };
    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
    };
    const handleNextPage = () => {
        if (meta && page < meta.last_page) setPage(page + 1);
    };

    // Sayfa numaralarını oluşturma
    const renderPageNumbers = () => {
        if (!meta) return null;
        const totalPages = meta.last_page;
        const current = meta.current_page;
        const maxPagesToShow = 5;

        let startPage = Math.max(current - 2, 1);
        let endPage = startPage + maxPagesToShow - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(endPage - maxPagesToShow + 1, 1);
        }

        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages.map((p) => (
            <button
                key={p}
                onClick={() => setPage(p)}
                className={`mx-1 px-3 py-2 border rounded ${p === current
                    ? "bg-gray-300 border-gray-400 cursor-default"
                    : "bg-white hover:bg-gray-100 border-gray-300"
                    }`}
            >
                {p}
            </button>
        ));
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Üye Tablosu</h1>

            {/* GÖSTERİM SEÇİMİ */}
            <div className="flex items-center mb-4 gap-2">
                <span>Göster:</span>
                <select
                    className="border border-gray-300 rounded px-2 py-1"
                    value={limit}
                    onChange={(e) => {
                        setLimit(Number(e.target.value));
                        setPage(1); // Limit değişince ilk sayfaya dön
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

            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                        {/* 1. SATIR: SIRALAMA BAŞLIKLARI */}
                        <tr className="border-b">
                            <th
                                className="text-left py-2 px-4 cursor-pointer"
                                onClick={() => handleSort("id")}
                            >
                                <div className="flex items-center gap-1 select-none">
                                    <span>ID</span>
                                    {sortField === "id" && (
                                        <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
                                    )}
                                </div>
                            </th>
                            <th
                                className="text-left py-2 px-4 cursor-pointer"
                                onClick={() => handleSort("member")}
                            >
                                <div className="flex items-center gap-1 select-none">
                                    <span>Üye</span>
                                    {sortField === "member" && (
                                        <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
                                    )}
                                </div>
                            </th>
                            <th
                                className="text-left py-2 px-4 cursor-pointer"
                                onClick={() => handleSort("location")}
                            >
                                <div className="flex items-center gap-1 select-none">
                                    <span>Konum</span>
                                    {sortField === "location" && (
                                        <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
                                    )}
                                </div>
                            </th>
                            <th
                                className="text-left py-2 px-4 cursor-pointer"
                                onClick={() => handleSort("status")}
                            >
                                <div className="flex items-center gap-1 select-none">
                                    <span>Durum</span>
                                    {sortField === "status" && (
                                        <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
                                    )}
                                </div>
                            </th>
                        </tr>

                        {/* 2. SATIR: ARAMA KUTUCUKLARI (Ara...) */}
                        <tr className="border-b">
                            <th className="text-left py-2 px-4">
                                <input
                                    type="text"
                                    placeholder="Ara..."
                                    value={filterID}
                                    onChange={(e) => {
                                        setFilterID(e.target.value);
                                        setPage(1);
                                    }}
                                    className="w-full px-2 py-1 border border-gray-300 rounded"
                                />
                            </th>
                            <th className="text-left py-2 px-4">
                                <input
                                    type="text"
                                    placeholder="Ara..."
                                    value={filterMember}
                                    onChange={(e) => {
                                        setFilterMember(e.target.value);
                                        setPage(1);
                                    }}
                                    className="w-full px-2 py-1 border border-gray-300 rounded"
                                />
                            </th>
                            <th className="text-left py-2 px-4">
                                <input
                                    type="text"
                                    placeholder="Ara..."
                                    value={filterLocation}
                                    onChange={(e) => {
                                        setFilterLocation(e.target.value);
                                        setPage(1);
                                    }}
                                    className="w-full px-2 py-1 border border-gray-300 rounded"
                                />
                            </th>
                            <th className="text-left py-2 px-4">
                                <input
                                    type="text"
                                    placeholder="Ara..."
                                    value={filterStatus}
                                    onChange={(e) => {
                                        setFilterStatus(e.target.value);
                                        setPage(1);
                                    }}
                                    className="w-full px-2 py-1 border border-gray-300 rounded"
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id} className="border-b hover:bg-gray-50">
                                <td className="py-2 px-4">{item.id}</td>
                                <td className="py-2 px-4">{item.member}</td>
                                <td className="py-2 px-4">{item.location}</td>
                                <td className="py-2 px-4">{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SAYFALAMA KONTROLLERİ (<< < 1 2 3 > >>) */}
            {meta && (
                <div className="flex items-center gap-2 mt-4">
                    <button
                        onClick={handleFirstPage}
                        disabled={page === 1}
                        className={`px-3 py-2 border rounded ${page === 1
                            ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                            : "bg-white hover:bg-gray-100 border-gray-300"
                            }`}
                    >
                        &laquo;
                    </button>
                    <button
                        onClick={handlePrevPage}
                        disabled={page === 1}
                        className={`px-3 py-2 border rounded ${page === 1
                            ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                            : "bg-white hover:bg-gray-100 border-gray-300"
                            }`}
                    >
                        &lsaquo;
                    </button>

                    {/* Sayfa numaraları */}
                    {renderPageNumbers()}

                    <button
                        onClick={handleNextPage}
                        disabled={meta && page === meta.last_page}
                        className={`px-3 py-2 border rounded ${meta && page === meta.last_page
                            ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                            : "bg-white hover:bg-gray-100 border-gray-300"
                            }`}
                    >
                        &rsaquo;
                    </button>
                    <button
                        onClick={handleLastPage}
                        disabled={meta && page === meta.last_page}
                        className={`px-3 py-2 border rounded ${meta && page === meta.last_page
                            ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                            : "bg-white hover:bg-gray-100 border-gray-300"
                            }`}
                    >
                        &raquo;
                    </button>
                </div>
            )}

            {/* TOPLAM KAYIT / SAYFA BİLGİSİ (isteğe bağlı) */}
            {meta && (
                <div className="mt-4 text-sm text-gray-700">
                    <p>
                        Sayfa: {meta.current_page} / {meta.last_page}
                    </p>
                    <p>Toplam Kayıt: {meta.total}</p>
                </div>
            )}
        </div>
    );
}
