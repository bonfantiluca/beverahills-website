import { Link } from "react-router";
import React from "react";
import MainNav from "./Main-Nav";

const NavBar = () => {
  return (
    <div className="bg-verde_scuro">
      <div className="mx-auto xl:mx-24 2xl:mx-36 ">
        <div className="flex items-center h-16 justify-between">
          {/* Logo e link */}
          <div className="relative flex items-center w-full justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo per schermi grandi */}
            <Link to="/" className="hidden md:flex items-center">
              <h1 className="text-4xl sm:text-5xl  text-pesca text-end titolo">Beverahills</h1>
            </Link>

            {/* MainNav (menu desktop) */}
            <MainNav />
            <Link to="/" className="md:hidden flex items-center justify-center w-full">
              <h1 className="text-4xl sm:text-5xl text-pesca text-center titolo">Beverahills</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
