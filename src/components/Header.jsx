'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
    ChevronDownIcon,
    ChevronUpIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
    const [menuShouldRender, setMenuShouldRender] = useState(false);

    // State for desktop dropdown menus
    const [activeDropdown, setActiveDropdown] = useState(null);
    const hoverTimeoutRef = useRef(null);

    // Funkcje do obsługi dropdown menu z opóźnieniami
    const handleMouseEnter = (dropdownName) => {
        // Anuluj poprzedni timeout jeśli istnieje
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        setActiveDropdown(dropdownName);
    };

    const handleMouseLeave = () => {
        // Ustaw timeout na zamknięcie dropdown po 300ms
        hoverTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 300);
    };

    const handleDropdownMouseEnter = () => {
        // Anuluj timeout gdy mysz wchodzi na dropdown
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
    };

    const handleDropdownMouseLeave = () => {
        // Ustaw timeout na zamknięcie dropdown po 200ms
        hoverTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 200);
    };

    // Cleanup function to clear timeouts on unmount
    useEffect(() => {
        return () => {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            }
        };
    }, []);

    // Funkcja do otwierania/zamykania z opóźnieniem
    const toggleMobileMenu = () => {
        if (!mobileMenuOpen) {
            // Otwieranie z opóźnieniem
            setTimeout(() => {
                setMenuShouldRender(true);
                setMobileMenuOpen(true);
            }, 400); // np. 400 ms
        } else {
            // Zamknięcie natychmiast
            setMobileMenuOpen(false);
            setMenuShouldRender(false);
        }
    };

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="h-12 sm:h-16 lg:h-20"
                    />
                </Link>

                {/* Desktop menu */}
                <nav className="hidden md:flex ml-4 items-center space-x-8 text-base text-black font-light">
                    {/* Atrakcje */}
                    <div 
                        className="relative"
                        onMouseEnter={() => handleMouseEnter('atrakcje')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            href="/atrakcje"
                            className="flex items-center hover:text-purple-600 transition">
                            Atrakcje
                            <ChevronDownIcon className={`ml-1 h-4 w-4 transition ${activeDropdown === 'atrakcje' ? 'text-purple-600' : 'text-black'}`} />
                        </Link>
                        {activeDropdown === 'atrakcje' && (
                            <div 
                                className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-10 w-64 max-w-xs"
                                onMouseEnter={handleDropdownMouseEnter}
                                onMouseLeave={handleDropdownMouseLeave}
                            >
                                <ul className="py-2 text-base text-black">
                                    <li><a href="/atrakcje/wesole-miasteczko" className="block px-4 py-2 hover:bg-purple-100">Atrakcje wesołego miasteczka</a></li>
                                    <li><a href="/atrakcje/bawialnia" className="block px-4 py-2 hover:bg-purple-100">Atrakcje bawialni</a></li>
                                    <li><a href="/atrakcje/wypozyczalnia" className="block px-4 py-2 hover:bg-purple-100">Atrakcje wypożyczalni</a></li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Cenniki */}
                    <div 
                        className="relative"
                        onMouseEnter={() => handleMouseEnter('cenniki')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            href="/cenniki"
                            className="flex items-center hover:text-purple-600 transition"
                        >
                            Cenniki
                            <ChevronDownIcon className={`ml-1 h-4 w-4 transition ${activeDropdown === 'cenniki' ? 'text-purple-600' : 'text-black'}`} />
                        </Link>
                        {activeDropdown === 'cenniki' && (
                            <div 
                                className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-10 w-64 max-w-xs"
                                onMouseEnter={handleDropdownMouseEnter}
                                onMouseLeave={handleDropdownMouseLeave}
                            >
                                <ul className="py-2 text-base text-black">
                                    <li><Link href="/cenniki/wesole-miasteczko" className="block px-4 py-2 hover:bg-purple-100">Cennik wesołego miasteczka</Link></li>
                                    <li><Link href="/cenniki/bawialnia" className="block px-4 py-2 hover:bg-purple-100">Cennik bawialni</Link></li>
                                    <li><Link href="/cenniki/wypozyczalnia" className="block px-4 py-2 hover:bg-purple-100">Cennik wypożyczalni</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Noclegi */}
                    <div 
                        className="relative"
                        onMouseEnter={() => handleMouseEnter('noclegi')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            href="/noclegi"
                            className="flex items-center hover:text-purple-600 transition">
                            Noclegi
                            <ChevronDownIcon className={`ml-1 h-4 w-4 transition ${activeDropdown === 'noclegi' ? 'text-purple-600' : 'text-black'}`} />
                        </Link>
                        {activeDropdown === 'noclegi' && (
                            <div 
                                className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-10 w-64 max-w-xs"
                                onMouseEnter={handleDropdownMouseEnter}
                                onMouseLeave={handleDropdownMouseLeave}
                            >
                                <ul className="py-2 text-base text-black">
                                    <li><a href="/noclegi/aleksander" className="block px-4 py-2 hover:bg-purple-100">Ośrodek Aleksander</a></li>
                                    <li><a href="/noclegi/zuczek" className="block px-4 py-2 hover:bg-purple-100">Ośrodek Żuczek</a></li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Galeria */}
                    <div 
                        className="relative"
                        onMouseEnter={() => handleMouseEnter('galeria')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            href="/galeria"
                            className="flex items-center hover:text-purple-600 transition">
                            Galeria
                            <ChevronDownIcon className={`ml-1 h-4 w-4 transition ${activeDropdown === 'galeria' ? 'text-purple-600' : 'text-black'}`} />
                        </Link>
                        {activeDropdown === 'galeria' && (
                            <div 
                                className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-10 w-64 max-w-xs"
                                onMouseEnter={handleDropdownMouseEnter}
                                onMouseLeave={handleDropdownMouseLeave}
                            >
                                <ul className="py-2 text-base text-black">
                                    <li><Link href="/galeria/wesole-miasteczko" className="block px-4 py-2 hover:bg-purple-100">Galeria Wesołego Miasteczka</Link></li>
                                    <li><Link href="/galeria/bawialnia" className="block px-4 py-2 hover:bg-purple-100">Galeria bawialni</Link></li>
                                    <li><Link href="/galeria/wypozyczalnia" className="block px-4 py-2 hover:bg-purple-100">Galeria wypożyczalni</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <Link href="/urodziny" className="hover:text-purple-600 transition">Urodziny</Link>
                    <Link href="/kontakt" className="hover:text-purple-600 transition">Kontakt</Link>
                </nav>

                {/* Hamburger – tylko na mobile */}
                <button
                    className="md:hidden ml-auto"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Menu mobilne"
                >
                    {mobileMenuOpen ? (
                        <XMarkIcon className="h-6 w-6 text-black" />
                    ) : (
                        <Bars3Icon className="h-6 w-6 text-black" />
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {menuShouldRender && mobileMenuOpen && (
                <div className="md:hidden px-4 pb-4 pt-2 text-base text-black font-light border-t flex flex-col space-y-2 animate-fade-in">
                    <button
                        onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                        className="flex items-center justify-between w-full text-purple-600 font-medium"
                    >
                        Atrakcje
                        {mobileSubmenuOpen ? (
                            <ChevronUpIcon className="h-4 w-4" />
                        ) : (
                            <ChevronDownIcon className="h-4 w-4" />
                        )}
                    </button>
                    {mobileSubmenuOpen && (
                        <ul className="mt-1 pl-4 space-y-1">
                            <li><Link href="/atrakcje/wesole-miasteczko">Wesołe miasteczko</Link></li>
                            <li><Link href="/atrakcje/bawialnia">Bawialnia</Link></li>
                            <li><Link href="/atrakcje/wypozyczalnia">Wypożyczalnia</Link></li>
                        </ul>
                    )}

                    <Link href="/cenniki/wesole-miasteczko">Cennik</Link>
                    <Link href="/noclegi">Noclegi</Link>
                    <Link href="/galeria/wesole-miasteczko">Galeria</Link>
                    <Link href="/urodziny">Urodziny</Link>
                    <Link href="/kontakt">Kontakt</Link>
                </div>
            )}
        </header>
    );
}
