// src/app/api/crypto/route.js

export async function GET(req) {
    const url = new URL(req.url);

    // Sayfalama parametreleri
    const page = parseInt(url.searchParams.get("page")) || 1; // Varsayılan sayfa 1
    const perPage = parseInt(url.searchParams.get("limit")) || 8; // Varsayılan sayfa başına öğe sayısı 8

    // Filtreleme parametreleri
    const filters = {};
    url.searchParams.forEach((value, key) => {
        const filterMatch = key.match(/^filter\[(.+)\]$/);
        if (filterMatch) {
            const field = filterMatch[1];
            filters[field] = value.split(',').map(v => v.trim().toLowerCase());
        }
    });

    // Alan seçimi parametresi
    const fieldsParam = url.searchParams.get("fields");
    const fields = fieldsParam ? fieldsParam.split(',').map(f => f.trim()) : null;

    // Sıralama parametresi
    const sortParam = url.searchParams.get("sort");
    const sortFields = sortParam
        ? sortParam.split(',').map(field => {
            field = field.trim();
            return field.startsWith('-') ? { field: field.substring(1), order: 'desc' } : { field, order: 'asc' };
        })
        : [];

    // Tüm veriler
    let allItems = [
        { "id": 1, "name": "Bitcoin", "shortname": "BTC"},
        { "id": 2, "name": "Ethereum", "shortname": "ETH"},
        { "id": 3, "name": "Ripple", "shortname": "XRP"},
        { "id": 4, "name": "Litecoin", "shortname": "LTC"},
        { "id": 5, "name": "Cardano", "shortname": "ADA"},
        { "id": 6, "name": "Polkadot", "shortname": "DOT"},
        { "id": 7, "name": "Bitcoin Cash", "shortname": "BCH"},
        { "id": 8, "name": "Chainlink", "shortname": "LINK"},
        { "id": 9, "name": "Stellar", "shortname": "XLM"},
        { "id": 10, "name": "Binance Coin", "shortname": "BNB"},
        { "id": 11, "name": "Tether", "shortname": "USDT"},
        { "id": 12, "name": "Monero", "shortname": "XMR"},
        { "id": 13, "name": "Tron", "shortname": "TRX"},
        { "id": 14, "name": "Dogecoin", "shortname": "DOGE"},
        { "id": 15, "name": "VeChain", "shortname": "VET"},
        { "id": 16, "name": "EOS", "shortname": "EOS"},
        { "id": 17, "name": "Tezos", "shortname": "XTZ"},
        { "id": 18, "name": "Neo", "shortname": "NEO"},
        { "id": 19, "name": "Cosmos", "shortname": "ATOM"},
        { "id": 20, "name": "Avalanche", "shortname": "AVAX"},
        { "id": 21, "name": "Dash", "shortname": "DASH"},
        { "id": 22, "name": "Zcash", "shortname": "ZEC"},
        { "id": 23, "name": "Ethereum Classic", "shortname": "ETC"},
        { "id": 24, "name": "Maker", "shortname": "MKR"},
        { "id": 25, "name": "Compound", "shortname": "COMP"},
        { "id": 26, "name": "Aave", "shortname": "AAVE"},
        { "id": 27, "name": "Synthetix", "shortname": "SNX"},
        { "id": 28, "name": "Yearn Finance", "shortname": "YFI"},
        { "id": 29, "name": "Uniswap", "shortname": "UNI"},
        { "id": 30, "name": "SushiSwap", "shortname": "SUSHI"},
        { "id": 31, "name": "Curve DAO Token", "shortname": "CRV"},
        { "id": 32, "name": "Balancer", "shortname": "BAL"},
        { "id": 33, "name": "Ren", "shortname": "REN"},
        { "id": 34, "name": "Ocean Protocol", "shortname": "OCEAN"},
        { "id": 35, "name": "Band Protocol", "shortname": "BAND"},
        { "id": 36, "name": "Orchid", "shortname": "OXT"},
        { "id": 37, "name": "Numeraire", "shortname": "NMR"},
        { "id": 38, "name": "Celo", "shortname": "CELO"},
        { "id": 39, "name": "Reserve Rights", "shortname": "RSR"},
        { "id": 40, "name": "The Graph", "shortname": "GRT"},
        { "id": 41, "name": "Chiliz", "shortname": "CHZ"},
        { "id": 42, "name": "Decentraland", "shortname": "MANA"},
        { "id": 43, "name": "Basic Attention Token", "shortname": "BAT"},
        { "id": 44, "name": "Enjin Coin", "shortname": "ENJ"}
    ];

    // 1. Filtreleme
    if (Object.keys(filters).length > 0) {
        allItems = allItems.filter(item => {
            return Object.keys(filters).every(field => {
                if (!item[field]) return false;
                const itemValue = item[field].toString().toLowerCase();
                return filters[field].some(filterValue => itemValue.includes(filterValue));
            });
        });
    }

    // 2. Sıralama
    if (sortFields.length > 0) {
        allItems.sort((a, b) => {
            for (let sortField of sortFields) {
                const { field, order } = sortField;
                if (!a[field] || !b[field]) continue;

                const aValue = a[field].toString().toLowerCase();
                const bValue = b[field].toString().toLowerCase();

                if (aValue < bValue) return order === 'asc' ? -1 : 1;
                if (aValue > bValue) return order === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }

    // 3. Sayfalama
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    let paginatedItems = allItems.slice(startIndex, endIndex);

    // 4. Alan seçimi
    if (fields) {
        paginatedItems = paginatedItems.map(item => {
            const selected = {};
            fields.forEach(field => {
                if (item.hasOwnProperty(field)) {
                    selected[field] = item[field];
                }
            });
            return selected;
        });
    }

    // 5. Toplam sayfa sayısını hesapla
    const totalPages = Math.ceil(allItems.length / perPage);

    // 6. Sayfalama linklerini oluştur
    const createPaginationLinks = (currentPage, totalPages) => {
        const links = [];
        const maxPagesToShow = 5; // Aynı anda gösterilecek maksimum sayfa sayısı
        let startPage = Math.max(currentPage - 2, 1);
        let endPage = startPage + maxPagesToShow - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(endPage - maxPagesToShow + 1, 1);
        }

        // Previous link
        links.push({
            url: currentPage > 1 ? `/api/crypto?page=${currentPage - 1}` : null,
            label: "Previous",
            active: false,
        });

        // Sayfa numaraları
        if (startPage > 1) {
            links.push({
                url: `/api/crypto?page=1`,
                label: "1",
                active: currentPage === 1,
            });
            if (startPage > 2) {
                links.push({
                    url: null,
                    label: "...",
                    active: false,
                });
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            links.push({
                url: `/api/crypto?page=${i}`,
                label: `${i}`,
                active: currentPage === i,
            });
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                links.push({
                    url: null,
                    label: "...",
                    active: false,
                });
            }
            links.push({
                url: `/api/crypto?page=${totalPages}`,
                label: `${totalPages}`,
                active: currentPage === totalPages,
            });
        }

        // Next link
        links.push({
            url: currentPage < totalPages ? `/api/crypto?page=${currentPage + 1}` : null,
            label: "Next",
            active: false,
        });

        return links;
    };

    const links = createPaginationLinks(page, totalPages);

    // 7. JSON cevabı
    return new Response(
        JSON.stringify({
            data: paginatedItems,
            meta: {
                current_page: page,
                from: startIndex + 1,
                last_page: totalPages,
                path: "/api/crypto",
                per_page: perPage,
                to: endIndex > allItems.length ? allItems.length : endIndex,
                total: allItems.length
            },
            links
        }),
        {
            headers: { "Content-Type": "application/json" },
            status: 200
        }
    );
}
