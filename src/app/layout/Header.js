'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {

    return (
        <header className="fixed top-0 z-50 w-full overflow-hidden p-4 px-8 h-20 flex justify-between items-center bg-gray-50">
            <div className="text-xl font-bold">
                <Link href="/">
                    Logo
                </Link>
            </div>
            <div className='group'>
                <div className='relative z-10 overflow-hidden rounded-full w-10 h-10 border-2 cursor-pointer'>
                    <Image src="/assets/images/avatar/2.png" alt="User" width={40} height={40} />
                </div>
                <div className='group-hover:block hidden w-full max-w-64 fixed top-20 right-8 rounded-sm bg-white shadow-lg'>
                    <div className='absolute -top-[39px] right-0 w-10 h-10 bg-white border border-b-white'></div>
                    <div className='border'>
                        <div className='flex items-center gap-2 p-6'>
                            <div className='relative overflow-hidden rounded-full w-10 h-10 flex-none border-2'>
                                <Image src="/assets/images/avatar/2.png" alt="User" width={40} height={40} />
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-bold'>Kenan Gündoğan</span>
                                <span className='text-xxs'>kenangundogan@example.com</span>
                            </div>
                        </div>
                        <div className='border-b border-gray-100'></div>
                        <div className='p-3'>
                            <ul className='flex flex-col text-sm'>
                                <li>
                                    <Link href="/dashboard" className='flex items-center gap-2 p-2 hover:bg-gray-50 rounded-sm'>
                                        <span className='border border-black w-3 h-3 rounded-full'></span>
                                        <span className='text-sm'>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/myprofile" className='flex items-center gap-2 p-2 hover:bg-gray-50 rounded-sm'>
                                        <span className='border border-black w-3 h-3 rounded-full'></span>
                                        <span className='text-sm'>My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/myaccount" className='flex items-center gap-2 p-2 hover:bg-gray-50 rounded-sm'>
                                        <span className='border border-black w-3 h-3 rounded-full'></span>
                                        <span className='text-sm'>My Account</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='border-b border-gray-100'></div>
                        <div className='p-6'>
                            <a href="/logout" className='w-full block p-2 border rounded-sm text-center text-sm bg-white hover:bg-gray-50 hover:shadow-lg'>Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
