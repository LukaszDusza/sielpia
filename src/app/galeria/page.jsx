import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Galeria | Galeria zdjęć",
    description: "Galeria zdjęć - wybierz i przejrzyj nasze atrakcje",
};

const categories = [
    {
        src: "wm_galeria.jpg",
        caption: "Wesołe Miasteczko",
        href: "/galeria/wesole-miasteczko"
    },
    {
        src: "b_galeria.jpg",
        caption: "Bawialnia",
        href: "/galeria/bawialnia"
    },
    {
        src: "wp_galeria.jpg",
        caption: "Wypożyczalnia",
        href: "/galeria/wypozyczalnia"
    }
];

export default function Galeria() {
    return (
        <main className="bg-white w-full min-h-screen py-8 px-2 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#9b51e0] mb-2 text-center">
                    Galeria
                </h1>
                <div className="w-full bg-white flex justify-center py-4">
                    <div className="h-px w-24 bg-purple-300"></div>
                </div>
                <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                    Zanurz się w świat radości i emocji w samym centrum Sielpi! Nasze wesołe miasteczko to przestrzeń pełna atrakcji dla każdego — od najmłodszych odkrywców po spragnionych adrenaliny dorosłych. Przeglądaj dostępne kategorie i znajdź rozrywkę idealną dla siebie i swojej rodziny!                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map(({ src, caption, href }, idx) => (
                        <Link
                            key={src}
                            href={href}
                            className="group block rounded-lg shadow-md overflow-hidden bg-white transition hover:scale-105"
                        >
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={`/img/wm/${src}`}
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