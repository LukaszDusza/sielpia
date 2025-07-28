import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Noclegi | Ośrodki noclegowe",
    description: "Noclegi - wybierz jeden z naszych ośrodków noclegowych",
};

const accommodations = [
    {
        src: "zuczek_noclegi.jpg",
        caption: "Ośrodek Żuczek",
        href: "/noclegi/zuczek"
    },
    {
        src: "aleksander_noclegi.jpg",
        caption: "Ośrodek Aleksander",
        href: "/noclegi/aleksander"
    }
];

export default function Noclegi() {
    return (
        <main className="bg-white w-full min-h-screen py-8 px-2 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#9b51e0] mb-2 text-center">
                    Noclegi
                </h1>
                <div className="w-full bg-white flex justify-center py-4">
                    <div className="h-px w-24 bg-purple-300"></div>
                </div>
                <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                    Wybierz jeden z naszych ośrodków noclegowych i zapoznaj się z ofertą. Do dyspozycji Gości komfortowe 4 osobowe oraz 5-8 osobowe domki letniskowe.
                </p>

                {/* Promotional banner */}
                <div className="bg-gradient-to-r from-[#9b51e0] to-[#7c3aed] rounded-xl p-6 mb-10 mx-auto max-w-4xl shadow-lg">
                    <div className="text-center text-white">
                        <h2 className="text-xl md:text-2xl font-bold mb-3">
                            🎉 Super oferta dla naszych gości!
                        </h2>
                        <p className="text-lg md:text-xl font-semibold mb-2">
                            Zarezerwuj nocleg i otrzymaj <span className="text-yellow-300 font-bold text-xl md:text-2xl">20% RABAT</span>
                        </p>
                        <p className="text-base md:text-lg opacity-90">
                            na wszystkie atrakcje wesołego miasteczka i bawialni!
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {accommodations.map(({ src, caption, href }, idx) => (
                        <Link
                            key={src}
                            href={href}
                            className="group block rounded-lg shadow-md overflow-hidden bg-white transition hover:scale-105"
                        >
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={`/img/noclegi/${src}`}
                                    alt={caption}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 50vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                                    priority={idx === 0}
                                />
                            </div>
                            <div className="py-3 px-2 text-center bg-white">
                                <span className="text-[#9b51e0] font-semibold text-base">{caption}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
