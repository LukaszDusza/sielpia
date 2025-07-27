'use client';

import { FaFacebookF } from 'react-icons/fa';

export default function FacebookBubble() {
    return (
        <div className="fixed right-0 bottom-20 z-50 group">
            <a
                href="https://www.facebook.com/people/Weso%C5%82e-Miasteczko-Bawialnia-Sielpia/61558962474600/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 bg-[#1877F2] text-white px-5 py-3 rounded-l-full shadow-lg transition-all duration-200 transform hover:scale-105"
                aria-label="Facebook"
            >
                <FaFacebookF className="w-6 h-6" />
                <span className="hidden sm:inline text-sm font-medium">Facebook</span>

                {/* Ogonek chmurki */}
                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#1877F2] rotate-45 shadow-lg rounded-sm z-[-1]" />
            </a>
        </div>
    );
}
