import Link from "next/link";

export default function HeroSection() {
    return (
        <section
            className="relative w-full h-[500px] md:h-[700px] text-center bg-cover bg-center flex flex-col justify-center items-center overflow-hidden"
            style={{
                backgroundImage: "url('/img/first_header.jpg')"
            }}
        >
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#110713]/60 via-[#110713]/50 to-purple-900/40 z-0"></div>
            
            {/* Animated background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 max-w-5xl w-full flex flex-col items-center px-4">
                {/* Enhanced typography with modern styling */}
                <div className="mb-6 animate-fade-in-up">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full text-purple-200 text-sm font-medium tracking-wider uppercase mb-4 border border-purple-400/30">
                        Familijny Park Rozrywki
                    </span>
                </div>
                
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight px-2">
                    <span className="text-white">
                        Wesołe Miasteczko
                    </span>
                    <br />
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-purple-100">
                        & Bawialnia Sielpia
                    </span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg text-purple-100 px-2 mb-6 max-w-2xl mx-auto leading-relaxed">
                    Miejsce stworzone z myślą o <span className="text-white font-semibold">maluchach spragnionych ruchu</span> jak i starszych, w których wciąż drzemie <span className="text-white font-semibold">duch dziecka</span>. 
                    <br className="hidden sm:block" />
                    Tutaj spędzisz wesoło czas z całą swoją rodziną!
                </p>
                
                {/* Simplified CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                        href="/atrakcje"
                        className="inline-flex items-center justify-center px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                    >
                        Zobacz Atrakcje
                    </Link>
                    
                    <Link
                        href="/kontakt"
                        className="inline-flex items-center justify-center px-6 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/30"
                    >
                        Skontaktuj się z nami
                    </Link>
                </div>
            </div>

        </section>
    );
}