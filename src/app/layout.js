import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import FixVH from '@/app/layout/FixVH';

export const metadata = {
    title: "CMS",
    description: "Content Management System",
};

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="tr">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-96`}>
                <FixVH />
                {children}
            </body>
        </html >
    );
}
