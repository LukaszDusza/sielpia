// app/page.jsx
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import BawialniaSection from "@/components/BawialniaSection";
import ExtremeSection from "@/components/ExtremeSection";
import NewCarsSection from "@/components/NewCarsSection";


export default function HomePage() {
    return (
        <main>
            <HeroSection/>
            {/* Simple Separator */}
            <div className="w-full bg-white flex justify-center py-8">
                <div className="h-px w-24 bg-purple-300"></div>
            </div>
            <ExtremeSection/>
            {/* Simple Separator */}
            <div className="w-full bg-white flex justify-center py-8">
                <div className="h-px w-24 bg-purple-300"></div>
            </div>
            <NewCarsSection/>
            {/* Simple Separator */}
            <div className="w-full bg-white flex justify-center py-8">
                <div className="h-px w-24 bg-purple-300"></div>
            </div>
            <BawialniaSection/>
            {/* Simple Separator */}
            <div className="w-full bg-white flex justify-center py-8">
                <div className="h-px w-24 bg-purple-300"></div>
            </div>

            {/* Simplified Offers Section */}
            <section className="bg-gray-50 py-16 px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Simplified Section Title */}
                    <div className="text-center mb-12">
                        <div className="mb-3">
                            <span
                                className="inline-block px-4 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                                Sprawdź Nasze Oferty
                            </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            Wybierz Swoją Przygodę
                        </h2>
                        <p className="text-base text-gray-600 max-w-2xl mx-auto">
                            Odkryj nasze wyjątkowe pakiety stworzone z myślą o niezapomnianych chwilach
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Simplified First Offer Card */}
                        <Link href="/urodziny" className="block">
                            <div
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                                <div className="relative aspect-[4/3]">
                                    <Image
                                        src="/img/oferty/oferta-urodzinowa.jpg"
                                        alt="Oferta Urodzinowa"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />

                                    {/* Simple badge */}
                                    <div className="absolute top-3 left-3">
                                        <span
                                            className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                            🎉 Popularne
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                                        Pakiety Urodzinowe
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Zorganizuj niezapomniane urodziny dla swojego dziecka. Pakiety od 40 zł/osoba z
                                        pełnym wyposażeniem i opieką.
                                    </p>

                                    {/* Features list */}
                                    <div className="space-y-1 mb-4">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-purple-500 text-sm">✨</span>
                                            <span className="text-gray-700 text-xs">2 godziny szalonej zabawy</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-purple-500 text-sm">🎠</span>
                                            <span className="text-gray-700 text-xs">Wszystkie atrakcje w pakiecie</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-purple-500 text-sm">🍰</span>
                                            <span className="text-gray-700 text-xs">Miejsce na poczęstunek</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-purple-600 font-semibold">Od 40 zł/osoba</span>
                                        <span className="text-purple-600">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Simplified Second Offer Card */}
                        <Link href="/cenniki/bawialnia" className="block">
                            <div
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                                <div className="relative aspect-[4/3]">
                                    <Image
                                        src="/img/oferty/oferta-grupy-zorganizowane.jpg"
                                        alt="Oferta dla grup zorganizowanych"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />

                                    {/* Simple badge */}
                                    <div className="absolute top-3 left-3">
                                        <span
                                            className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                            👥 Grupy
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                                        Grupy Zorganizowane
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        Idealne rozwiązanie dla szkół, przedszkoli i większych grup. Specjalne ceny i
                                        dodatkowe atrakcje.
                                    </p>

                                    {/* Features list */}
                                    <div className="space-y-1 mb-4">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-purple-500 text-sm">🏫</span>
                                            <span className="text-gray-700 text-xs">Specjalne ceny dla grup</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-purple-500 text-sm">🎯</span>
                                            <span className="text-gray-700 text-xs">Dedykowany opiekun</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-purple-500 text-sm">📋</span>
                                            <span className="text-gray-700 text-xs">Elastyczne pakiety</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-purple-600 font-semibold">Zapytaj o cenę</span>
                                        <span className="text-purple-600">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Call to action */}
                    <div className="text-center mt-12">
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center justify-center px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                        >
                            Skontaktuj się z nami
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}