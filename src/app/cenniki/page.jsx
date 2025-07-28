import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Cenniki | Cenniki usług",
    description: "Cenniki - wybierz kategorię i sprawdź nasze ceny",
};

const priceCategories = [
    {
        src: "wesole_miasteczko_cennik.jpg",
        caption: "Cennik wesołego miasteczka",
        href: "/cenniki/wesole-miasteczko"
    },
    {
        src: "bawialnia_cennik.jpg",
        caption: "Cennik bawialni",
        href: "/cenniki/bawialnia"
    },
    {
        src: "wypozyczalnia_cennik.jpg",
        caption: "Cennik wypożyczalni",
        href: "/cenniki/wypozyczalnia"
    }
];

export default function Cenniki() {
    return (
        <main className="bg-white w-full min-h-screen py-8 px-2 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#9b51e0] mb-2 text-center">
                    Cenniki
                </h1>
                <div className="w-full bg-white flex justify-center py-4">
                    <div className="h-px w-24 bg-purple-300"></div>
                </div>
                <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                    Witaj w pełnym kolorów świecie rozrywki w sercu Sielpi! Nasze wesołe miasteczko to doskonałe miejsce na wspólną zabawę dla całej rodziny – od maluchów po miłośników mocniejszych wrażeń. Wybierz interesującą Cię kategorię i poznaj aktualny cennik atrakcji.                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {priceCategories.map(({ src, caption, href }, idx) => (
                        <Link
                            key={src}
                            href={href}
                            className="group block rounded-lg shadow-md overflow-hidden bg-white transition hover:scale-105"
                        >
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={`/img/cenniki/${src}`}
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