import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Cennik Bawialni | Cenniki",
    description: "Sprawdź aktualne ceny bawialni - godzinowe stawki i informacje o płatnościach",
};

export default function CennikiBawialnia() {
    return (
        <main className="bg-white w-full min-h-screen py-8 px-2 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#9b51e0] mb-2 text-center">
                    Cennik Bawialni
                </h1>
                <div className="w-full bg-white flex justify-center py-4">
                    <div className="h-px w-24 bg-purple-300"></div>
                </div>
                <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                    Sprawdź aktualne ceny bawialni i warunki korzystania z naszych atrakcji.
                </p>

                {/* Individual Pricing Section */}
                <div className="max-w-4xl mx-auto mb-8">
                    <h2 className="text-2xl font-bold text-[#9b51e0] mb-6 text-center">
                        Oferta dla Osób Indywidualnych
                    </h2>
                    <div
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-sm border border-blue-100 p-6">
                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <h3 className="text-lg font-semibold text-[#9b51e0] mb-3">BAWIALNIA 30MIN</h3>
                                    <div className="text-center">
                                        <span className="text-2xl font-bold text-gray-800">20 ZŁ</span>
                                        <p className="text-gray-600 text-sm mt-1">za dziecko</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <h3 className="text-lg font-semibold text-[#9b51e0] mb-3">BAWIALNIA 1H</h3>
                                    <div className="text-center">
                                        <span className="text-2xl font-bold text-gray-800">30 ZŁ</span>
                                        <p className="text-gray-600 text-sm mt-1">za dziecko</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#9b51e0] mb-3">W cenie zabawy
                                    indywidualnej:</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center">
                                        <span className="text-[#9b51e0] mr-2">✓</span>
                                        Korzystanie ze wszystkich atrakcji bawialni
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-[#9b51e0] mr-2">✓</span>
                                        Bezpłatny wstęp dla rodziców/opiekunów
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-[#9b51e0] mr-2">✓</span>
                                        Możliwość korzystania z miejsca na przekąski
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Ważne informacje:</h4>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li>• Dziecko do 1 roku życia bezpłatnie</li>
                                    <li>• Opłata za przekroczenie czasu 5 zł/10 minut</li>
                                    <li>• Bilety dostępne w kasie wesołego miasteczka</li>
                                    <li>• Możliwość płatności kartą/blikiem</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Organized Groups Section */}
                <div className="max-w-4xl mx-auto mb-8">
                    <h2 className="text-2xl font-bold text-[#9b51e0] mb-6 text-center">
                        Oferta dla Grup Zorganizowanych
                    </h2>
                    <div
                        className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-sm border border-purple-100 p-6">
                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <h3 className="text-lg font-semibold text-[#9b51e0] mb-3">Grupy 10-15 dzieci</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-700">1 godzina zabawy</span>
                                            <span className="font-bold text-gray-800">25 zł/dziecko</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-700">1,5 godziny zabawy</span>
                                            <span className="font-bold text-gray-800">35 zł/dziecko</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <h3 className="text-lg font-semibold text-[#9b51e0] mb-3">Grupy 16+ dzieci</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-700">1 godzina zabawy</span>
                                            <span className="font-bold text-gray-800">20 zł/dziecko</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-700">1,5 godziny zabawy</span>
                                            <span className="font-bold text-gray-800">30 zł/dziecko</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                <h3 className="text-lg font-semibold text-[#9b51e0] mb-3">W cenie zabawy dla grup:</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center">
                                        <span className="text-[#9b51e0] mr-2">✓</span>
                                        Korzystanie ze wszystkich atrakcji bawialni
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-[#9b51e0] mr-2">✓</span>
                                        Opiekun grupy bezpłatnie (1 opiekun na 10 dzieci)
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-[#9b51e0] mr-2">✓</span>
                                        Możliwość rezerwacji stolików na przekąski
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-[#9b51e0] mr-2">✓</span>
                                        Bezpłatne miejsce parkingowe dla autobusu
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Ważne informacje:</h4>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li>• Rezerwacja obowiązkowa minimum 3 dni wcześniej</li>
                                    <li>• Dzieci do 1 roku życia bezpłatnie</li>
                                    <li>• Możliwość zamówienia urodzinowego tortu i dekoracji za dodatkową opłatą</li>
                                    <li>• Płatność gotówką lub kartą/blikiem</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div
                        className="bg-gradient-to-r from-[#9b51e0] to-purple-600 rounded-lg p-8 text-white text-center">
                        <p className="text-lg mb-4 font-semibold">
                            Zadzwoń i zarezerwuj termin już dziś!
                        </p>
                        <div className="text-2xl font-bold">
                            Tel. 665 188 568
                        </div>
                    </div>
                </div>

                {/* Photo Gallery */}
                <div className="mb-12">
                    <Link href="/galeria/bawialnia" className="block text-center mb-6">
                        <h2 className="text-2xl font-semibold text-[#9b51e0] hover:text-purple-700 transition-colors cursor-pointer">Galeria
                            Zdjęć</h2>
                    </Link>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/img/wm/b_galeria.jpg"
                                alt="Bawialnia - zdjęcie 1"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 33vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/img/wm/wm4.jpg"
                                alt="Bawialnia - zdjęcie 2"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 33vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/img/wm/wm5.jpg"
                                alt="Bawialnia - zdjęcie 3"
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