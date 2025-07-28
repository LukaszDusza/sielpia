import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Atrakcje Bawialni | Nasze atrakcje",
    description: "Odkryj wszystkie atrakcje naszej bawialni - place zabaw, zjeżdżalnie i wiele więcej dla dzieci!",
};

export default function AtrakcjeBawialnia() {
    return (
        <main className="bg-white w-full min-h-screen py-8 px-2 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#9b51e0] mb-2 text-center">
                    Atrakcje Bawialni
                </h1>
                <div className="w-full bg-white flex justify-center py-4">
                    <div className="h-px w-24 bg-purple-300"></div>
                </div>
                <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                    Zadaszona dwupoziomowa sala zabaw dla dzieci pełna ekscytujących atrakcji.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">Tory Przeszkód</h3>
                            <p className="text-gray-700">
                                Ekscytujące tory przeszkód rozłożone na dwóch poziomach, które rozwijają sprawność fizyczną i koordynację ruchową dzieci.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">Zjeżdżalnie Wielotorowe</h3>
                            <p className="text-gray-700">
                                Spektakularne zjeżdżalnie wielotorowe umożliwiające jednoczesną zabawę kilkorga dzieci w bezpiecznych warunkach.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">Trampoliny</h3>
                            <p className="text-gray-700">
                                Bezpieczne trampoliny dostosowane do różnych grup wiekowych, zapewniające mnóstwo radości i aktywności fizycznej.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">Zjeżdżalnia Rolkowa</h3>
                            <p className="text-gray-700">
                                Unikalna zjeżdżalnia rolkowa oferująca niezapomniane wrażenia i szybką jazdę w kontrolowanych warunkach.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">Spider Tower</h3>
                            <p className="text-gray-700">
                                Imponująca wieża wspinaczkowa Spider Tower, która rozwija siłę, zręczność i odwagę u młodych odkrywców.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">Pontony</h3>
                            <p className="text-gray-700">
                                Kolorowe pontony zapewniające dodatkową zabawę i możliwość eksploracji różnych poziomów sali zabaw.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">Zjeżdżalnia Dmuchana</h3>
                            <p className="text-gray-700">
                                Miękka i bezpieczna zjeżdżalnia dmuchana, idealna dla dzieci lubiących spokojniejsze, ale równie ekscytujące przygody.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#9b51e0] mb-3">Strefa Malucha</h3>
                            <p className="text-gray-700">
                                Specjalnie zaprojektowana strefa dla najmłodszych z basenem z kulkami, małymi zjeżdżalniami, bujaczkami i jeździkami.
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Photo Gallery */}
                <div className="mb-12">
                    <Link href="/galeria/bawialnia" className="block text-center mb-6">
                        <h2 className="text-2xl font-semibold text-[#9b51e0] hover:text-purple-700 transition-colors cursor-pointer">Galeria Zdjęć</h2>
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