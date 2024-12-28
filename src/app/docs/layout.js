import Header from '@/app/layout/Header';
import Footer from '@/app/layout/Footer';

export default function PageLayout({ children }) {
    return (
        <main className="relative top-20 w-full min-h-calc bg-gray-50">
            <Header />
            <div className="min-h-screen p-4">
                {children}
            </div>
            <Footer />
        </main>
    );
}
