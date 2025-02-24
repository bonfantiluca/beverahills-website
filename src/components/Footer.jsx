import React from 'react';
import './footer.css'; // Assuming you have a CSS file for styles
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    const bubbles = Array.from({ length: 128 }, (_, i) => (
        <div
            key={i}
            className="bubble"
            style={{
                '--size': `${2 + Math.random() * 2}rem`,
                '--distance': `${6 + Math.random() * 2}rem`,
                '--position': `${-5 + Math.random() * 110}%`,
                '--time': `${2 + Math.random() * 2}s`,
                '--delay': `${-1 * (2 + Math.random() * 2)}s`,
            }}
        />
    ));

    return (
        <footer className="footer">
            <div className="bubbles">
                {bubbles}
            </div>
            <div className="flex justify-between gap-4 p-8 text-center bg-rosso z-10 text-pesca">
                <div className="flex justify-center items-center w-full gap-16 ">
                    <div className="flex flex-col mb-1">
                        <p>Az. Agr. Beverahills <br />di Bonfanti Giuseppe</p>
                        <p>Via Santuario inferiore 9, Barzago, LC</p>
                    </div>
                    <div className="flex flex-col mb-1">
                    <p>Email: <a href="mailto:info@beverahills.it">info@beverahills.com</a></p>
                    <p>Cell: <a href="tel:+393358347925">+39 335 834 7925</a></p>
                    </div>
                    <div className="flex flex-col items-center mb-1">
                    <p>Seguici su Instagram</p>
                    <a href="https://www.instagram.com/bonfantilucaa/"><FaInstagram /></a>
                    </div>
                    <div className="flex flex-col items-center">
                    <img src="/vettoriale-beverahills-pesca.svg" alt="logo" className='w-32' />
                    <p className="text-sm">&copy; {new Date().getFullYear()}  BeveraHill. Tutti i diritti sono riservati.</p>
                </div>
                </div>
                
            </div>
            <svg style={{ position: 'fixed', top: '100vh' }}>
                <defs>
                    <filter id="blob">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="blob"
                        />
                    </filter>
                </defs>
            </svg>
        </footer>
    );
};

export default Footer;
