'use client';

import Link from 'next/link';

const Header = () => {

    return (
        <header className="fixed top-0 z-50 w-full overflow-hidden p-4 h-20 flex justify-between items-center bg-gray-50">
            <div className="text-xl font-bold">
                <Link href="/">
                    Logo
                </Link>
            </div>
            <nav className="flex items-center">
                <div className='text-sm'>
                    <Link href="/login" className="mr-4">
                        Giriş Yap
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
