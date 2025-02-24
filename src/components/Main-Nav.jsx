import { Link } from "react-router";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Importa le icone hamburger e close
import { useState } from "react";
import clsx from "clsx";


const MainNav = () => {

    const [menuOpen, setMenuOpen] = useState(false); // Stato per gestire il menù a tendina

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle per aprire o chiudere il menù
    };

    const routes = [
        {
            label: "La storia",
            href: "/storia",
        },
        {
            label: "Il vigneto",
            href: "/vigneto",
        },
        {
            label: "I nostri vini",
            href: "/vini",
        },
        {
            label: "Contatti",
            href: "/contacts",
        }
    ]
    
    return (
        <nav className="flex justify-between items-center h-16">
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-3xl focus:outline-none">
                    {menuOpen ? <AiOutlineClose className="text-pesca" /> : <AiOutlineMenu className="text-pesca" />}
                </button>
            </div>

            <div className="hidden md:flex mx-8 space-x-4 lg:space-x-6">
                {routes.map((route) => (
                    <Link key={route.href} to={route.href} className={clsx("text-lg font-normal text-pesca transition-colors hover:text-rosso")}>
                        {route.label}
                    </Link>
                ))}
            </div>

            {/* Menu a tendina mobile */}
            {menuOpen && (
                <div className="md:hidden absolute top-10 left-0 w-full bg-verde_scuro shadow-lg z-50 flex flex-col space-y-4 mt-4 px-4 py-6">
                    {routes.map((route) => (
                        <Link key={route.href} to={route.href}
                        onClick={() => setMenuOpen(false)}
                         className={clsx(
                            "relative p-1 text-center text-base font-medium text-pesca transition-colors duration-300 ease-in-out after:absolute"
                            + "after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-logo-color after:content-[''] after:transition-all "
                            + "after:duration-300 after:ease-in-out hover:after:w-full")}>
                            {route.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default MainNav;
