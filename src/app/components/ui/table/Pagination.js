export default function Pagination({ meta, setPage }) {
    if (!meta) return null;

    const { current_page, last_page, total } = meta;
    const maxVisiblePages = 5;

    // Sayfa aralığını hesapla
    const startPage = Math.max(1, current_page - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(last_page, startPage + maxVisiblePages - 1);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div className="flex flex-col items-center gap-2 mt-4">
            {/* Sayfa ve toplam kayıt bilgileri */}
            <div className="text-sm text-gray-600">
                Sayfa: {current_page} / {last_page} | Toplam Kayıt: {total}
            </div>

            {/* Sayfa numaraları */}
            <div className="flex justify-center gap-2">
                {/* İlk sayfaya git */}
                <button
                    onClick={() => setPage(1)}
                    disabled={current_page === 1}
                    className={`px-3 py-2 border rounded ${current_page === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"}`}
                >
                    &laquo;
                </button>

                {/* Önceki sayfaya git */}
                <button
                    onClick={() => setPage(current_page - 1)}
                    disabled={current_page === 1}
                    className={`px-3 py-2 border rounded ${current_page === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"}`}
                >
                    &lsaquo;
                </button>

                {/* Sayfa numaralarını listele */}
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => setPage(page)}
                        className={`px-3 py-2 border rounded ${page === current_page ? "bg-blue-100 text-blue-600 font-bold cursor-default" : "hover:bg-gray-100"}`}
                    >
                        {page}
                    </button>
                ))}

                {/* Sonraki sayfaya git */}
                <button
                    onClick={() => setPage(current_page + 1)}
                    disabled={current_page === last_page}
                    className={`px-3 py-2 border rounded ${current_page === last_page ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"}`}
                >
                    &rsaquo;
                </button>

                {/* Son sayfaya git */}
                <button
                    onClick={() => setPage(last_page)}
                    disabled={current_page === last_page}
                    className={`px-3 py-2 border rounded ${current_page === last_page ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"}`}
                >
                    &raquo;
                </button>
            </div>
        </div>
    );
}
