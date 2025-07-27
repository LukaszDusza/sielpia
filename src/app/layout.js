import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FacebookBubble from '@/components/FacebookBubble';
import { Poppins } from 'next/font/google';

// Import czcionki Poppins
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300'],
    display: 'swap',
});

export const metadata = {
    title: 'Wesołe Miasteczko & Bawialnia Sielpia',
    description: 'Strona oficjalna – atrakcje, cenniki, galeria, page.jsx.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
        <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
        <FacebookBubble />
        </body>
        </html>
    );
}


