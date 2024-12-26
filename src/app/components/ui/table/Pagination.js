export default function Pagination({ meta, links, setPage }) {
    if (!meta || !links) return null;

    const getLabelContent = (label) => {
        const normalizedLabel = label.toLowerCase();
        if (normalizedLabel.includes("previous") || normalizedLabel.includes("prev")) {
            return "«"; // Geri yön ikonu
        }
        if (normalizedLabel.includes("next")) {
            return "»"; // İleri yön ikonu
        }
        if (normalizedLabel.includes("first")) {
            return "⇤"; // İlk sayfa ikonu (opsiyonel)
        }
        if (normalizedLabel.includes("last")) {
            return "⇥"; // Son sayfa ikonu (opsiyonel)
        }
        if (normalizedLabel.includes("...")) {
            return "…"; // Statik atlama göstergesi
        }
        return label; // Diğerleri için varsayılan label
    };

    return (
        <div className="flex flex-col lg:items-end gap-2">
            {/* Sayfa ve toplam kayıt bilgileri */}
            <div className="text-xs text-gray-600">
                Sayfa: {meta.current_page} / {meta.last_page} | Toplam Kayıt: {meta.total}
            </div>

            {/* Sayfa numaraları */}
            <div className="flex justify-center gap-2">
                {links.map((link, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            link.url &&
                            setPage(new URLSearchParams(link.url.split('?')[1]).get('page'))
                        }
                        disabled={!link.url || link.active || link.label.includes("...")}
                        className={`px-3 py-2 border rounded ${
                            link.active
                                ? "bg-blue-100 text-blue-600 font-bold cursor-default"
                                : link.label.includes("...")
                                ? "cursor-default text-gray-400"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        {getLabelContent(link.label)}
                    </button>
                ))}
            </div>
        </div>
    );
}
