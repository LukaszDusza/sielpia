'use client';

import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';

export default function KontaktPage() {
    return (
        <main className="w-full min-h-screen bg-white text-black">
            {/* Sekcja hero ze zdjęciem i napisem */}
            <section
                className="relative w-full h-[40vh] md:h-[60vh] flex flex-col items-center justify-center"
                style={{
                    backgroundImage: "url('/img/230A9914-scaled.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Enhanced gradient overlay to match other pages */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#110713]/60 via-[#110713]/50 to-purple-900/40 z-0"></div>
                
                {/* Animated background elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                        Kontakt
                    </h1>
                    <div className="flex justify-center items-center gap-2 mt-4">
                        <div className="w-20 h-1 bg-white rounded-sm" />
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-10">
                <div className="flex flex-col gap-6">
                    {/* 3 kolumny z ikonami w okręgach nad treścią */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-2 text-black">
                        {/* Telefon */}
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center justify-center w-16 h-16 mb-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    fill="#9333ea"
                                    width="32"
                                    height="32"
                                >
                                    <path d="M18.92 351.2l108.5-46.52c12.78-5.531 27.77-1.801 36.45 8.98l44.09 53.82c69.25-34 125.5-90.31 159.5-159.5l-53.81-44.04c-10.75-8.781-14.41-23.69-8.974-36.47l46.51-108.5c6.094-13.91 21.1-21.52 35.79-18.11l100.8 23.25c14.25 3.25 24.22 15.8 24.22 30.46c0 252.3-205.2 457.5-457.5 457.5c-14.67 0-27.18-9.968-30.45-24.22l-23.25-100.8C-2.571 372.4 5.018 357.2 18.92 351.2z"></path>
                                </svg>
                            </div>
                            <div className="font-semibold text- mb-1 tracking-wider uppercase">Numer telefonu</div>
                            <div className="flex flex-col gap-1">
                                <a href="tel:783024926" className="text-black hover:underline">783 024 926</a>
                                <a href="tel:665188568" className="text-black hover:underline">665 188 568</a>
                            </div>
                        </div>
                        {/* Adres */}
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center justify-center w-16 h-16 mb-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                    fill="#9333ea"
                                    width="32"
                                    height="32"
                                >
                                    <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"></path>
                                </svg>
                            </div>
                            <div className="font-semibold text-lg mb-1 tracking-wider uppercase">Adres</div>
                            <div>ul. Kąpielowa <br />26-200 Sielpia</div>
                        </div>
                        {/* Email */}
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center justify-center w-16 h-16 mb-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    fill="#9333ea"
                                    width="32"
                                    height="32"
                                >
                                    <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"></path>
                                </svg>
                            </div>
                            <div className="font-semibold text-lg mb-1 tracking-wider uppercase">Email</div>
                            <a href="mailto:wesolemiasteczkosielpia@onet.pl" className="text-black hover:underline break-all">
                                wesolemiasteczkosielpia@onet.pl
                            </a>
                        </div>
                    </div>
                    {/* Mapa */}
                    <MapEmbed />
                    {/* Formularz pod mapą */}
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}