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
        { "id": 1, "member": "Tyler Hero", "location": "Estonia", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/1.jpg" },
        { "id": 2, "member": "Jacob Jones", "location": "Ukraine", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/2.jpg" },
        { "id": 3, "member": "Leslie Alexander", "location": "India", "status": "Active", "avatar": "https://randomuser.me/api/portraits/women/3.jpg" },
        { "id": 4, "member": "Ronald Richards", "location": "Japan", "status": "Inactive", "avatar": "https://randomuser.me/api/portraits/men/4.jpg" },
        { "id": 5, "member": "Robert Fox", "location": "Germany", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/5.jpg" },
        { "id": 6, "member": "John Doe", "location": "France", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/6.jpg" },
        { "id": 7, "member": "Jane Doe", "location": "Italy", "status": "Active", "avatar": "https://randomuser.me/api/portraits/women/7.jpg" },
        { "id": 8, "member": "Alice Brown", "location": "Spain", "status": "Active", "avatar": "https://randomuser.me/api/portraits/women/8.jpg" },
        { "id": 8, "member": "Alice Brown", "location": "Turkey", "status": "Active", "avatar": "https://randomuser.me/api/portraits/women/8.jpg" },
        { "id": 9, "member": "Bob Smith", "location": "Portugal", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/9.jpg" },
        { "id": 10, "member": "Charlie Davis", "location": "Russia", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/10.jpg" },
        { "id": 11, "member": "David Wilson", "location": "Turkey", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/11.jpg" },
        { "id": 12, "member": "Eve Martinez", "location": "Brazil", "status": "Active", "avatar": "https://randomuser.me/api/portraits/women/12.jpg" },
        { "id": 13, "member": "Frank Garcia", "location": "Argentina", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/13.jpg" },
        { "id": 14, "member": "Grace Hernandez", "location": "Australia", "status": "Active", "avatar": "https://randomuser.me/api/portraits/women/14.jpg" },
        { "id": 15, "member": "Hannah Moore", "location": "Canada", "status": "Active", "avatar": "https://randomuser.me/api/portraits/women/15.jpg" },
        { "id": 16, "member": "Isaac Taylor", "location": "Mexico", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/16.jpg" },
        { "id": 17, "member": "Jack Anderson", "location": "Chile", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/17.jpg" },
        { "id": 18, "member": "Katie Thomas", "location": "Colombia", "status": "Active", "avatar": "https://randomuser.me/api/portraits/women/18.jpg" },
        { "id": 19, "member": "Liam White", "location": "Peru", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/19.jpg" },
        { "id": 20, "member": "Mia Harris", "location": "Venezuela", "status": "Active", "avatar": "https://randomuser.me/api/portraits/women/20.jpg" },
        { "id": 21, "member": "Noah Martin", "location": "Bolivia", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/21.jpg" },
        { "id": 22, "member": "Olivia Lee", "location": "Ecuador", "status": "Active", "avatar": "https://randomuser.me/api/portraits/women/22.jpg" },
        { "id": 23, "member": "Penelope Walker", "location": "Paraguay", "status": "Active", "avatar": "https://randomuser.me/api/portraits/women/23.jpg" },
        { "id": 24, "member": "Quinn Allen", "location": "Uruguay", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/24.jpg" },
        { "id": 25, "member": "Ryan Young", "location": "Guyana", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/25.jpg" },
        { "id": 26, "member": "Sophia Hall", "location": "Suriname", "status": "Active", "avatar": "https://randomuser.me/api/portraits/women/26.jpg" },
        { "id": 27, "member": "Thomas King", "location": "French Guiana", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/27.jpg" },
        { "id": 28, "member": "Ursula Wright", "location": "Falkland Islands", "status": "Active", "avatar": "https://randomuser.me/api/portraits/women/28.jpg" },
        { "id": 29, "member": "Vincent Scott", "location": "South Georgia and the South Sandwich Islands", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/29.jpg" },
        { "id": 30, "member": "Willow Adams", "location": "Saint Helena, Ascension and Tristan da Cunha", "status": "Active", "avatar": "https://randomuser.me/api/portraits/women/30.jpg" },
        { "id": 31, "member": "Xander Perez", "location": "Montserrat", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/31.jpg" },
        { "id": 32, "member": "Yara Cooper", "location": "Turks and Caicos Islands", "status": "Active", "avatar": "https://randomuser.me/api/portraits/women/32.jpg" },
        { "id": 33, "member": "Zane Foster", "location": "Cayman Islands", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/33.jpg" },
        { "id": 34, "member": "Alice Gonzales", "location": "Bermuda", "status": "Active", "avatar": "https://randomuser.me/api/portraits/women/34.jpg" },
        { "id": 35, "member": "Bob Reed", "location": "Anguilla", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/35.jpg" },
        { "id": 36, "member": "Charlie Carter", "location": "British Virgin Islands", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/36.jpg" },
        { "id": 37, "member": "David Murphy", "location": "United States Virgin Islands", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/37.jpg" },
        { "id": 38, "member": "Eve Barnes", "location": "Puerto Rico", "status": "Active", "avatar": "https://randomuser.me/api/portraits/women/38.jpg" },
        { "id": 39, "member": "Frank Ross", "location": "Jamaica", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/39.jpg" },
        { "id": 40, "member": "Hannah Powell", "location": "Haiti", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/40.jpg" },
        { "id": 41, "member": "Isaac White", "location": "Mexico", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/41.jpg" },
        { "id": 42, "member": "Isaac Ward", "location": "Dominican Republic", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/42.jpg" },
        { "id": 43, "member": "Jack Simmons", "location": "Bahamas", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/43.jpg" },
        { "id": 44, "member": "Katie Hughes", "location": "Belize", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/44.jpg" },
        { "id": 45, "member": "Liam Stewart", "location": "Costa Rica", "status": "Inactive", "avatar": "https://randomuser.me/api/portraits/men/45.jpg" },
        { "id": 46, "member": "Mia Sanders", "location": "El Salvador", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/46.jpg" },
        { "id": 47, "member": "Noah Peterson", "location": "Guatemala", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/47.jpg" },
        { "id": 48, "member": "Olivia Ward", "location": "Honduras", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/48.jpg" },
        { "id": 49, "member": "Penelope Evans", "location": "Nicaragua", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/49.jpg" },
        { "id": 50, "member": "Quinn Phillips", "location": "Panama", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/50.jpg" },
        { "id": 51, "member": "Ryan Martinez", "location": "Argentina", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/51.jpg" },
        { "id": 52, "member": "Sophia Garcia", "location": "Australia", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/52.jpg" },
        { "id": 53, "member": "Thomas Hernandez", "location": "Canada", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/53.jpg" },
        { "id": 54, "member": "Ursula Moore", "location": "Mexico", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/54.jpg" },
        { "id": 55, "member": "Vincent Taylor", "location": "Chile", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/55.jpg" },
        { "id": 56, "member": "Willow Anderson", "location": "Colombia", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/56.jpg" },
        { "id": 57, "member": "Xander Thomas", "location": "Peru", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/57.jpg" },
        { "id": 58, "member": "Yara White", "location": "Venezuela", "status": "Inactive", "avatar": "https://randomuser.me/api/portraits/men/58.jpg" },
        { "id": 59, "member": "Zane Harris", "location": "Bolivia", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/59.jpg" },
        { "id": 60, "member": "Alice Martin", "location": "Ecuador", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/60.jpg" },
        { "id": 61, "member": "Bob Lee", "location": "Paraguay", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/61.jpg" },
        { "id": 62, "member": "Charlie Walker", "location": "Uruguay", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/62.jpg" },
        { "id": 63, "member": "David Allen", "location": "Guyana", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/63.jpg" },
        { "id": 64, "member": "Eve Young", "location": "Suriname", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/64.jpg" },
        { "id": 65, "member": "Frank Hall", "location": "French Guiana", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/65.jpg" },
        { "id": 66, "member": "Grace King", "location": "Falkland Islands", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/66.jpg" },
        { "id": 67, "member": "Hannah Wright", "location": "South Georgia and the South Sandwich Islands", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/67.jpg" },
        { "id": 68, "member": "Isaac Scott", "location": "Saint Helena, Ascension and Tristan da Cunha", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/68.jpg" },
        { "id": 69, "member": "Jack Adams", "location": "Montserrat", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/69.jpg" },
        { "id": 70, "member": "Katie Perez", "location": "Turks and Caicos Islands", "status": "Inactive", "avatar": "https://randomuser.me/api/portraits/men/70.jpg" },
        { "id": 71, "member": "Liam Cooper", "location": "Cayman Islands", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/71.jpg" },
        { "id": 72, "member": "Mia Foster", "location": "Bermuda", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/72.jpg" },
        { "id": 73, "member": "Noah Gonzales", "location": "Anguilla", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/73.jpg" },
        { "id": 74, "member": "Olivia Reed", "location": "British Virgin Islands", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/74.jpg" },
        { "id": 75, "member": "Penelope Carter", "location": "United States Virgin Islands", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/75.jpg" },
        { "id": 76, "member": "Quinn Murphy", "location": "Puerto Rico", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/76.jpg" },
        { "id": 77, "member": "Ryan Barnes", "location": "Jamaica", "status": "Inactive", "avatar": "https://randomuser.me/api/portraits/men/77.jpg" },
        { "id": 78, "member": "Sophia Ross", "location": "Cuba", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/78.jpg" },
        { "id": 79, "member": "Thomas Bell", "location": "Haiti", "status": "Active", "avatar": "https://randomuser.me/api/portraits/men/79.jpg" },
        { "id": 80, "member": "Ursula Powell", "location": "Mexico", "status": "Inactive", "avatar": "https://randomuser.me/api/portraits/men/80.jpg" },
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
