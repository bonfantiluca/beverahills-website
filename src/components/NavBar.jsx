import { Link } from "react-router";
import MainNav from "./Main-Nav";
import React, { useState, useEffect, useCallback } from "react";

const NavBar = () => {

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0); // Utilizza lo stato di React

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      // Scroll verso il basso, nascondi la navbar
      setShowNavbar(false);
    } else {
      // Scroll verso l'alto, mostra la navbar
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY); // Usa setLastScrollY per aggiornare lo stato
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]); // La funzione handleScroll è ora una dipendenza stabile

  return (
    <div  className={`bg-verde_scuro fixed top-0 left-0 w-full transition-all duration-300 z-10 ${
      showNavbar ? "transform translate-y-0" : "transform -translate-y-full"}`} >
      <div className="mx-auto max-w-screen-2xl ">
        <div className="flex items-center h-16 justify-between">
          {/* Logo e link */}
          <div className="relative flex items-center w-full justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo per schermi grandi */}
            <Link to="/" className="hidden md:flex items-center">
              <h1 className="text-4xl sm:text-5xl  text-pesca text-end titolo hover:text-verde_chiaro transition">Beverahills</h1>
            </Link>

            {/* MainNav (menu desktop) */}
            <MainNav />
            <Link to="/" className="md:hidden flex items-center justify-center w-full">
              <h1 className="text-4xl sm:text-5xl text-pesca text-center titolo hover:text-verde_chiaro transition">Beverahills</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
