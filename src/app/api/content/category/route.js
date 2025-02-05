// src/app/api/content/category/route.js

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
        { "id": 1, "name": "Gündem", "slug": "gundem" },
        { "id": 2, "name": "Ekonomi", "slug": "ekonomi" },
        { "id": 3, "name": "Spor", "slug": "spor" },
        { "id": 4, "name": "Dünya", "slug": "dunya" },
        { "id": 5, "name": "Teknoloji", "slug": "teknoloji" },
        { "id": 6, "name": "Magazin", "slug": "magazin" },
        { "id": 7, "name": "Eğitim", "slug": "egitim" },
        { "id": 8, "name": "Sağlık", "slug": "saglik" }
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
            url: currentPage > 1 ? `/api/content/category?page=${currentPage - 1}` : null,
            label: "Previous",
            active: false,
        });

        // Sayfa numaraları
        if (startPage > 1) {
            links.push({
                url: `/api/content/category?page=1`,
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
                url: `/api/content/category?page=${i}`,
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
                url: `/api/content/category?page=${totalPages}`,
                label: `${totalPages}`,
                active: currentPage === totalPages,
            });
        }

        // Next link
        links.push({
            url: currentPage < totalPages ? `/api/content/category?page=${currentPage + 1}` : null,
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
                path: "/api/content/category",
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
