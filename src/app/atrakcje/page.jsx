import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Atrakcje | Nasze atrakcje",
    description: "Atrakcje - wybierz kategorię i poznaj nasze atrakcje",
};

const attractions = [
    {
        src: "wesole_miasteczko_atrakcje.jpg",
        caption: "Atrakcje wesołego miasteczka",
        href: "/atrakcje/wesole-miasteczko"
    },
    {
        src: "bawialnia_atrakcje.jpg",
        caption: "Atrakcje bawialni",
        href: "/atrakcje/bawialnia"
    },
    {
        src: "wypozyczalnia_atrakcje.jpg",
        caption: "Atrakcje wypożyczalni",
        href: "/atrakcje/wypozyczalnia"
    }
];

export default function Atrakcje() {
    return (
        <main className="bg-white w-full min-h-screen py-8 px-2 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#9b51e0] mb-2 text-center">
                    Atrakcje
                </h1>
                <div className="w-full bg-white flex justify-center py-4">
                    <div className="h-px w-24 bg-purple-300"></div>
                </div>
                <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                    Zapraszamy do kolorowego świata zabawy w samym sercu Sielpi! Nasze wesołe miasteczko to idealne miejsce dla całej rodziny — zarówno dla najmłodszych, jak i tych nieco starszych szukających adrenaliny i dobrej zabawy.
                    Wybierz kategorię i poznaj nasze atrakcje.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {attractions.map(({ src, caption, href }, idx) => (
                        <Link
                            key={src}
                            href={href}
                            className="group block rounded-lg shadow-md overflow-hidden bg-white transition hover:scale-105"
                        >
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={`/img/atrakcje/${src}`}
                                    alt={caption}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 33vw"
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