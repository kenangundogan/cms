export default function Pagination({ meta, links, setPage }) {
    if (!meta) return null;
    console.log(links);
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
        <div className="flex flex-col items-end">

            {/* Sayfa numaraları */}
            <div className="flex justify-start mb-2 gap-2 *:px-3 *:py-2 *:border *:rounded-sm">
                {/* İlk sayfaya git */}
                <button
                    onClick={() => setPage(1)}
                    disabled={current_page === 1 || !links?.first}
                    className={`${current_page === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"}`}
                >
                    &laquo;
                </button>

                {/* Önceki sayfaya git */}
                <button
                    onClick={() => setPage(current_page - 1)}
                    disabled={current_page === 1 || !links?.prev}
                    className={`${current_page === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"}`}
                >
                    &lsaquo;
                </button>

                {/* Sayfa numaralarını listele */}
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => setPage(page)}
                        className={`${page === current_page ? "bg-blue-100 text-blue-600 font-bold cursor-default" : "hover:bg-gray-100"}`}
                    >
                        {page}
                    </button>
                ))}

                {/* Sonraki sayfaya git */}
                <button
                    onClick={() => setPage(current_page + 1)}
                    disabled={current_page === last_page || !links?.next}
                    className={`${current_page === last_page ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"}`}
                >
                    &rsaquo;
                </button>

                {/* Son sayfaya git */}
                <button
                    onClick={() => setPage(last_page)}
                    disabled={current_page === last_page || !links?.last}
                    className={`${current_page === last_page ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"}`}
                >
                    &raquo;
                </button>
            </div>
            {/* Sayfa ve toplam kayıt bilgileri */}
            <div className="text-xs text-gray-600">
                Sayfa: {current_page} / {last_page} | Toplam Kayıt: {total}
            </div>
        </div>
    );
}
