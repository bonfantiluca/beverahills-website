import React from 'react';
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" bg-rosso text-pesca p-6 md:px-16  ">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-center md:text-left max-w-screen-2xl mx-auto">
                
                {/* Info Azienda */}
                <div className="flex flex-col">
                    <p>Az. Agr. Beverahills <br />di Bonfanti Giuseppe</p>
                    <p>Via Santuario inferiore 9, Barzago, LC</p>
                </div>

                {/* Contatti */}
                <div className="flex flex-col">
                    <p>Email: <a href="mailto:info@beverahills.it" className="underline hover:text-white transition">info@beverahills.it</a></p>
                    <p>Cell: <a href="tel:+393358347925" className="underline hover:text-white transition">+39 335 834 7925</a></p>
                </div>

                {/* Instagram */}
                <div className="flex flex-col items-center justify-center whitespace-nowrap">
                    <p>Seguici su</p>
                    <a href="https://www.instagram.com/beverahills/" className="text-2xl hover:text-white transition">
                        <FaInstagram />
                    </a>
                </div>

                {/* Logo */}
                <div className="flex justify-center md:justify-end">
                    <img src="/vettoriale-beverahills-pesca.svg" alt="logo" className="w-24" />
                </div>
            </div>

            {/* Copyright */}
            <p className="text-sm text-center mt-4">&copy; {new Date().getFullYear()} Beverahills. Tutti i diritti sono riservati.</p>
        </footer>
    );
};

export default Footer;
