import Header from '@/app/layout/Header';
import Aside from "@/app/layout/Aside";
import Footer from "@/app/layout/Footer";
import CalculateElementsHeight from '@/app/utils/calculateElementsHeight';

export default function PageLayout({ children }) {
    return (
        <main data-type="Pages" className="relative top-20 w-full min-h-screen bg-white">
            <Header />
            <div className="flex gap-4 min-h-screen" style={{ minHeight: "calc(100vh - (var(--header-height) + var(--footer-height)))" }}>
                <Aside endpoint="/api/pagemenu" />
                <div className="relative px-4 pt-12 pb-4 md:p-4 w-full md:w-[calc(100%-256px)] left-0 md:left-64">
                    {children}
                </div>
            </div>
            <Footer />
            <CalculateElementsHeight />
        </main>
    );
}
