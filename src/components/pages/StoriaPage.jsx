import React from "react";
import { motion } from "framer-motion";

const sections = [
    {
      text: "Sulle colline di Bevera, tra la Brianza e il lago di Como, si trova la tenuta Beverahills.\n"
            + "È proprio sulle colline di Bevera che Giuseppe Bonfanti trascorre l’infanzia, cresce e sviluppa la passione per l’agricoltura.",
      image: "beverahills_vigneto_4.webp",
    },
    {
      text: "La storia di Giuseppe è una parabola di produzione locale in cui si conciliano visioni nuove e duro lavoro, fin dall’inizio. "
            + "\nGiuseppe, infatti, a poco più di vent’anni, decide di lasciare il posto fisso e lanciarsi nell’esperienza imprenditoriale di"
            + " aprire una sua azienda agricola. A ispirarlo è anche suo padre, a sua volta agricoltore, seppure più tradizionale.",
      image: "beverahills_vigneto_5.webp",
    },
    {
      text: "Nasce così l’azienda agricola Bonfanti Giuseppe, che si occupa di florovivaismo e cura e manutenzione del verde. "+
      "Dopo anni di onorata carriera e impegno, Giuseppe ingrandisce il suo podere, acquistando terreni limitrofi a quelli in suo possesso. Questo perché guarda avanti, nella realizzazione del suo sogno: avere un proprio vigneto.",
      image: "beverahills_vigneto_6.webp",
    },
    {
        text: "Finalmente, arrivato a un’età in cui azzardare non fa più paura, il sogno si realizza, e da questo sogno nascono i primi vini di Beverahills.",
        image: "beverahills_vini_1.webp",
      },
    {
      text: "Beverahills.\nOgni dettaglio conta, ogni sorso racconta.",
      image: "beverahills_vigneto_7.webp",
    },
  ];

export const revalidate=0;
const StoriaPage =  () => {

    return (
        <div className="md:max-w-[80%] 3xl:max-w-full  mx-auto">
           <h2 className="text-4xl font-extrabold text-gray-800 titolo mb-4 text-center">La nostra storia.</h2>
            {sections.map((section, index) => (
                <motion.div
                key={index}
                className={`flex flex-col md:flex-row  items-center py-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse "
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                >
                <img
                    src={section.image}
                    alt="Vigneto Beverahills"
                    className="w-full md:w-1/2 rounded-2xl shadow-lg "
                />
                <div className="w-full md:w-1/2 p-6 md:ml-6 md:mr-6 shadow-md shadow-verde_scuro rounded-xl">
                    <p className="text-lg text-gray-700 font-medium whitespace-pre-line">{section.text}</p>
                </div>
                </motion.div>
            ))}
            <div className="text-center mt-10 shadow-md shadow-verde_chiaro p-6 rounded-2xl md:mx-8">
                <h2 className="text-xl md:text-2xl font-semibold  ">
                “Il grande vino nasce quando l’uomo è in sintonia con le energie della natura,
                </h2>
                <h2 className="text-xl md:text-2xl font-medium  mt-2 ">
                solo l’uomo sa creare la spinta di amore che determina la fusione completa tra vino e natura.”
                </h2>
            </div>
            <img src="beverahills_vigneto_8.webp" alt="vigneto Beverahills" className="my-10 rounded-2xl shadow-lg" />

        </div>
        
    );
    };
export default StoriaPage;