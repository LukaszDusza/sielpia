import Image from "next/image";

export const metadata = {
    title: "Galeria Bawialni | Wesołe Miasteczko",
    description:
        "Zobacz galerię zdjęć Bawialni – zadaszona dwupoziomowa sala zabaw dla dzieci pełna ekscytujących atrakcji. Zapraszamy do wspólnej zabawy!",
};

const images = [
    "b_galeria.jpg",
    // Dodaj kolejne pliki według potrzeby
];

export default function GaleriaBawialni() {
    return (
        <main className="bg-white w-full min-h-screen py-8 px-2 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-[#9b51e0] mb-2 text-center">
                    Galeria Zdjęć Bawialni
                </h1>
                <div className="w-full bg-white flex justify-center py-4">
                    <div className="h-px w-24 bg-purple-300"></div>
                </div>
                <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                    Zapraszamy do naszej galerii zdjęć Bawialni! Odkryj wyjątkową atmosferę naszej zadaszonej dwupoziomowej sali zabaw – mnóstwo atrakcji, radosnych emocji oraz kolorowych wspomnień. Zobacz, jak bawimy się w naszej bawialni i dołącz do nas podczas swojej najbliższej wizyty!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <div
                            key={img}
                            className="w-full aspect-[4/3] relative overflow-hidden rounded-lg shadow-md group"
                        >
                            <Image
                                src={`/img/wm/${img}`}
                                alt=""
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 33vw"
                                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}