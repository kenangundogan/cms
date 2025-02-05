// src/app/api/content/writtenby/route.js

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
        { "id": 1, "name": "Kenan", "surname": "Gündoğan", "shortname": "KG", "fullname": "Kenan Gündoğan" },
        { "id": 2, "name": "Ahmet", "surname": "Yılmaz", "shortname": "AY", "fullname": "Ahmet Yılmaz" },
        { "id": 3, "name": "Mehmet", "surname": "Demir", "shortname": "MD", "fullname": "Mehmet Demir" },
        { "id": 4, "name": "Ayşe", "surname": "Kaya", "shortname": "AK", "fullname": "Ayşe Kaya" },
        { "id": 5, "name": "Fatma", "surname": "Çelik", "shortname": "FÇ", "fullname": "Fatma Çelik" },
        { "id": 6, "name": "Ali", "surname": "Şahin", "shortname": "AŞ", "fullname": "Ali Şahin" },
        { "id": 7, "name": "Emine", "surname": "Yıldız", "shortname": "EY", "fullname": "Emine Yıldız" },
        { "id": 8, "name": "Mustafa", "surname": "Öztürk", "shortname": "MÖ", "fullname": "Mustafa Öztürk" },
        { "id": 9, "name": "Hüseyin", "surname": "Aydın", "shortname": "HA", "fullname": "Hüseyin Aydın" },
        { "id": 10, "name": "Zeynep", "surname": "Arslan", "shortname": "ZA", "fullname": "Zeynep Arslan" },
        { "id": 11, "name": "Murat", "surname": "Polat", "shortname": "MP", "fullname": "Murat Polat" },
        { "id": 12, "name": "Elif", "surname": "Koç", "shortname": "EK", "fullname": "Elif Koç" },
        { "id": 13, "name": "Hasan", "surname": "Kurt", "shortname": "HK", "fullname": "Hasan Kurt" },
        { "id": 14, "name": "Hakan", "surname": "Yavuz", "shortname": "HY", "fullname": "Hakan Yavuz" },
        { "id": 15, "name": "Gül", "surname": "Kara", "shortname": "GK", "fullname": "Gül Kara" },
        { "id": 16, "name": "İbrahim", "surname": "Aksoy", "shortname": "İA", "fullname": "İbrahim Aksoy" },
        { "id": 17, "name": "Seda", "surname": "Çetin", "shortname": "SÇ", "fullname": "Seda Çetin" },
        { "id": 18, "name": "Yusuf", "surname": "Eren", "shortname": "YE", "fullname": "Yusuf Eren" },
        { "id": 19, "name": "Serkan", "surname": "Bozkurt", "shortname": "SB", "fullname": "Serkan Bozkurt" },
        { "id": 20, "name": "Derya", "surname": "Güneş", "shortname": "DG", "fullname": "Derya Güneş" },
        { "id": 21, "name": "Okan", "surname": "Kılıç", "shortname": "OK", "fullname": "Okan Kılıç" },
        { "id": 22, "name": "Büşra", "surname": "Yılmaz", "shortname": "BY", "fullname": "Büşra Yılmaz" },
        { "id": 23, "name": "Eren", "surname": "Çakır", "shortname": "EÇ", "fullname": "Eren Çakır" },
        { "id": 24, "name": "Gizem", "surname": "Demirci", "shortname": "GD", "fullname": "Gizem Demirci" },
        { "id": 25, "name": "Burak", "surname": "Kaya", "shortname": "BK", "fullname": "Burak Kaya" },
        { "id": 26, "name": "Merve", "surname": "Özdemir", "shortname": "MÖ", "fullname": "Merve Özdemir" },
        { "id": 27, "name": "Cem", "surname": "Yıldırım", "shortname": "CY", "fullname": "Cem Yıldırım" },
        { "id": 28, "name": "Sinem", "surname": "Acar", "shortname": "SA", "fullname": "Sinem Acar" },
        { "id": 29, "name": "Volkan", "surname": "Kurt", "shortname": "VK", "fullname": "Volkan Kurt" },
        { "id": 30, "name": "Esra", "surname": "Şimşek", "shortname": "EŞ", "fullname": "Esra Şimşek" },
        { "id": 31, "name": "Oğuz", "surname": "Yılmaz", "shortname": "OY", "fullname": "Oğuz Yılmaz" },
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
            url: currentPage > 1 ? `/api/content/writtenby?page=${currentPage - 1}` : null,
            label: "Previous",
            active: false,
        });

        // Sayfa numaraları
        if (startPage > 1) {
            links.push({
                url: `/api/content/writtenby?page=1`,
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
                url: `/api/content/writtenby?page=${i}`,
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
                url: `/api/content/writtenby?page=${totalPages}`,
                label: `${totalPages}`,
                active: currentPage === totalPages,
            });
        }

        // Next link
        links.push({
            url: currentPage < totalPages ? `/api/content/writtenby?page=${currentPage + 1}` : null,
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
                path: "/api/content/writtenby",
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
