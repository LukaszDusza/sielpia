import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Atrakcje Wesołego Miasteczka | Nasze atrakcje",
    description: "Poznaj wszystkie atrakcje wesołego miasteczka - karuzele, kolejki górskie i wiele więcej!",
};

export default function AtrakceWesoleMiasteczko() {
    return (
        <main className="bg-white w-full min-h-screen py-8 px-2 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#9b51e0] mb-2 text-center">
                    Atrakcje Wesołego Miasteczka
                </h1>
                <div className="w-full bg-white flex justify-center py-4">
                    <div className="h-px w-24 bg-purple-300"></div>
                </div>
                <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                    Odkryj magiczny świat naszego wesołego miasteczka pełnego ekscytujących atrakcji dla całej rodziny.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">Karuzela Wiedeńska</h3>
                            <p className="text-gray-700">
                                Magiczna podróż w bajkowy świat! Wsiądź na karuzelę wiedeńską i poczuj się jak w zaczarowanej bajce! Ta piękna, kolorowa karuzela przeniesie Cię do świata marzeń – pełnego magii, kolorów i uśmiechu. Idealna atrakcja na pierwszą przygodę w wesołym miasteczku!
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">Karuzela Łańcuchowa</h3>
                            <p className="text-gray-700">
                                Gotowi na wirującą zabawę? Nasza karuzela łańcuchowa to lekka dawka emocji i mnóstwo radości! Kolorowe siedziska unoszą się i kręcą w powietrzu, dając dzieciom uczucie latania — wszystko w bezpiecznym tempie, dostosowanym do najmłodszych.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">Autodrom – Małe Auta, Wielka Frajda!</h3>
                            <p className="text-gray-700">
                                Marzysz o zostaniu kierowcą wyścigowym? Autodrom to miejsce, gdzie dzieci i dorośli mogą bezpiecznie poszaleć za kierownicą! Kolorowe autka, migające światła i dźwięk silników tworzą prawdziwą atmosferę toru wyścigowego.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">Kolejka górska</h3>
                            <p className="text-gray-700">
                                Przygotuj się na szybką i pełną emocji przejażdżkę! Kolejka Speedy Gonzales to zabawa dla małych śmiałków, którzy lubią wiatr we włosach i szybkie zakręty. Bezpieczna trasa, kolorowe wagony i mnóstwo uśmiechu gwarantowane!
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">Karuzela Calypso</h3>
                            <p className="text-gray-700">
                                Poczuj wirującą zabawę na karuzeli Calypso! Ta kolorowa karuzela obraca się szybko, unosząc pasażerów w górę i w dół, dzięki czemu każdy poczuje się jak na prawdziwym tańcu w powietrzu. Idealna atrakcja dla dzieci i młodzieży, które szukają odrobiny adrenaliny w bezpiecznej formie.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">Karuzela Extreme Monster</h3>
                            <p className="text-gray-700">
                                Ekstremalna karuzela dla fanów adrenaliny! Obracająca się gondola na gigantycznym ramieniu huśta pasażerów na wysokość kilkunastu metrów, zapewniając mocne przeciążenia, zawroty głowy i niezapomniane wrażenia.
                            </p>
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