'use client';

import Link from "next/link";
import Image from "next/image";

export default function ExtremeSection() {
    return (
        <section 
            className="relative w-full min-h-[600px] md:min-h-[700px] flex flex-col justify-center items-center bg-cover bg-center py-16 px-4 sm:px-6 md:px-8"
            style={{
                backgroundImage: "url('/img/ExtremeSection/extreme-section-1.jpg')"
            }}
        >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#110713]/60 via-red-900/40 to-orange-900/30 z-0"></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Image */}
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
                        <Image
                            src="/img/first_header.jpg"
                            alt="Karuzela Extreme Monster - ekstremalna atrakcja w wesołym miasteczku"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="text-center lg:text-left order-1 lg:order-2 bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl flex flex-col justify-center">
                        {/* Badge for 2025 novelty */}
                        <div className="mb-4">
                            <span className="inline-block px-4 py-1 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 text-sm font-medium rounded-full border border-red-200">
                                🚀 Nowość 2025
                            </span>
                        </div>
                        
                        {/* Main heading */}
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            Karuzela Extreme Monster
                        </h2>
                        
                        {/* Subtitle */}
                        <p className="text-lg text-gray-700 mb-6 font-medium">
                            Ekstremalna karuzela dla fanów adrenaliny!
                        </p>
                        
                        {/* Feature highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 text-left">
                            <div className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600 text-sm">Obracająca się gondola na gigantycznym ramieniu</p>
                            </div>
                            <div className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600 text-sm">Huśtanie na wysokość kilkunastu metrów</p>
                            </div>
                            <div className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600 text-sm">Mocne przeciążenia i zawroty głowy</p>
                            </div>
                            <div className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600 text-sm">Niezapomniane wrażenia dla odważnych</p>
                            </div>
                        </div>
                        
                        {/* Special highlight */}
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 mb-6 border border-red-100">
                            <p className="text-red-800 font-medium">
                                ⚡ Szaleństwo dla odważnych!
                            </p>
                        </div>
                        
                        {/* CTA buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <Link
                                href="/galeria/wesole-miasteczko"
                                className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-medium rounded-lg transition-colors"
                            >
                                Sprawdź Extreme Monster
                            </Link>
                            
                            <Link
                                href="/kontakt"
                                className="inline-flex items-center justify-center px-6 py-2 bg-white border border-red-600 hover:bg-red-50 text-red-600 font-medium rounded-lg transition-colors"
                            >
                                Zapytaj o Szczegóły
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}