'use client';

import Header from "@/app/layout/Header";
import Footer from "@/app/layout/Footer";
import Aside from "@/app/layout/Aside";

export default function PageLayout({ children }) {
    return (
        <main className="relative top-20 w-full min-h-screen bg-white">
            <Header />
            <div className="min-h-screen flex gap-4">
                <Aside/>
                <div className={`relative px-4 pt-12 pb-4 md:p-4 w-full md:w-[calc(100%-256px)] left-0 md:left-64`}>
                    {children}
                </div>
            </div>
            <Footer />
        </main>
    );
}
