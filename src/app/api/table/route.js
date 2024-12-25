// src/app/api/table/route.js

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
        { id: 1, member: "Tyler Hero", location: "Estonia", status: "Active" },
        { id: 2, member: "Jacob Jones", location: "Ukraine", status: "Active" },
        { id: 3, member: "Leslie Alexander", location: "India", status: "Active" },
        { id: 4, member: "Ronald Richards", location: "Japan", status: "Inactive" },
        { id: 5, member: "Robert Fox", location: "Germany", status: "Active" },
        { id: 6, member: "John Doe", location: "France", status: "Active" },
        { id: 7, member: "Jane Doe", location: "Italy", status: "Active" },
        { id: 8, member: "Alice Johnson", location: "Spain", status: "Active" },
        { id: 9, member: "Bob Johnson", location: "Portugal", status: "Active" },
        { id: 10, member: "Charlie Johnson", location: "Russia", status: "Active" },
        { id: 11, member: "David Johnson", location: "Turkey", status: "Active" },
        { id: 12, member: "Eve Johnson", location: "Brazil", status: "Active" },
        { id: 13, member: "Frank Johnson", location: "Argentina", status: "Active" },
        { id: 14, member: "Grace Johnson", location: "Australia", status: "Active" },
        { id: 15, member: "Hannah Johnson", location: "Canada", status: "Active" },
        { id: 16, member: "Isaac Johnson", location: "Mexico", status: "Active" },
        { id: 17, member: "Jack Johnson", location: "Chile", status: "Active" },
        { id: 18, member: "Katie Johnson", location: "Colombia", status: "Active" },
        { id: 19, member: "Liam Johnson", location: "Peru", status: "Active" },
        { id: 20, member: "Mia Johnson", location: "Venezuela", status: "Active" },
        { id: 21, member: "Noah Johnson", location: "Bolivia", status: "Active" },
        { id: 22, member: "Olivia Johnson", location: "Ecuador", status: "Active" },
        { id: 23, member: "Penelope Johnson", location: "Paraguay", status: "Active" },
        { id: 24, member: "Quinn Johnson", location: "Uruguay", status: "Active" },
        { id: 25, member: "Ryan Johnson", location: "Guyana", status: "Active" },
        { id: 26, member: "Sophia Johnson", location: "Suriname", status: "Active" },
        { id: 27, member: "Thomas Johnson", location: "French Guiana", status: "Active" },
        { id: 28, member: "Ursula Johnson", location: "Falkland Islands", status: "Active" },
        { id: 29, member: "Vincent Johnson", location: "South Georgia and the South Sandwich Islands", status: "Active" },
        { id: 30, member: "Willow Johnson", location: "Saint Helena, Ascension and Tristan da Cunha", status: "Active" },
        { id: 31, member: "Xander Johnson", location: "Montserrat", status: "Active" },
        { id: 32, member: "Yara Johnson", location: "Turks and Caicos Islands", status: "Active" },
        { id: 33, member: "Zane Johnson", location: "Cayman Islands", status: "Active" },
        { id: 34, member: "Alice Johnson", location: "Bermuda", status: "Active" },
        { id: 35, member: "Bob Johnson", location: "Anguilla", status: "Active" },
        { id: 36, member: "Charlie Johnson", location: "British Virgin Islands", status: "Active" },
        { id: 37, member: "David Johnson", location: "United States Virgin Islands", status: "Active" },
        { id: 38, member: "Eve Johnson", location: "Puerto Rico", status: "Active" },
        { id: 39, member: "Frank Johnson", location: "Jamaica", status: "Active" },
        { id: 40, member: "Grace Johnson", location: "Cuba", status: "Active" },
        { id: 41, member: "Hannah Johnson", location: "Haiti", status: "Active" },
        { id: 42, member: "Isaac Johnson", location: "Dominican Republic", status: "Active" },
        { id: 43, member: "Jack Johnson", location: "Bahamas", status: "Active" },
        { id: 44, member: "Katie Johnson", location: "Belize", status: "Active" },
        { id: 45, member: "Liam Johnson", location: "Costa Rica", status: "Active" },
        { id: 46, member: "Mia Johnson", location: "El Salvador", status: "Active" },
        { id: 47, member: "Noah Johnson", location: "Guatemala", status: "Active" },
        { id: 48, member: "Olivia Johnson", location: "Honduras", status: "Active" },
        { id: 49, member: "Penelope Johnson", location: "Nicaragua", status: "Active" },
        { id: 50, member: "Quinn Johnson", location: "Panama", status: "Active" }

    ];

    // 1. Filtreleme Uygulama (İçerik içerisinde geçen kelime ile eşleşme)
    if (Object.keys(filters).length > 0) {
        allItems = allItems.filter(item => {
            return Object.keys(filters).every(field => {
                if (!item[field]) return false;
                const itemValue = item[field].toString().toLowerCase();
                // Her bir filtre değeri için itemValue içinde geçip geçmediğini kontrol et
                return filters[field].some(filterValue => itemValue.includes(filterValue));
            });
        });
    }

    // 2. Sıralama Uygulama
    if (sortFields.length > 0) {
        allItems.sort((a, b) => {
            for (let sortField of sortFields) {
                const { field, order } = sortField;
                if (!a[field] || !b[field]) continue;

                const aValue = a[field].toString().toLowerCase();
                const bValue = b[field].toString().toLowerCase();

                if (aValue < bValue) return order === 'asc' ? -1 : 1;
                if (aValue > bValue) return order === 'asc' ? 1 : -1;
                // Eğer eşitse, bir sonraki sortField'a geç
            }
            return 0; // Tüm sortField'lar eşitse
        });
    }

    // 3. Sayfalama için başlangıç ve bitiş indeksi
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    // 4. İlgili sayfa verilerini al
    let paginatedItems = allItems.slice(startIndex, endIndex);

    // 5. Alan seçimi
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

    // 6. Toplam sayfa sayısını hesapla
    const totalPages = Math.ceil(allItems.length / perPage);

    // 7. Sayfalama bilgileri
    const meta = {
        current_page: page,
        from: startIndex + 1,
        last_page: totalPages,
        path: "/api/table",
        per_page: perPage,
        to: endIndex > allItems.length ? allItems.length : endIndex,
        total: allItems.length
    };

    // 8. Linkler
    const links = {
        first: `/api/table?page=1&limit=${perPage}`,
        last: `/api/table?page=${totalPages}&limit=${perPage}`,
        prev: page > 1 ? `/api/table?page=${page - 1}&limit=${perPage}` : null,
        next: page < totalPages ? `/api/table?page=${page + 1}&limit=${perPage}` : null
    };

    // 9. JSON cevabı
    return new Response(
        JSON.stringify({
            items: paginatedItems,
            meta,
            links
        }),
        {
            headers: { "Content-Type": "application/json" },
            status: 200
        }
    );
}
