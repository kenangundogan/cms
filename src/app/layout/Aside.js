'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowLongDownIcon, ArrowLongUpIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function PageLayout({ children }) {
    const [docs, setDocs] = useState([]);
    const [openMenus, setOpenMenus] = useState({});
    const pathname = usePathname();

    useEffect(() => {
        const fetchDocs = async () => {
            try {
                const response = await fetch('/api/docsmenu');
                if (!response.ok) {
                    throw new Error('Menü verileri alınamadı');
                }
                const data = await response.json();
                setDocs(data);
            } catch (error) {
                console.error("Menü yükleme hatası:", error);
            }
        };

        fetchDocs();
    }, []);

    const toggleMenu = (index) => {
        setOpenMenus((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const AsideMenu = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [openMenus, setOpenMenus] = useState({});
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

        const toggleMenu = (index) => {
            setOpenMenus((prev) => ({
                ...prev,
                [index]: !prev[index],
            }));
        };

        return (
            <aside className={`fixed z-20 w-full md:w-64 bg-gray-50 ${isOpen ? "min-h-screen" : ""}`}>
                {/* Mobile Toggle Button */}
                <button
                    className={`w-full h-12 flex items-center justify-between px-6 bg-white border md:hidden`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span>Documentation</span>
                    {isOpen ? (
                        <ArrowLongDownIcon className="size-4" />
                    ) : (
                        <ArrowLongUpIcon className="size-4" />
                    )}
                </button>

                {/* Aside Content */}
                <div
                    className={`transition-all duration-300 max-h-screen pb-52 ${isOpen ? "block" : "hidden"
                        } md:block min-h-screen p-6 overflow-y-auto`}
                    // Mobilde scroll için max-height eklendi
                >
                    {docs.map((doc, index) => (
                        <div key={index} className="mb-8">
                            <h2 className="text-lg font-bold mb-4">{doc.title}</h2>
                            <ul className="space-y-2">
                                {doc.children.map((child, childIndex) => (
                                    <li
                                        key={childIndex}
                                        className={`flex justify-between items-center text-gray-600 hover:text-black border-l pl-4 ${pathname === child.url ? "font-bold border-black" : "" }`}
                                    >
                                        <a
                                            href={child.url}
                                            className={`w-full}`}
                                        >
                                            {child.title}
                                        </a>
                                        {child.status === "Soon" && (
                                            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded">
                                                Soon
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </aside>

        );
    };


    return (
        <AsideMenu />
    );
}
