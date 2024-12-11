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
        <footer className="w-full overflow-hidden p-4">
            <div className='border'>
                <div className='p-4 w-full flex justify-between items-center'>
                    <span className='text-xs'>Copyright © 2024 CMS</span>
                    <Image src="/assets/images/symbol/symbol.svg" alt="Logo" width={20} height={20} />
                </div>
                <div className='border-b'></div>
                <ul className='p-4 w-full flex flex-wrap gap-2 text-xxs'>
                    {Object.keys(packageInfo.dependencies).map((key, index) => (
                        <li key={index}>
                            <b>{key}: </b>
                            <span>v{packageInfo.dependencies[key]}</span>
                        </li>
                    ))}
                </ul>
                <div className='border-b'></div>
                <ul className='p-4 w-full flex flex-wrap gap-2 text-xxs'>
                    {Object.keys(packageInfo.devDependencies).map((key, index) => (
                        <li key={index}>
                            <b>{key}: </b>
                            <span>v{packageInfo.devDependencies[key]}</span>
                        </li>
                    ))}
                </ul>
                <div className='border-b'></div>
                <ul className='p-4 w-full flex flex-wrap gap-2 text-xxs'>
                    <li>
                        <b>UserAgent: </b>
                        <span>v{userAgent}</span>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
