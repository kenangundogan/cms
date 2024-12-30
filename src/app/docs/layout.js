'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/layout/Header";
import Footer from "@/app/layout/Footer";
import { ArrowLongDownIcon, ArrowLongUpIcon } from '@heroicons/react/24/outline';

export default function PageLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    const docs = [
        { title: "Data Table", url: "/docs/datatable" },
        { title: "Modal", url: "/docs/modal" },
        { title: "Tabs", url: "/docs/tabs" },
        { title: "Accordion", url: "/docs/accordion" },
        { title: "Alert", url: "/docs/alert" },
        { title: "Badge", url: "/docs/badge" },
        { title: "Breadcrumb", url: "/docs/breadcrumb" },
        { title: "Button", url: "/docs/button" },
        { title: "Card", url: "/docs/card" },
        { title: "Dropdown", url: "/docs/dropdown" },
        { title: "List Group", url: "/docs/list-group" },
        { title: "Nav", url: "/docs/nav" },
        { title: "Pagination", url: "/docs/pagination" },
        { title: "Progress", url: "/docs/progress" },
        { title: "Spinner", url: "/docs/spinner" },
        { title: "Toast", url: "/docs/toast" },
        { title: "Tooltip", url: "/docs/tooltip" },
    ];

    return (
        <main className="relative top-20 w-full min-h-screen bg-white">
            <Header />
            <div className="min-h-screen flex gap-4">
                <aside className={`fixed z-20 w-full md:w-64 overflow-hidden h-10 md:min-h-screen md:h-auto bg-black/10 ${isOpen ? "min-h-screen" : ""}`}>
                    <button
                        className={`w-full h-10 flex items-center justify-between px-8 bg-white border md:hidden`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {
                            isOpen ?
                                (
                                    <>
                                        <span>Documentation</span>
                                        <ArrowLongDownIcon className="size-3" />
                                    </>
                                )
                                :
                                (
                                    <>
                                        <span>Documentation</span>
                                        <ArrowLongUpIcon className="size-3" />
                                    </>
                                )
                        }
                    </button>
                    <div className="min-h-screen h-screen relative w-full max-w-80 bg-gray-50 p-8 overflow-y-auto pb-52">
                        <h2 className="text-lg font-bold mb-4">Components</h2>
                        <ul className="space-y-2 text-sm">
                            {docs.map((doc, index) => (
                                <li key={index} className={pathname === doc.url ? "font-bold" : ""}>
                                    <a href={doc.url}>{doc.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
                <div className={`px-4 pt-12 pb-4 md:p-4 w-full md:w-[calc(100%-256px)] translate-x-0 md:translate-x-64`}>
                    {children}
                </div>
            </div>
            <Footer />
        </main>
    );
}
