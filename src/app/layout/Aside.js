'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowLongDownIcon, ArrowLongUpIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function PageLayout() {
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

                openMenusForPath(data, pathname);
            } catch (error) {
                console.error("Menü yükleme hatası:", error);
            }
        };

        fetchDocs();
    }, [pathname]);

    const openMenusForPath = (menuItems, currentPath) => {
        const newOpenMenus = {};

        const checkAndOpenMenu = (items) => {
            for (const item of items) {
                if (item.children) {
                    if (item.children.some((child) => checkAndOpenMenu([child]) || child.url === currentPath)) {
                        newOpenMenus[item.title] = true;
                    }
                }
                if (item.url === currentPath) {
                    return true;
                }
            }
            return false;
        };

        checkAndOpenMenu(menuItems);
        setOpenMenus(newOpenMenus);
    };

    const toggleMenu = (title) => {
        setOpenMenus((prevState) => ({
            ...prevState,
            [title]: !prevState[title],
        }));
    };

    const renderMenuItem = (item) => {
        const hasChildren = item.children && item.children.length > 0;

        return (
            <li key={item.title} className="relative">
                <div
                    className={`flex justify-between items-center text-gray-600 hover:text-black border-l pl-4 ${pathname === item.url ? "font-bold border-black" : ""
                        }`}
                    onClick={() => hasChildren && toggleMenu(item.title)}
                >
                    <a href={item.url} className="w-full">
                        {item.title}
                    </a>
                    {hasChildren && (
                        <span className="ml-2">
                            {openMenus[item.title] ? (
                                <ChevronDownIcon className="h-4 w-4" />
                            ) : (
                                <ChevronRightIcon className="h-4 w-4" />
                            )}
                        </span>
                    )}
                </div>
                {hasChildren && openMenus[item.title] && (
                    <ul className="pl-4 mt-2 text-sm">
                        {item.children.map((child) => renderMenuItem(child))}
                    </ul>
                )}
            </li>
        );
    };

    const renderMenu = (menu) => (
        <div key={menu.title} className="mb-8">
            <h2 className="text-lg font-bold mb-4">{menu.title}</h2>
            <ul className="space-y-2">
                {menu.children.map((child) => renderMenuItem(child))}
            </ul>
        </div>
    );

    return (
        <aside className={`fixed z-20 w-full min-w-96 md:w-64 bg-gray-50 ${openMenus.mobile ? "min-h-screen" : ""}`}>
            <button
                className={`w-full h-12 flex items-center justify-between px-6 bg-white border md:hidden`}
                onClick={() => setOpenMenus((prev) => ({ ...prev, mobile: !prev.mobile }))}
            >
                <span>Documentation</span>
                {openMenus.mobile ? (
                    <ArrowLongDownIcon className="h-6 w-6" />
                ) : (
                    <ArrowLongUpIcon className="h-6 w-6" />
                )}
            </button>

            <div
                className={`transition-all duration-300 max-h-screen pb-52 ${openMenus.mobile ? "block" : "hidden"
                    } md:block min-h-screen p-6 overflow-y-auto`}
            >
                {docs.map((menu) => renderMenu(menu))}
            </div>
        </aside>
    );
}
