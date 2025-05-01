import { useLocation } from "react-router";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import clsx from "clsx";

const MainNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const routes = [
        { label: "Home", href: "/" },
        { label: "La storia", href: "/storia" },
        { label: "Il vigneto", href: "/vigneto" },
        { label: "I nostri vini", href: "/vini" },
        { label: "Contatti", href: "/contatti" }
    ];
    
    return (
        <nav className="flex justify-between items-center h-16">
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-3xl focus:outline-none">
                    {menuOpen ? <AiOutlineClose className="text-pesca" /> : <AiOutlineMenu className="text-pesca" />}
                </button>
            </div>

            {/* Navbar desktop */}
            <div className="hidden md:flex mx-8 space-x-4 lg:space-x-6">
                {routes.map((route) => (
                    <a key={route.href} href={route.href} 
                    className={clsx(
                        "text-lg font-normal transition-colors",
                        location.pathname === route.href ? "text-verde_chiaro font-medium" : "text-pesca hover:text-verde_chiaro"
                    )}
                    >
                        {route.label}
                    </a>
                ))}
            </div>

            {/* Menu a tendina mobile */}
            {menuOpen && (
                <div className="md:hidden absolute top-10 left-0 w-full bg-verde_scuro shadow-lg z-50 flex flex-col space-y-4 mt-4 py-6">
                    {routes.map((route) => (
                        <a key={route.href} href={route.href}
                        onClick={() => setMenuOpen(false)}
                        className={clsx(
                            "relative p-1 text-center text-base font-medium transition-colors duration-300 ease-in-out",
                            location.pathname === route.href ? "text-verde_chiaro font-normal" : "text-pesca hover:text-verde_chiaro"
                        )}>
                            {route.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default MainNav;
