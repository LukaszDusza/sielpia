import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Atrakcje Wypożyczalni | Nasze atrakcje",
    description: "Poznaj wszystkie atrakcje i sprzęt dostępny w naszej wypożyczalni - rowery, hulajnogi i wiele więcej!",
};

export default function AtrakcjeWypozyczalnia() {
    return (
        <main className="bg-white w-full min-h-screen py-8 px-2 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#9b51e0] mb-2 text-center">
                    Atrakcje Wypożyczalni
                </h1>
                <div className="w-full bg-white flex justify-center py-4">
                    <div className="h-px w-24 bg-purple-300"></div>
                </div>
                <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                    Wypożyczalnia „MATEO" - zapraszamy do naszych 3 wypożyczalni przy ulicy Spacerowej w Sielpi Wielkiej przy głównym deptaku.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">🏎️ Gokarty Ekologiczne</h3>
                            <p className="text-gray-700">
                                Gokarty ekologiczne dostępne w trzech wariantach: 1-osobowe, 2-osobowe i 4-osobowe. 
                                Idealne dla całej rodziny, zapewniające bezpieczną i ekologiczną zabawę.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">🚗 Autka Elektryczne</h3>
                            <p className="text-gray-700">
                                Elektryczne autka dla dzieci zapewniające bezpieczną i ekscytującą jazdę. 
                                Idealne dla najmłodszych, którzy marzą o prowadzeniu własnego pojazdu.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">🏍️ Mini Crossy dla Dzieci</h3>
                            <p className="text-gray-700">
                                Mini crossy specjalnie zaprojektowane dla dzieci. Bezpieczne i łatwe w obsłudze, 
                                zapewniające niezapomniane przygody terenowe dla młodych miłośników motoryzacji.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">🛴 Hulajnogi Elektryczne</h3>
                            <p className="text-gray-700">
                                Nowoczesne hulajnogi elektryczne dla różnych grup wiekowych. 
                                Ekologiczny i wygodny sposób na przemieszczanie się i aktywny wypoczynek.
                            </p>
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
                        href="/atrakcje" 
                        className="inline-block bg-[#9b51e0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                        Powrót do wszystkich atrakcji
                    </Link>
                </div>
            </div>
        </main>
    );
}