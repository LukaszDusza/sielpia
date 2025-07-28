import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Cennik Wypożyczalni | Cenniki",
    description: "Sprawdź aktualne ceny wypożyczalni - auta, gokarty, hulajnogi i inne pojazdy",
};

export default function CennikiWypozyczalnia() {
    return (
        <main className="bg-white w-full min-h-screen py-8 px-2 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#9b51e0] mb-2 text-center">
                    Cennik Wypożyczalni
                </h1>
                <div className="w-full bg-white flex justify-center py-4">
                    <div className="h-px w-24 bg-purple-300"></div>
                </div>
                <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                    Sprawdź aktualne ceny wypożyczalni pojazdów - auta, gokarty, hulajnogi i inne atrakcje.
                </p>
                
                {/* WYPOŻYCZALNIE Section */}
                <div className="max-w-4xl mx-auto mb-8">
                    <h2 className="text-2xl font-bold text-[#9b51e0] mb-6 text-center">WYPOŻYCZALNIE:</h2>
                    
                    {/* AUTA GIGANT I MINI CROSS */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-[#9b51e0] mb-3">AUTA GIGANT I MINI CROSS:</h3>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                            <div className="divide-y divide-gray-100">
                                <div className="flex justify-between items-center py-2 px-4">
                                    <div>
                                        <span className="text-base font-medium text-gray-800">1h:</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-gray-800">80 zł</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-2 px-4">
                                    <div>
                                        <span className="text-base font-medium text-gray-800">30 min:</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-gray-800">50 zł</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-2 px-4">
                                    <div>
                                        <span className="text-base font-medium text-gray-800">15 min:</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-gray-800">40 zł</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LAMBORGHINI XXL */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-[#9b51e0] mb-3">LAMBORGHINI XXL:</h3>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                            <div className="divide-y divide-gray-100">
                                <div className="flex justify-between items-center py-2 px-4">
                                    <div>
                                        <span className="text-base font-medium text-gray-800">1h:</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-gray-800">100 zł</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-2 px-4">
                                    <div>
                                        <span className="text-base font-medium text-gray-800">30 min:</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-gray-800">70 zł</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-2 px-4">
                                    <div>
                                        <span className="text-base font-medium text-gray-800">15 min:</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-gray-800">50 zł</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AUTA NA PILOT */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-[#9b51e0] mb-3">AUTA NA PILOT:</h3>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                            <div className="divide-y divide-gray-100">
                                <div className="flex justify-between items-center py-2 px-4">
                                    <div>
                                        <span className="text-base font-medium text-gray-800">1h:</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-gray-800">50 zł</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-2 px-4">
                                    <div>
                                        <span className="text-base font-medium text-gray-800">30 min:</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-gray-800">35 zł</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-2 px-4">
                                    <div>
                                        <span className="text-base font-medium text-gray-800">15 min:</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-gray-800">20 zł</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cennik gokarty */}
                <div className="max-w-4xl mx-auto mb-8">
                    <h2 className="text-2xl font-bold text-[#9b51e0] mb-6 text-center">Cennik gokarty</h2>
                    
                    {/* pojedynczy */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-[#9b51e0] mb-3">• pojedynczy:</h3>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                            <div className="divide-y divide-gray-100">
                                <div className="flex justify-between items-center py-2 px-4">
                                    <div>
                                        <span className="text-base font-medium text-gray-800">1 godz:</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-gray-800">25 zł</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-2 px-4">
                                    <div>
                                        <span className="text-base font-medium text-gray-800">30 minut:</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-gray-800">20 zł</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* podwójny */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-[#9b51e0] mb-3">• podwójny:</h3>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                            <div className="divide-y divide-gray-100">
                                <div className="flex justify-between items-center py-2 px-4">
                                    <div>
                                        <span className="text-base font-medium text-gray-800">1 godz:</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-gray-800">35 zł</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-2 px-4">
                                    <div>
                                        <span className="text-base font-medium text-gray-800">30 minut:</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-gray-800">25 zł</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* rodzinny */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-[#9b51e0] mb-3">• rodzinny:</h3>
                        <div className="bg-gray-50 rounded-lg p-3 mb-3">
                            <p className="text-sm text-gray-700">(2 dorosłych+ 2 małych dzieci max.250 kg)</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                            <div className="divide-y divide-gray-100">
                                <div className="flex justify-between items-center py-2 px-4">
                                    <div>
                                        <span className="text-base font-medium text-gray-800">1 godz:</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-gray-800">60 zł</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-2 px-4">
                                    <div>
                                        <span className="text-base font-medium text-gray-800">30 minut:</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-gray-800">40 zł</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cennik hulajnogi */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-2xl font-bold text-[#9b51e0] mb-6 text-center">Cennik hulajnogi:</h2>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                        <div className="divide-y divide-gray-100">
                            <div className="flex justify-between items-center py-2 px-4">
                                <div>
                                    <span className="text-base font-medium text-gray-800">1 godz:</span>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-gray-800">40 zł</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center py-2 px-4">
                                <div>
                                    <span className="text-base font-medium text-gray-800">30 minut:</span>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-gray-800">30 zł</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Photo Gallery */}
                <div className="mb-12">
                    <Link href="/galeria/wypozyczalnia" className="block text-center mb-6">
                        <h2 className="text-2xl font-semibold text-[#9b51e0] hover:text-purple-700 transition-colors cursor-pointer">Galeria Zdjęć</h2>
                    </Link>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/img/wm/wp_galeria.jpg"
                                alt="Wypożyczalnia - zdjęcie 1"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 33vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/img/wm/wm6.jpg"
                                alt="Wypożyczalnia - zdjęcie 2"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 33vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/img/wm/wm7.jpg"
                                alt="Wypożyczalnia - zdjęcie 3"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 33vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
                
                <div className="text-center">
                    <Link 
                        href="/cenniki" 
                        className="inline-block bg-[#9b51e0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                        Powrót do wszystkich cenników
                    </Link>
                </div>
            </div>
        </main>
    );
}