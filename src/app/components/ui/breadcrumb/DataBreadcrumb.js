'use client';

import React, { useEffect, useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const DataBreadcrumb = ({ source, icon }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (source.type === 'fetch') {
                // Fetch API
                try {
                    const res = await fetch(source.endpoint);
                    if (!res.ok) throw new Error('Veri çekilirken hata oluştu.');
                    const responseData = await res.json();

                    const dataKey = source.mapping.data || 'data';
                    const type = source.mapping.type || 'array';
                    const fields = source.mapping.fields || { label: 'label', href: 'href' };

                    let parsedItems = [];
                    if (type === 'array') {
                        parsedItems = responseData[dataKey] || [];
                    } else if (type === 'object') {
                        const objKeys = Object.keys(responseData[dataKey] || {});
                        parsedItems = objKeys.map((key) => ({
                            [fields.label]: key,
                            [fields.href]: responseData[dataKey][key],
                        }));
                    }

                    setItems(parsedItems);
                } catch (err) {
                    console.error(err);
                }
            } else if (source.type === 'data') {
                // Static data
                const fields = source.mapping.fields || { label: 'label', href: 'href' };
                const data = source.mapping.data || [];
                setItems(
                    data.map((item) => ({
                        label: item[fields.label],
                        href: item[fields.href],
                    }))
                );
            }
        };

        fetchData();
    }, [source]);

    return (
        <div data-type="Breadcrumb" className="p-4">
            <ul className="w-full flex gap-1 items-center text-xs">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={index} data-type="item" className="flex items-center gap-2">
                            {isLast || !item.href ? (
                                <span>{item.label}</span>
                            ) : (
                                <a href={item.href} className="font-bold hover:underline">
                                    {item.label}
                                </a>
                            )}
                            {index < items.length - 1 &&
                                (icon || <ChevronRightIcon className="size-2 text-gray-500" />)}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default DataBreadcrumb;
