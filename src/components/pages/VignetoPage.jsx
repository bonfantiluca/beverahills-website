import React from "react";
import { motion } from "framer-motion";
const vineyardSections = [
    {
      title: "La Scelta del Nostro Vigneto",
      text: "Fin dall’inizio, il nostro obiettivo è stato chiaro: creare un vigneto che potesse esprimere al meglio il territorio di Beverahills. \n\n"
      +" Per questo, non ci siamo affidati al caso, ma abbiamo intrapreso un percorso di studio e ricerca approfondita. Con il supporto di enologi e agronomi, abbiamo analizzato nel dettaglio il suolo della nostra tenuta, valutandone la composizione, la struttura e la capacità di nutrire le viti. Ma non ci siamo fermati qui. Abbiamo considerato ogni elemento fondamentale per garantire il massimo benessere delle piante: l’esposizione alla luce solare, l’orientamento dei filari e le caratteristiche microclimatiche della zona.",
      image: "/beverahills_vigneto_9.jpg",
    },
    {
      title: "Le Nostre Varietà",
      text: "Abbiamo scelto con cura le varietà da coltivare, puntando su vitigni che potessero esprimere al meglio il potenziale del nostro terroir.",
      image: "/beverahills_uva_1.jpg",
    },
  ];
  
  const grapeVarieties = [
    {
      category: "Vitigni a bacca bianca",
      varieties: ["Sauvignon", "Chardonnay", "Solaris (Piwi)"],
      icon:"/icona_uva_bianca.png",
      shadowColor: "shadow-lime-400"
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
        <div >
            {vineyardSections.map((section, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row items-center my-12 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={section.image}
            alt="Vigneto"
            className="w-full md:w-1/2 rounded-2xl shadow-lg"
          />
          <div className="w-full md:w-1/2 p-6 md:ml-6 md:mr-6 shadow-md shadow-verde_scuro rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
            <p className="text-lg text-gray-700 font-medium whitespace-pre-line">{section.text}</p>
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