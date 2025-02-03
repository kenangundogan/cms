'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowLongDownIcon, ArrowLongUpIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import TextField from "@/app/components/ui/textfield/TextField";

export default function PageLayout({ endpoint }) {
    const [docs, setDocs] = useState([]);
    const [filteredDocs, setFilteredDocs] = useState([]);
    const [openMenus, setOpenMenus] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const pathname = usePathname();
    let tabIndexCounter = 1;

    useEffect(() => {
        const fetchDocs = async () => {
            try {
                const response = await fetch(endpoint);
                if (!response.ok) {
                    throw new Error('Menü verileri alınamadı');
                }
                const data = await response.json();
                setDocs(data);
                setFilteredDocs(data);
                openMenusForPath(data, pathname);
            } catch (error) {
                console.error("Menü yükleme hatası:", error);
            }
        };

        fetchDocs();
    }, [pathname]);

    useEffect(() => {
        if (searchTerm.length >= 3) {
            const filtered = docs.map(menu => ({
                ...menu,
                children: menu.children.filter(item =>
                    item.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
            })).filter(menu => menu.children.length > 0);
            setFilteredDocs(filtered);
        } else {
            setFilteredDocs(docs);
        }
    }, [searchTerm, docs]);

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
        tabIndexCounter++;
        return (
            <li key={item.title} className="relative" tabIndex={tabIndexCounter}>
                <div
                    className={`flex justify-between items-center text-gray-600 hover:text-black border-l pl-4 ${pathname === item.url ? "font-bold border-black" : ""}`}
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
                    <ul className="pl-4 mt-2 text-sm space-y-1">
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
        <aside className={`fixed z-20 w-full md:w-64 bg-gray-50 ${openMenus.mobile ? "min-h-screen" : ""}`}>
            <button
                className="w-full h-12 flex items-center justify-between px-6 bg-white border md:hidden"
                onClick={() => setOpenMenus((prev) => ({ ...prev, mobile: !prev.mobile }))}
                tabIndex={0}
            >
                <span>Menu</span>
                {openMenus.mobile ? (
                    <ArrowLongDownIcon className="h-6 w-6" />
                ) : (
                    <ArrowLongUpIcon className="h-6 w-6" />
                )}
            </button>

            <div className={`transition-all duration-300 max-h-screen pb-52 ${openMenus.mobile ? "block" : "hidden"} md:block min-h-screen p-6 overflow-y-auto`}>
                <div className="relative mb-4">
                    <TextField
                        placeholder="Menüde ara..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        tabIndex={1}
                    />
                    <button className="absolute right-4 top-1/2 transform -translate-y-1/2" onClick={() => setSearchTerm("")}>
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                {filteredDocs.map((menu) => renderMenu(menu))}
            </div>
        </aside>
    );
}
