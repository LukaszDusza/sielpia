'use client';

export default function RegulaminBawialniPage() {
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
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                        Regulaminy
                    </h1>
                    <div className="flex justify-center items-center gap-2 mt-4">
                        <div className="w-20 h-1 bg-white rounded-sm" />
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-10">
                <div className="space-y-8">
                    {/* REGULAMIN WYPOŻYCZENIA SPRZĘTU */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            REGULAMIN WYPOŻYCZENIA SPRZĘTU REKREACYJNEGO I ROWEROWEGO
                        </h2>
                        
                        <div className="text-sm leading-relaxed space-y-4">
                            <p>
                                Właścicielem wypożyczalni jest Pan Mateusz Wrona prowadzący działalność gospodarczą na podstawie wpisu do Centralnej Ewidencji i Informacji o Działalności gospodarczej, pod firmą „F.H.U Mateo Mateusz Wrona", Sielpia Wielka ul. Spacerowa, 26-200 Końskie, adres do doręczeń Wołów 21A, 26-120 Bliżyn, NIP: 6631844704, REGON: 260601258, zwaną dalej WYPOŻYCZALNIĄ:
                            </p>
                            
                            <ol className="space-y-3 list-decimal list-inside">
                                <li>Osoba wypożyczająca (Wypożyczający) gokarty ekologiczne/ sprzęt rowerowy, hulajnogi elektryczne, autka elektryczne zgadza się na warunki wypożyczenia na zasadach określonych w regulaminie wypożyczenia sprzętu i składa podpis.</li>
                                
                                <li>Wypożyczający jest zobowiązany do okazania ważnego dokumentu tożsamości ze zdjęciem. Dokument nie jest zatrzymywany przez Wypożyczalnię.</li>
                                
                                <li>Wypożyczający zobowiązuje się do użytkowania sprzętu zgodnie z jego przeznaczeniem i jednocześnie ponosi pełną odpowiedzialność za ewentualne zdarzenia wynikłe z jego korzystania, w tym korzystania przez osoby trzecie, którym Wypożyczający udostępnił sprzęt. Wypożyczający ponosi również koszty zniszczonego sprzętu.</li>
                                
                                <li>Wypożyczający nie może użytkować sprzętu pod wpływem alkoholu bądź innych środków odurzających wykluczających jazdę sprzętem rekreacyjnym bądź rowerowym. Wypożyczalnia ma prawo odmówić wypożyczenia sprzętu osobie, co do której zachodzi obawa o jego stan trzeźwości.</li>
                                
                                <li>Wypożyczający po utracie sprzętu jest zobowiązany do uiszczenia opłat za utracony sprzęt, po jego aktualnej cenie rynkowej.</li>
                                
                                <li>Opłaty za wypożyczenie sprzętu liczone są zgodnie z cennikiem obowiązującym w wypożyczalni. Opłata za wypożyczenie sprzętu pobierana jest z góry za cały okres wypożyczenia. W przypadku przekroczenia terminu zwrotu sprzętu wypożyczalnia zastrzega sobie prawo naliczenia dodatkowej opłaty odpowiedniej do przekroczonego czasu wynajmu zgodnie z cennikiem.</li>
                                
                                <li>Wypożyczający ponosi pełną odpowiedzialność cywilną w przypadku uszkodzenia mienia ruchomego bądź nieruchomego innych osób z jego winy w trakcie użytkowania wypożyczonego sprzętu przez Wypożyczającego lub osoby trzecie, którym Wypożyczający udostępnił sprzęt.</li>
                                
                                <li>Sprzętem wypożyczalni można poruszać się jedynie po utwardzonym terenie lub drogach publicznych zgodnie z przepisami ruchu drogowego.</li>
                                
                                <li>Osoby niepełnoletnie mogą korzystać ze sprzętu wypożyczalni jedynie za zgodą i pod opieką rodziców lub opiekunów prawnych.</li>
                                
                                <li>Zabrania się: pozostawiania sprzętu bez osobistego nadzoru, użytkowania sprzętu na trudnych szlakach gruntowych niezgodnych z przeznaczeniem sprzętu, zanurzania sprzętu pod powierzchnię wody, przewożenia sprzętem użytkowanym z wypożyczalni więcej osób, niż jest to przewidziane konstrukcyjnie i wagowo dla wypożyczonego sprzętu oraz użytkowania sprzętu niezgodnie z jego przeznaczeniem, jeżdżenia po plaży, wodzie i lesie, zderzania z innymi pojazdami.</li>
                                
                                <li>Wypożyczalnia nie ponosi odpowiedzialności za warunki pogodowe i nie zwraca kosztów niewykorzystanego czasu.</li>
                                
                                <li>
                                    Informacja o przetwarzaniu danych osobowych:
                                    <br />
                                    a) Administratorem danych osobowych Wypożyczającego jest Mateusz Wrona, prowadzący działalność gospodarczą pod firmą „F.H.U Mateo Mateusz Wrona". Dane osobowe Wypożyczającego zbierane i przetwarzane są w celu realizacji usługi wypożyczenia sprzętu. Odbiorcami tych danych osobowych jest wyłącznie administrator oraz podmioty trzecie prowadzące dokumentację księgową administratora.
                                    <br />
                                    b) Administrator nie przekazuje danych do państwa trzeciego lub organizacji międzynarodowych.
                                    <br />
                                    c) Przetwarzane dane są przechowywane przez 24h od zakończenia usługi
                                    <br />
                                    d) Wypożyczającemu przysługuje prawo dostępu do jego danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu wobec ich przetwarzania, prawo do przenoszenia danych, a także wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
                                    <br />
                                    e) Dane nie będą podlegać zautomatyzowaniu ani profilowaniu
                                    <br />
                                    f) Podanie danych jest dobrowolne, ale niezbędne do realizacji usługi wypożyczenia. Niepodanie tych danych uniemożliwi wykonanie usługi przez administratora, a tym samym wypożyczenie sprzętu.
                                </li>
                            </ol>
                        </div>
                    </section>

                    {/* Separator */}
                    <div className="border-t border-gray-300 my-8"></div>

                    {/* REGULAMIN BAWIALNI */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            REGULAMIN BAWIALNI
                        </h2>
                        
                        <div className="text-sm leading-relaxed">
                            <ol className="space-y-3 list-decimal list-inside">
                                <li>Dzieci wchodzą na salę zabaw po wcześniejszym uiszczeniu opłaty w kasie zgodnie z cennikiem.</li>
                                
                                <li>Bawialnia przeznaczona jest dla dzieci w wieku od 1 do 12 lat.</li>
                                
                                <li>Za bezpieczną zabawę dzieci w sali zabaw odpowiedzialność ponoszą rodzice/ opiekunowie. Z jednym dzieckiem może wejść max 2 opiekunów.</li>
                                
                                <li>Sala zabaw udostępnia klientom urządzenia zabawowe nie sprawuje jednak opieki nad dziećmi.</li>
                                
                                <li>Opłata za przekroczenie czasu 5 zł/10 minut.</li>
                                
                                <li>Nie zwracamy kosztów niewykorzystanego czasu.</li>
                                
                                <li>Całkowity zakaz wchodzenia na teren bawialni z lodami oraz jedzeniem.</li>
                                
                                <li>Za rzeczy pozostawione na terenie całego obiektu firma nie ponosi odpowiedzialności.</li>
                                
                                <li>Zakaz wejścia na konstrukcję bawialni w obuwiu.</li>
                                
                                <li>Na terenie całego obiektu obowiązuje bezwzględny zakaz palenia papierosów i spożywania alkoholu.</li>
                                
                                <li>Podczas zabawy dzieci nie mogą mieć założonych: łańcuszków, zegarków, pierścionków oraz jakichkolwiek ostrych przedmiotów.</li>
                                
                                <li>
                                    W bawialni zabrania się:
                                    <br />
                                    - wspinania po ścianach (siatkach) konstrukcji zabawowej
                                    <br />
                                    - skakania ze zjeżdżalni oraz wchodzenia pod prąd
                                    <br />
                                    - wchodzenia na obszary, które są wyłączone z zabawy np. obszar za konstrukcją lub dmuchańcem
                                    <br />
                                    - niszczenia konstrukcji zabawowej, zabawek lub elementów wystroju.
                                </li>
                                
                                <li>Jeśli dziecko będzie zachowywać się agresywnie i przeszkadzać w zabawie innym, personel bawialni może skrócić czas pobytu bez zwrotu kosztów.</li>
                                
                                <li>Za szkody na mieniu lub osobie spowodowane przez dziecko odpowiadają rodzice/ opiekunowie.</li>
                                
                                <li>Wszelkie wątpliwe kwestie dotyczące korzystania z sali zabaw rozstrzyga personel.</li>
                                
                                <li>Wykupienie biletu jest jednoznaczne z akceptacją regulaminu.</li>
                            </ol>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}