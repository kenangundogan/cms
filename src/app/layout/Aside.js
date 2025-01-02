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

        return (
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
                    <ul className="text-sm">
                        {docs.map((doc, index) => (
                            <li key={index} className={`border-l py-1 pl-4 ${pathname === doc.url ? "font-bold border-l-black" : ""}`}>
                                {doc.children ? (
                                    <>
                                        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleMenu(index)}>
                                            <span>{doc.title}</span>
                                            {openMenus[index] ? <ChevronDownIcon className="size-3" /> : <ChevronRightIcon className="size-3" />}
                                        </div>
                                        {openMenus[index] && (
                                            <ul className="pl-4">
                                                {doc.children.map((child, childIndex) => (
                                                    <li key={childIndex} className={`border-l py-1 pl-4 ${pathname === child.url ? "font-bold border-l-black" : ""}`}>
                                                        <a href={child.url}>{child.title}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <a href={doc.url}>{doc.title}</a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        );
    };

    return (
        <AsideMenu />
    );
}
