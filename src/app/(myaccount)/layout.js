import Header from '@/app/layout/Header';

export default function PageLayout({ children }) {
    return (
        <main className="relative top-20 w-full bg-white">
            <Header />
            <div className="min-h-screen p-4">
                {children}
            </div>
        </main>
    );
}
