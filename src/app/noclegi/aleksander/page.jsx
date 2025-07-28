import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Ośrodek Aleksander | Noclegi",
    description: "Ośrodek Aleksander - komfortowe domki letniskowe w malowniczej okolicy. Sprawdź pełną ofertę na sielpia-domki.pl",
};

export default function OsrodekAleksander() {
    return (
        <main className="bg-white w-full min-h-screen py-8 px-2 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#9b51e0] mb-2 text-center">
                    Ośrodek Aleksander
                </h1>
                <div className="w-full bg-white flex justify-center py-4">
                    <div className="h-px w-24 bg-purple-300"></div>
                </div>

                {/* Hero Image */}
                <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="/img/noclegi/aleksander_noclegi.jpg"
                        alt="Ośrodek Aleksander"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 80vw"
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Main Description */}
                <div className="bg-purple-50 rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-[#9b51e0] mb-4">Ośrodek Aleksander</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Malowniczo położony kompleks domków letniskowych,
                        oferujący komfortowy wypoczynek w otoczeniu przyrody. Nasze domki zapewniają 
                        wszystkie niezbędne udogodnienia dla rodzin i grup przyjaciół.
                    </p>
                    <p className="text-lg text-gray-700">
                        Lokalizacja ośrodka pozwala na aktywny wypoczynek oraz korzystanie z licznych 
                        atrakcji turystycznych w okolicy. To idealne miejsce na urlop z dala od miejskiego zgiełku.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">🏠 Komfortowe Domki</h3>
                        <p className="text-gray-700">
                            Domki 4-osobowe i 5-8 osobowe z pełnym wyposażeniem
                        </p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">🌲 Piękna Lokalizacja</h3>
                        <p className="text-gray-700">
                            Malownicze otoczenie przyrody, cisza i spokój
                        </p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">🚗 Parking</h3>
                        <p className="text-gray-700">
                            Bezpłatny parking dla gości ośrodka
                        </p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">🔥 Miejsce na Ognisko</h3>
                        <p className="text-gray-700">
                            Wyznaczone miejsca na ogniska i grillowanie
                        </p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">🏊 Bliskość Jeziora</h3>
                        <p className="text-gray-700">
                            Nasz ośrodek leży w samym sercu Sielpi Wielkiej!
                            Znajduje się tutaj zbiornik wodny o powierzchni 57ha.
                        </p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">🎣 Aktywności</h3>
                        <p className="text-gray-700">
                            Możliwość wędkowania, spacerów i rekreacji
                        </p>
                    </div>
                </div>

                {/* Call to Action - External Link */}
                <div className="bg-gradient-to-r from-[#9b51e0] to-[#7c3aed] rounded-xl p-8 mb-8 text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                        Sprawdź Pełną Ofertę!
                    </h2>
                    <p className="text-lg text-white mb-6 opacity-90">
                        Odwiedź oficjalną stronę Ośrodka Aleksander, aby poznać szczegóły oferty, 
                        ceny i dokonać rezerwacji.
                    </p>
                    <a 
                        href="https://sielpia-domki.pl/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-[#9b51e0] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        Przejdź do Ośrodek Aleksander
                    </a>
                </div>

                {/* Back Navigation */}
                <div className="text-center">
                    <Link 
                        href="/noclegi" 
                        className="inline-block bg-[#9b51e0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                        Powrót do noclegów
                    </Link>
                </div>
            </div>
        </main>
    );
}