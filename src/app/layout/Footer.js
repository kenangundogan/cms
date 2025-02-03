'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import packageInfo from '../../../package.json';

const Footer = () => {
    const [userAgent, setUserAgent] = useState('');

    useEffect(() => {
        setUserAgent(navigator.userAgent);
    }, []);

    return (
        <footer className="w-full min-w-96 overflow-hidden py-4 px-8 md:w-[calc(100%-256px)] translate-x-0 md:translate-x-64">
            <div className='border'>
                <div className='p-4 w-full flex justify-between items-center'>
                    <span className='text-xs font-bold'>Copyright © 2025 CMS</span>
                    <Image src="/assets/images/symbol/symbol.svg" alt="Logo" width={20} height={20} />
                </div>
                <div className='border-b'></div>
                <ul className='p-4 w-full flex flex-wrap gap-2 text-xxs'>
                    {Object.keys(packageInfo.dependencies).map((key, index) => (
                        <li key={index} className='rounded-full bg-gray-50 py-2 px-4'>
                            <b>{key}: </b>
                            <span>{packageInfo.dependencies[key]}</span>
                        </li>
                    ))}
                </ul>
                <div className='border-b'></div>
                <ul className='p-4 w-full flex flex-wrap gap-2 text-xxs'>
                    {Object.keys(packageInfo.devDependencies).map((key, index) => (
                        <li key={index} className='rounded-full bg-gray-50 py-2 px-4'>
                            <b>{key}: </b>
                            <span>{packageInfo.devDependencies[key]}</span>
                        </li>
                    ))}
                </ul>
                <div className='border-b'></div>
                <ul className='p-4 w-full flex flex-wrap gap-2 text-xxs'>
                    <li>
                        <b>UserAgent: </b>
                        <span>{userAgent}</span>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
