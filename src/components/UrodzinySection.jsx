'use client';

import Link from "next/link";
import Image from "next/image";

export default function UrodzinySection() {
    return (
        <section 
            className="relative w-full min-h-[600px] md:min-h-[700px] flex flex-col justify-center items-center bg-cover bg-center py-16 px-4 sm:px-6 md:px-8"
            style={{
                backgroundImage: "url('/img/urodziny2.jpg')"
            }}
        >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#110713]/60 via-pink-900/40 to-purple-900/30 z-0"></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Image */}
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
                        <Image
                            src="/img/wm/wm7.jpg"
                            alt="Urodziny - dzieci świętujące urodziny w wesołym miasteczku"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="text-center lg:text-left order-1 lg:order-2 bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl flex flex-col justify-center">
                        {/* Simple badge */}
                        <div className="mb-4">
                            <span className="inline-block px-4 py-1 bg-pink-100 text-pink-700 text-sm font-medium rounded-full">
                                🎂 Urodziny w Wesołym Miasteczku
                            </span>
                        </div>
                        
                        {/* Main heading */}
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            Niezapomniane Urodziny Twojego Dziecka
                        </h2>
                        
                        {/* Subtitle */}
                        <p className="text-lg text-gray-700 mb-6 font-medium">
                            Kompletne pakiety urodzinowe dla Twojego dziecka!
                        </p>
                        
                        {/* Feature highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 text-left">
                            <div className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600 text-sm">2 godziny szalonej zabawy w bawialni bez ograniczeń</p>
                            </div>
                            <div className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600 text-sm">Dmuchana zjeżdżalnia i kolejka górska</p>
                            </div>
                            <div className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600 text-sm">Miejsce na poczęstunek i relaks dla rodziców</p>
                            </div>
                            <div className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600 text-sm">Ścianka do zdjęć i dekoracje urodzinowe</p>
                            </div>
                        </div>
                        
                        {/* Special highlight */}
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-6 border border-purple-100">
                            <p className="text-purple-800 font-medium">
                                🎉 Pakiet podstawowy od 40 zł za osobę!
                            </p>
                        </div>
                        
                        {/* Simplified CTA buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <Link
                                href="/urodziny"
                                className="inline-flex items-center justify-center px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                            >
                                Zobacz Pakiety Urodzinowe
                            </Link>
                            
                            <Link
                                href="/kontakt"
                                className="inline-flex items-center justify-center px-6 py-2 bg-white border border-purple-600 hover:bg-purple-50 text-purple-600 font-medium rounded-lg transition-colors"
                            >
                                Zapytaj o Ofertę
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}