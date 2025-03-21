import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { PiMapPinArea } from "react-icons/pi";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";


const Counter = ({ from, to, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const [start, setStart] = useState(false); // Stato per controllare l'avvio del conteggio

  useEffect(() => {
    if (!start) return; // Non parte finché "start" è false
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < to) return prev + Math.ceil(to / 100);
        clearInterval(interval);
        return to;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [to, start]); // Dipendenze aggiornate

  return (
    <motion.span 
      className="text-3xl font-light text-verde_scuro"
      whileInView={() => setStart(true)} // Attiva il conteggio quando è visibile
    >
      {count}{suffix}
    </motion.span>
  );
};


const vineyardSections = [
    {
      title: "La Scelta del Nostro Vigneto",
      text: "Fin dall’inizio, il nostro obiettivo è stato chiaro: creare un vigneto che potesse esprimere al meglio il territorio di Beverahills.",
      image: "beverahills_vigneto_9.webp",
      counter : <div className=" mt-8 p-6 bg-gray-100 rounded-xl shadow-md flex flex-col items-center">
      <h3 className="text-xl font-medium text-gray-700 flex items-center"><IoLocationOutline /> Coordinate: </h3>
      <span className="text-2xl font-light text-verde_scuro">
      <Counter  from={0} to={45}/>.
      <Counter  from={0} to={75391}/>, &nbsp;
      <Counter  from={0} to={9}/>.
      <Counter  from={0} to={33028}/>
        </span>
    </div>
      
      
      
    },
    {
      title: "Ogni dettaglio conta",
      text: " Per questo, non ci siamo affidati al caso, ma abbiamo intrapreso un percorso di studio e ricerca approfondita. Con il supporto di enologi e agronomi, abbiamo analizzato nel dettaglio il suolo della nostra tenuta, valutandone la composizione, la struttura e la capacità di nutrire le viti. Ma non ci siamo fermati qui. Abbiamo considerato ogni elemento fondamentale per garantire il massimo benessere delle piante: l’esposizione alla luce solare, l’orientamento dei filari e le caratteristiche microclimatiche della zona.",
      image: "beverahills_vigneto_10.jpg",
      counter:<div className=" mt-8 p-6 bg-gray-100 rounded-xl shadow-md flex flex-col items-center">
      <h3 className="text-xl font-medium text-gray-700 flex items-center"><PiMapPinArea /> Superficie coltivata</h3>
      <Counter  from={0} to={4000} suffix=" m²" />
    </div>
    
    },
    {
      title: "Le Nostre Varietà",
      text: "Abbiamo scelto con cura le varietà da coltivare, puntando su vitigni che potessero esprimere al meglio il potenziale del nostro terroir.",
      image: "beverahills_uva_1.webp",
      counter:<div className="mt-8 p-6 bg-gray-100 rounded-xl shadow-md flex flex-col items-center">
      <h3 className="text-xl font-medium text-gray-700 flex items-center"><MdOutlineKeyboardDoubleArrowUp />
      Altitudine</h3>
      <Counter from={0} to={320} className="font-light" suffix=" m s.l.m." />
    </div>
    },
  ];
  
  const grapeVarieties = [
    {
      category: "Vitigni a bacca bianca",
      varieties: ["Sauvignon", "Chardonnay", "Solaris (Piwi)"],
      icon:"/icona_uva_bianca.png",
      shadowColor: "shadow-lime-800"
    },
    {
      category: "Vitigni a bacca rossa",
      varieties: ["Pinot Nero", "Merlot"],
        icon:"/icona_uva_rossa.png",
        shadowColor: "shadow-indigo-950"
    },
  ];



const VignetoPage =  () => {
    return (
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 titolo mb-4 text-center">Il nostro vigneto.</h2>
          
          {vineyardSections.map((section, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center py-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={section.image} alt="Vigneto" className="w-full md:w-1/2 rounded-2xl shadow-lg" />
              <div className="w-full md:w-1/2 p-6 md:ml-6 md:mr-6 shadow-md shadow-verde_scuro rounded-xl">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
                <p className="text-lg text-gray-700 font-medium whitespace-pre-line">{section.text}</p>
              </div>
                {section.counter}
              </div>
            </motion.div>
          ))}
      
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Le Nostre Varietà di Uva</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {grapeVarieties.map((group, index) => (
                <div key={index} className={`shadow-md ${group.shadowColor} p-6 rounded-xl`}>
                  <div className="flex items-center justify-center mb-8">
                    <h3 className="text-2xl font-semibold text-gray-800 underline ">{group.category}</h3>
                    <img src={group.icon} alt={group.category} className="w-8 h-8 ml-2" />
                  </div>
                  <ul className="text-lg text-gray-800">
                    {group.varieties.map((variety, i) => (
                      <li key={i} className="mb-2">{variety}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
};

export default VignetoPage;
