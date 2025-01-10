// src/app/api/docsmenu/route.js

export async function GET(req) {
    const docs = [
        {
            title: "Base",
            children: [
                { title: "Box", url: "/docs/box" },
                {
                    title: "Breadcrumb",
                    children: [
                        { title: "Basic", url: "/docs/breadcrumb/basic" },
                        { title: "Data", url: "/docs/breadcrumb/data" }
                    ]
                },
                { title: "Data Table", url: "/docs/datatable" },
                { title: "Base Table", url: "/docs/table" },
                { title: "Tabs", url: "/docs/tabs" },
                { title: "Autocomplete", url: "/docs/autocomplete" },
                { title: "List", url: "/docs/list" },
                { title: "Accordion", url: "/docs/accordion" },
                { title: "Treeview", url: "/docs/treeview" },
                { title: "Modal", url: "/docs/modal" },
                { title: "Drawer", url: "/docs/drawer" },
                { title: "Dropdown", url: "/docs/dropdown" },
                { title: "Alert", url: "/docs/alert" },
                { title: "Badge", url: "/docs/badge" },
                { title: "Card", url: "/docs/card" },
                { title: "List Group", url: "/docs/list-group" },
                { title: "Nav", url: "/docs/nav" },
                { title: "Pagination", url: "/docs/pagination" },
                { title: "Progress", url: "/docs/progress" },
                { title: "Spinner", url: "/docs/spinner" },
                { title: "Toast", url: "/docs/toast" },
                { title: "Tooltip", url: "/docs/tooltip" }

            ],
        },
        {
            title: "Form",
            children: [
                { title: "Form", url: "/docs/form" },
                { title: "Button", url: "/docs/button" },
                { title: "Text Field", url: "/docs/textfield" },
                { title: "Date Time Picker", url: "/docs/datetimepicker" },
                { title: "File Upload", url: "/docs/fileupload" },
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
