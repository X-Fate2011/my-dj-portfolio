import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, []);
    
    return (
        <header className="bg-header shadow sticky top-0 z-50">
            <div className="mx-auto max-w-full px-4 py-4 flex items-center justify-between">
                
                {/* Logo */}
                <h1 className="text-xl font-bold">
                    <Link to="/" aria-label="X-Fate – Zur Startseite">
                        <img src="/logo.webp" alt="X-Fate Logo" className="h-10 w-auto"/>
                    </Link>
                </h1>
                
                {/* Burger Button */}
                <button
                    type="button"
                    className="sm:hidden p-2 rounded text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(true)}
                >
                    <span className="sr-only">Menü öffnen</span>
                    <FontAwesomeIcon icon={faBars} size="lg"/>
                </button>
                
                {/* Desktop Navigation */}
                <nav className="hidden sm:flex gap-6" aria-label="Hauptnavigation">
                    <NavLink to="/" className={({isActive}) => isActive ? "font-bold underline" : ""}>Start</NavLink>
                    <NavLink to="/mixes" className={({isActive}) => isActive ? "font-bold underline" : ""}>Mixes</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? "font-bold underline" : ""}>Über mich</NavLink>
                </nav>
            </div>
            
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}
            
            {/* Slide-In Mobile Menu */}
            <aside
                id="mobile-menu"
                className={`fixed top-0 right-0 w-full h-full bg-header text-white z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                role="dialog"
                aria-modal="true"
            >
                <div className="p-6 flex flex-col gap-6">
                    <button className="self-end text-white hover:text-gray-300"
                            onClick={() => setIsOpen(false)}
                            aria-label="Menü schließen">
                        <FontAwesomeIcon icon={faXmark} size="lg"/>
                    </button>
                    
                    <NavLink to="/" className={({isActive}) => isActive ? "font-bold underline" : ""} onClick={() => setIsOpen(false)}>Start</NavLink>
                    <NavLink to="/mixes" className={({isActive}) => isActive ? "font-bold underline" : ""} onClick={() => setIsOpen(false)}>Mixes</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? "font-bold underline" : ""} onClick={() => setIsOpen(false)}>Über mich</NavLink>
                </div>
            </aside>
        </header>
    );
};

export default Header;