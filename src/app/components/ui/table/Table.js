'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';

// TableContext'i dışa aktar
const TableContext = createContext();

const Table = ({ children, data }) => {
    const [originalData] = useState(data); // API'den gelen orijinal veriler
    const [filteredData, setFilteredData] = useState(data); // Filtrelenmiş veriler
    const [sortedData, setSortedData] = useState(data); // Filtre ve sıralama sonrası gösterilecek veriler
    const [sortField, setSortField] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' veya 'desc'

    // Filtreleme işlemi
    const handleFilter = (field, value) => {
        let updatedData = originalData;

        if (value) {
            updatedData = originalData.filter((item) =>
                String(item[field]).toLowerCase().includes(value.toLowerCase())
            );
        }

        setFilteredData(updatedData); // Filtrelenmiş veriler
        applySorting(updatedData, sortField, sortOrder); // Sıralama işlemini uygula
    };

    // Sıralama işlemi
    const handleSort = (field) => {
        const newOrder = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(newOrder);

        applySorting(filteredData, field, newOrder); // Filtrelenmiş veriler üzerinde sıralama uygula
    };

    // Sıralama işlemini uygula
    const applySorting = (dataToSort, field, order) => {
        if (!field) {
            setSortedData(dataToSort); // Sıralama yapılmadıysa olduğu gibi bırak
            return;
        }

        const sorted = [...dataToSort].sort((a, b) => {
            if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
            if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
            return 0;
        });

        setSortedData(sorted);
    };

    // İlk render ve filtreleme/sıralama sonrası tabloyu güncelle
    useEffect(() => {
        setSortedData(filteredData);
    }, [filteredData]);

    return (
        <TableContext.Provider
            value={{ handleFilter, handleSort, sortField, sortOrder, sortedData }}
        >
            <div data-type="Table" className="w-full overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    {children}
                </table>
            </div>
        </TableContext.Provider>
    );
};

Table.Head = ({ children }) => {
    return (
        <thead data-type="Table.Head" className="bg-gray-100">
            {children}
        </thead>
    );
};

Table.Body = ({ children }) => {
    const { sortedData } = useContext(TableContext); // sortedData'yı context'ten al

    return <tbody data-type="Table.Body">{children(sortedData)}</tbody>;
};

Table.Row = ({ children }) => {
    return (
        <tr data-type="Table.Row" className="border-b border-gray-300">
            {children}
        </tr>
    );
};

Table.HeadCell = ({ children, sortable = false, filter = false, field }) => {
    const { handleSort, handleFilter, sortField, sortOrder } = useContext(TableContext);

    const isActive = sortField === field;

    return (
        <th
            data-type="Table.HeadCell"
            className="p-4 text-left font-bold border-b-2 bg-gray-50 align-top"
        >
            {/* Sütun başlığı */}
            <div
                className={`flex items-center ${
                    sortable ? 'cursor-pointer select-none hover:underline' : ''
                }`}
                onClick={() => sortable && handleSort(field)}
            >
                {children}
                {sortable && (
                    <span className="ml-2">
                        {isActive ? (
                            sortOrder === 'asc' ? (
                                <span className="text-blue-500">↑</span>
                            ) : (
                                <span className="text-blue-500">↓</span>
                            )
                        ) : (
                            <span className="text-gray-400">⇅</span>
                        )}
                    </span>
                )}
            </div>

            {/* Filtreleme alanı */}
            {filter && (
                <div className="mt-2">
                    <input
                        type="text"
                        className="w-full p-1 border border-gray-300 rounded"
                        placeholder={`Ara...`}
                        onChange={(e) => handleFilter(field, e.target.value)}
                    />
                </div>
            )}
        </th>
    );
};

Table.BodyCell = ({ children }) => {
    return (
        <td data-type="Table.BodyCell" className="p-4 text-left">
            {children}
        </td>
    );
};

Table.Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const maxVisiblePages = 5; // Ekranda maksimum 5 sayfa numarası gösterilecek

    // Sayfa numaralarını hesaplama
    const getVisiblePages = () => {
        const pages = [];
        const half = Math.floor(maxVisiblePages / 2);

        let start = Math.max(1, currentPage - half);
        let end = Math.min(totalPages, start + maxVisiblePages - 1);

        if (end - start + 1 < maxVisiblePages) {
            start = Math.max(1, end - maxVisiblePages + 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    const visiblePages = getVisiblePages();

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="flex justify-center items-center gap-2 p-4">
            {/* İlk Sayfaya Git */}
            <button
                onClick={() => goToPage(1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                «
            </button>
            {/* Önceki Sayfa */}
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                ‹
            </button>
            {/* Sayfa Numaraları */}
            {visiblePages.map((page) => (
                <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-1 border rounded ${
                        page === currentPage ? 'bg-blue-100 font-bold' : 'hover:bg-gray-100'
                    }`}
                >
                    {page}
                </button>
            ))}
            {/* Sonraki Sayfa */}
            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                ›
            </button>
            {/* Son Sayfaya Git */}
            <button
                onClick={() => goToPage(totalPages)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                »
            </button>
        </div>
    );
};

export { TableContext }; // TableContext'i dışa aktar
export default Table;
