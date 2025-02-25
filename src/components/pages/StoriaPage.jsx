import React from "react";
import { motion } from "framer-motion";

const sections = [
    {
      text: "Sulle colline di Bevera, tra la Brianza e il lago di Como, si trova la tenuta Beverahills. "
            + "È proprio a Bevera che Giuseppe Bonfanti, imprenditore agricolo, nasce, cresce e invecchia.",
      image: "/beverahills_vigneto_4.jpg",
    },
    {
      text: "La storia di Giuseppe è una parabola di produzione locale in cui si conciliano visioni nuove e duro lavoro, fin dall’inizio."
            + "Giuseppe, infatti, a poco più di vent’anni, decide di lasciare il posto fisso e lanciarsi nell’esperienza imprenditoriale di"
            + " aprire una sua azienda agricola. A ispirarlo è anche suo padre, a sua volta agricoltore, seppure più tradizionale, dedito a seminativi e concimazioni.",
      image: "/beverahills_vigneto_5.jpg",
    },
    {
      text: "Nasce così l’azienda agricola Bonfanti Giuseppe, che si occupa di florovivaismo e cura e manutenzione del verde. "+
      "Dopo anni di onorata carriera e impegno, Giuseppe ingrandisce il suo podere, acquistando terreni limitrofi a quelli in suo possesso. Questo perché guarda avanti, nella realizzazione del suo sogno: avere un proprio vigneto.",
      image: "/beverahills_vigneto_6.jpg",
    },
    {
        text: "Finalmente, arrivato a un’età in cui azzardare non fa più paura, il sogno si realizza, e da questo sogno nascono i primi vini di BeveraHills",
        image: "/beverahills_vini_1.jpg",
      },
    {
      text: "BeveraHills. Ogni dettaglio conta, ogni sorso racconta.",
      image: "/beverahills_vigneto_7.jpg",
    },
  ];

export const revalidate=0;
const StoriaPage =  () => {

    return (
        <div>
           <h2 className="text-4xl font-extrabold text-gray-800 titolo mb-4 text-center">La nostra storia.</h2>
            {sections.map((section, index) => (
                <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center py-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                >
                <img
                    src={section.image}
                    alt="Vigneto Beverahills"
                    className="w-full md:w-1/2 rounded-2xl shadow-lg"
                />
                <div className="w-full md:w-1/2 p-6 md:ml-6 md:mr-6 shadow-md shadow-verde_scuro rounded-xl">
                    <p className="text-lg text-gray-700 font-medium">{section.text}</p>
                </div>
                </motion.div>
            ))}
            <div className="text-center mt-10 shadow-md shadow-verde_chiaro p-6 rounded-2xl mx-8">
                <h2 className="text-2xl font-semibold  ">
                “Il grande vino nasce quando l’uomo è in sintonia con le energie della natura,
                </h2>
                <h2 className="text-2xl font-medium  mt-2 ">
                solo l’uomo sa creare la spinta di amore che determina la fusione completa tra vino e natura.”
                </h2>
            </div>
            <img src="/beverahills_vigneto_8.jpg" alt="vigneto Beverahills" className="my-10 rounded-2xl shadow-lg" />

        </div>
        
    );
    };
export default StoriaPage;