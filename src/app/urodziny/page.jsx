import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Urodziny | Wesołe Miasteczko Sielpia",
    description: "Wyjątkowe urodziny w Wesołym Miasteczku Sielpia - pakiety urodzinowe z atrakcjami i zabawą",
};

export default function Urodziny() {
    return (
        <main className="bg-white w-full min-h-screen py-8 px-2 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#9b51e0] mb-2 text-center">
                    Wyjątkowe Urodziny w Wesołym Miasteczku - Sielpia
                </h1>
                <div className="w-full bg-white flex justify-center py-4">
                    <div className="h-px w-24 bg-purple-300"></div>
                </div>
                <p className="text-lg text-gray-700 mb-10 text-center max-w-4xl mx-auto">
                    Marzysz o urodzinach pełnych śmiechu, kolorów i niezapomnianych emocji?<br />
                    Zorganizuj je u nas – w miejscu, gdzie dziecięce marzenia stają się rzeczywistością!
                </p>
                
                {/* Pakiety */}
                <div className="max-w-5xl mx-auto mb-12">
                    <h2 className="text-2xl font-bold text-[#9b51e0] text-center mb-8">Do wyboru dwa pakiety:</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Pakiet Podstawowy */}
                        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                            <div className="bg-[#9b51e0] text-white p-4">
                                <h3 className="text-xl font-bold text-center">PAKIET PODSTAWOWY 40 zł osoba</h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-[#9b51e0] font-bold mr-3">•</span>
                                        <span className="text-gray-700">2 godziny szalonej zabawy w bawialni</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#9b51e0] font-bold mr-3">•</span>
                                        <span className="text-gray-700">dmuchana zjeżdżalnia</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#9b51e0] font-bold mr-3">•</span>
                                        <span className="text-gray-700">przejażdżka kolejką górską</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#9b51e0] font-bold mr-3">•</span>
                                        <span className="text-gray-700">miejsce na poczęstunek dla dzieci i rodziców</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#9b51e0] font-bold mr-3">•</span>
                                        <span className="text-gray-700">ścianka do zdjęć</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#9b51e0] font-bold mr-3">•</span>
                                        <span className="text-gray-700">kawa dla rodziców</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Pakiet Maxi */}
                        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                            <div className="bg-[#9b51e0] text-white p-4">
                                <h3 className="text-xl font-bold text-center">PAKIET MAXI 50 zł osoba</h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-[#9b51e0] font-bold mr-3">•</span>
                                        <span className="text-gray-700">2 godziny szalonej zabawy w bawialni</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#9b51e0] font-bold mr-3">•</span>
                                        <span className="text-gray-700">dmuchana zjeżdżalnia</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#9b51e0] font-bold mr-3">•</span>
                                        <span className="text-gray-700">przejażdżka kolejką górską</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#9b51e0] font-bold mr-3">•</span>
                                        <span className="text-gray-700">autodrom</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#9b51e0] font-bold mr-3">•</span>
                                        <span className="text-gray-700">karuzele (ławka, calypso, łańcuchowa, wiedeńska)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#9b51e0] font-bold mr-3">•</span>
                                        <span className="text-gray-700">miejsce na poczęstunek dla dzieci i rodziców</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#9b51e0] font-bold mr-3">•</span>
                                        <span className="text-gray-700">ścianka do zdjęć</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#9b51e0] font-bold mr-3">•</span>
                                        <span className="text-gray-700">kawa dla rodziców</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="bg-gradient-to-r from-[#9b51e0] to-purple-600 rounded-lg p-8 text-white text-center">
                        <p className="text-lg mb-4 font-semibold">
                            Zarezerwuj termin już dziś i spraw, by ten dzień był naprawdę WYJĄTKOWY!
                        </p>
                        <div className="text-2xl font-bold">
                            Tel. 665 188 568
                        </div>
                    </div>
                </div>
                
                {/* Photo Gallery */}
                <div className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/img/wm/wm7.jpg"
                                alt="Urodziny - zdjęcie 1"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 33vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/img/wm/wm8.jpg"
                                alt="Urodziny - zdjęcie 2"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 33vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/img/wm/wm10.jpg"
                                alt="Urodziny - zdjęcie 3"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 33vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
                
                <div className="text-center">
                    <Link 
                        href="/" 
                        className="inline-block bg-[#9b51e0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                        Powrót do strony głównej
                    </Link>
                </div>
            </div>
        </main>
    );
}