'use client';

import Link from "next/link";
import Image from "next/image";

export default function NewCarsSection() {
    return (
        <section 
            className="relative w-full min-h-[600px] md:min-h-[700px] flex flex-col justify-center items-center bg-cover bg-center py-16 px-4 sm:px-6 md:px-8"
            style={{
                backgroundImage: "url('/img/NewCars/new-cars-1.jpg')"
            }}
        >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#110713]/60 via-purple-900/40 to-blue-900/30 z-0"></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Image Gallery */}
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
                                <Image
                                    src="/img/NewCars/new-cars-7.jpg"
                                    alt="Kolorowe autka zderzakowe Bertazzon"
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover"
                                />
                            </div>

                    {/* Text Content */}
                    <div className="text-center lg:text-left order-1 lg:order-2 bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl flex flex-col justify-center">
                        {/* Badge for new season */}
                        <div className="mb-4">
                            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium rounded-full border border-purple-200">
                                🎉 Kolejna Nowość Sezonu!
                            </span>
                        </div>
                        
                        {/* Main heading */}
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            Nowe Autka NEW YORK 🚗💥
                        </h2>
                        
                        {/* Subtitle */}
                        <p className="text-lg text-gray-700 mb-6 font-medium">
                            Prosto z Włoch od renomowanej firmy Bertazzon! 🇮🇹
                        </p>
                        
                        {/* Description */}
                        <p className="text-gray-600 mb-6">
                            Przygotujcie się na jeszcze więcej emocji i mnóstwo zderzakowej zabawy! 
                            Stylowe, kolorowe i gotowe do akcji - czas wcisnąć gaz do dechy!
                        </p>
                        
                        {/* Feature highlights */}
                        <div className="space-y-3 mb-6 text-left">
                            <div className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600 text-sm">Idealne dla dzieci, młodzieży i dorosłych</p>
                            </div>
                            <div className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600 text-sm">MEGA emocjonująca zabawa na autodromie</p>
                            </div>
                        </div>
                        
                        {/* Special highlight */}
                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 mb-6 border border-purple-100">
                            <p className="text-purple-800 font-medium">
                                🏁 Wskakuj za kierownicę i poczuj prawdziwą prędkość!
                            </p>
                        </div>
                        
                        {/* CTA buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <Link
                                href="/galeria/wesole-miasteczko"
                                className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-colors"
                            >
                                Zobacz Autodrom
                            </Link>
                            
                            <Link
                                href="/kontakt"
                                className="inline-flex items-center justify-center px-6 py-2 bg-white border border-purple-600 hover:bg-purple-50 text-purple-600 font-medium rounded-lg transition-colors"
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