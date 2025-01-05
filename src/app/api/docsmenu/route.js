// src/app/api/docsmenu/route.js

export async function GET(req) {
    const docs = [
        { title: "Box", url: "/docs/box" },
        { title: "Breadcrumb", url: "/docs/breadcrumb" },
        { title: "Data Table", url: "/docs/datatable" },
        { title: "Base Table", url: "/docs/table" },
        { title: "Tabs", url: "/docs/tabs" },
        { title: "Accordion", url: "/docs/accordion" },
        { title: "Treeview", url: "/docs/treeview" },
        { title: "Modal", url: "/docs/modal" },
        { title: "Drawer", url: "/docs/drawer" },
        { title: "Alert", url: "/docs/alert" },
        { title: "Badge", url: "/docs/badge" },
        { title: "Card", url: "/docs/card" },
        { title: "Dropdown", url: "/docs/dropdown" },
        { title: "List Group", url: "/docs/list-group" },
        { title: "Nav", url: "/docs/nav" },
        { title: "Pagination", url: "/docs/pagination" },
        { title: "Progress", url: "/docs/progress" },
        { title: "Spinner", url: "/docs/spinner" },
        { title: "Toast", url: "/docs/toast" },
        { title: "Tooltip", url: "/docs/tooltip" },
        {
            title: "Form",
            url: "/docs/form",
            children: [
                { title: "Button", url: "/docs/button" },
                { title: "Text Field", url: "/docs/textfield" },
                { title: "Checkbox", url: "/docs/checkbox" },
                { title: "Switch", url: "/docs/switch" },
                { title: "Radio", url: "/docs/radio" },
                { title: "Select", url: "/docs/select" }
            ],
        }
    ];

    return new Response(JSON.stringify(docs), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}
