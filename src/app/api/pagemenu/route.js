// src/app/api/docsmenu/route.js

export async function GET(req) {
    const docs = [
        {
            title: "CMS",
            children: [
                { title: "Anasayfa", url: "/dashbaord" },
                {
                    title: "Kategori",
                    children: [
                        { title: "Liste", url: "/category/list" },
                        { title: "Ekle", url: "/category/create" }
                    ]
                },
                {
                    title: "Haber",
                    children: [
                        { title: "Liste", url: "/news/list" },
                        { title: "Ekle", url: "/news/create" }
                    ]
                },
                {
                    title: "Foto Haber",
                    children: [
                        { title: "Liste", url: "/photonews/list" },
                        { title: "Ekle", url: "/photonews/create" }
                    ]
                },
                {
                    title: "Galeri Haber",
                    children: [
                        { title: "Liste", url: "/gallerynews/list" },
                        { title: "Ekle", url: "/gallerynews/create" }
                    ]
                },
                {
                    title: "Video Haber",
                    children: [
                        { title: "Liste", url: "/videonew/list" },
                        { title: "Ekle", url: "/videonew/create" }
                    ]
                },
                {
                    title: "Ajans Haber",
                    children: [
                        { title: "Liste", url: "/agencynews/list" },
                        { title: "Ekle", url: "/agencynews/create" }
                    ]
                },
                {
                    title: "Yerel Haber",
                    children: [
                        { title: "Liste", url: "/localnews/list" },
                        { title: "Ekle", url: "/localnews/create" }
                    ]
                },
                {
                    title: "Video",
                    children: [
                        { title: "Liste", url: "/video/list" },
                        { title: "Ekle", url: "/video/create" }
                    ]
                },
                {
                    title: "Video Kanal",
                    children: [
                        { title: "Liste", url: "/videochannel/list" },
                        { title: "Ekle", url: "/videochannel/create" }
                    ]
                },
                {
                    title: "Köşe Yazısı",
                    children: [
                        { title: "Liste", url: "/article/list" },
                        { title: "Ekle", url: "/article/create" }
                    ]
                },
                {
                    title: "Kişi/Olay/Kurum",
                    children: [
                        { title: "Liste", url: "/specialday/list" },
                        { title: "Ekle", url: "/specialday/create" }
                    ]
                },
                {
                    title: "Anket",
                    children: [
                        { title: "Liste", url: "/survey/list" },
                        { title: "Ekle", url: "/survey/create" }
                    ]
                },
                {
                    title: "Quiz",
                    children: [
                        { title: "Liste", url: "/quiz/list" },
                        { title: "Ekle", url: "/quiz/create" }
                    ]
                },
                {
                    title: "Story",
                    children: [
                        { title: "Liste", url: "/story/list" },
                        { title: "Ekle", url: "/story/create" }
                    ]
                },
                {
                    title: "Özel Gün",
                    children: [
                        { title: "Liste", url: "/specialday/list" },
                        { title: "Ekle", url: "/specialday/create" }
                    ]
                },
                {
                    title: "Yasal Metinler",
                    children: [
                        { title: "Liste", url: "/legalcontent/list" },
                        { title: "Ekle", url: "/legalcontent/create" }
                    ]
                },
                {
                    title: "Statik Sayfalar",
                    children: [
                        { title: "Liste", url: "/staticpage/list" },
                        { title: "Ekle", url: "/staticpage/create" }
                    ]
                },
            ],
        },
        {
            title: "TDK",
            children: [
                {
                    title: "Atasözleri",
                    children: [
                        { title: "Liste", url: "/atasozleri/list" },
                        { title: "Ekle", url: "/atasozleri/create" }
                    ]
                },
                {
                    title: "Deyimler",
                    children: [
                        { title: "Liste", url: "/deyimler/list" },
                        { title: "Ekle", url: "/deyimler/create" }
                    ]
                },
                {
                    title: "Eş Anlamlılar",
                    children: [
                        { title: "Liste", url: "/esanlamlilar/list" },
                        { title: "Ekle", url: "/esanlamlilar/create" }
                    ]
                },
                {
                    title: "Nasıl Yazılır",
                    children: [
                        { title: "Liste", url: "/nasilyazilir/list" },
                        { title: "Ekle", url: "/nasilyazilir/create" }
                    ]
                },
                {
                    title: "Ne Demek",
                    children: [
                        { title: "Liste", url: "/nedemek/list" },
                        { title: "Ekle", url: "/nedemek/create" }
                    ]
                }
            ],
        },
        {
            title: "Ansiklopedi",
            children: [
                {
                    title: "İslam Ansiklopedisi",
                    children: [
                        { title: "Liste", url: "/islamansiklopedisi/list" },
                        { title: "Ekle", url: "/islamansiklopedisi/create" }
                    ]
                },
                {
                    title: "Tübitak Ansiklopedisi",
                    children: [
                        { title: "Liste", url: "/tubitakansiklopedisi/list" },
                        { title: "Ekle", url: "/tubitakansiklopedisi/create" }
                    ]
                },
                {
                    title: "Fihrist",
                    children: [
                        { title: "Liste", url: "/fihrist/list" },
                        { title: "Ekle", url: "/fihrist/create" }
                    ]
                }
            ],
        },
        {
            title: "Kullanıcı",
            children: [
                {
                    title: "Yazar",
                    children: [
                        { title: "Liste", url: "/author/list" },
                        { title: "Ekle", url: "/author/create" }
                    ]
                },
                {
                    title: "Editör",
                    children: [
                        { title: "Liste", url: "/editor/list" },
                        { title: "Ekle", url: "/editor/create" }
                    ]
                }
            ],
        },
        {
            title: "Duyuru",
            children: [
                {
                    title: "Bildirim",
                    children: [
                        { title: "Liste", url: "/notification/list" },
                        { title: "Ekle", url: "/notification/create" }
                    ]
                },
                {
                    title: "E-Bülten",
                    children: [
                        { title: "Liste", url: "/newsletter/list" },
                        { title: "Ekle", url: "/newsletter/create" }
                    ]
                }
            ],
        },
    ];

    return new Response(JSON.stringify(docs), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}
