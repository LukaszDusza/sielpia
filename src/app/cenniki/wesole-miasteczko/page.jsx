import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Cennik Wesołego Miasteczka | Cenniki",
    description: "Sprawdź aktualne ceny atrakcji wesołego miasteczka na sezon 2025",
};

export default function CennikiWesoleMiasteczko() {
    return (
        <main className="bg-white w-full min-h-screen py-8 px-2 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#9b51e0] mb-2 text-center">
                    Cennik Wesołego Miasteczka
                </h1>
                <div className="w-full bg-white flex justify-center py-4">
                    <div className="h-px w-24 bg-purple-300"></div>
                </div>
                <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                    Cennik sezon 2025 - sprawdź aktualne ceny wszystkich atrakcji wesołego miasteczka.
                </p>
                
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                        <div className="divide-y divide-gray-100">
                            <div className="flex justify-between items-center py-2 px-4">
                                <div>
                                    <h3 className="text-base font-semibold text-[#9b51e0]">KARUZELA WIEDEŃSKA</h3>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-gray-800">15 ZŁ</div>
                                    <div className="text-xs text-gray-600">OSOBA</div>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center py-2 px-4">
                                <div>
                                    <h3 className="text-base font-semibold text-[#9b51e0]">KARUZELA ŁAŃCUCHOWA</h3>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-gray-800">15 ZŁ</div>
                                    <div className="text-xs text-gray-600">OSOBA</div>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center py-2 px-4">
                                <div>
                                    <h3 className="text-base font-semibold text-[#9b51e0]">KOLEJKA GÓRSKA</h3>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-gray-800">15 ZŁ</div>
                                    <div className="text-xs text-gray-600">OSOBA</div>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center py-2 px-4">
                                <div>
                                    <h3 className="text-base font-semibold text-[#9b51e0]">KARUZELA CALYPSO</h3>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-gray-800">15 ZŁ</div>
                                    <div className="text-xs text-gray-600">OSOBA</div>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center py-2 px-4">
                                <div>
                                    <h3 className="text-base font-semibold text-[#9b51e0]">AUTODROM</h3>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-gray-800">20 ZŁ</div>
                                    <div className="text-xs text-gray-600">AUTO (1,2 OSOBY)</div>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center py-2 px-4">
                                <div>
                                    <h3 className="text-base font-semibold text-[#9b51e0]">KARUZELA ŁAWKA</h3>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-gray-800">20 ZŁ</div>
                                    <div className="text-xs text-gray-600">OSOBA</div>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center py-2 px-4">
                                <div>
                                    <h3 className="text-base font-semibold text-[#9b51e0]">KARUZELA EXTREME MONSTER</h3>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-gray-800">30 ZŁ</div>
                                    <div className="text-xs text-gray-600">OSOBA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Photo Gallery */}
                <div className="mb-12">
                    <Link href="/galeria/wesole-miasteczko" className="block text-center mb-6">
                        <h2 className="text-2xl font-semibold text-[#9b51e0] hover:text-purple-700 transition-colors cursor-pointer">Galeria Zdjęć</h2>
                    </Link>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/img/wm/wm1.jpg"
                                alt="Wesołe miasteczko - zdjęcie 1"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 33vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/img/wm/wm2.jpg"
                                alt="Wesołe miasteczko - zdjęcie 2"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 33vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/img/wm/wm3.jpg"
                                alt="Wesołe miasteczko - zdjęcie 3"
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