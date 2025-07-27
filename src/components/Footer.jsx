'use client';

import { ArrowUpIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#110713] text-white text-sm mt-12 relative">
            {/* Godziny otwarcia */}
            <div className="text-center px-4 space-y-2">
                <h2 className="text-4xl font-light tracking-widest mb-8">Godziny otwarcia</h2>
                <p>Kwiecień: w niedziele 12:00 – 19:00</p>
                <p>Maj: w weekendy 12:00 – 20:00</p>
                <p>Czerwiec: codziennie 12:00 – 21:00</p>
                <p>Lipiec i Sierpień: codziennie 11:00 – 22:00</p>
                <p>Wrzesień: w weekendy 12:00 – 19:00</p>
                <p>Październik: w niedziele 12:00 – 19:00</p>

            </div>

            {/* Separator */}
            <div className="mt-14 h-[1px] w-full bg-white/40" />

            {/* Dolna część stopki */}
            <div className="max-w-6xl mx-auto px-4 py-6 text-center space-y-2">
                <p>Prawo autorskie © 2025 Wesołe Miasteczko &amp; Bawialnia Sielpia</p>
                <a href="/regulamin-bawialni" className="underline hover:text-purple-400 transition">
                    Regulaminy
                </a>
                <p className="text-sm">Deweloper: Devlab Sp. z o.o.</p>
            </div>

            {/* Strzałka do góry */}
            <button
                onClick={scrollToTop}
                aria-label="Przewiń do góry"
                className="fixed right-4 bottom-20 z-50 bg-purple-600 p-2 rounded-md text-white hover:bg-purple-700 transition"
            >
                <ArrowUpIcon className="h-5 w-5" />
            </button>
        </footer>
    );
}
