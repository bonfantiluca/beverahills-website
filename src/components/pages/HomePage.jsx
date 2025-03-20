import React from "react";
import { motion } from "framer-motion";

export const revalidate = 0;
const HomePage = () => {
    const vineyardDetails = [
        
        {
            image: "beverahills_vigneto_1.jpg",
            text: "Un viaggio che inizia dalla terra e finisce nel cuore."
        },
        {
            image: "beverahills_vigneto_3.jpg",
            text: "Ogni filare racconta una storia, ogni grappolo racchiude un'emozione."
        },
        {
            image: "beverahills_vigneto_2.webp",
            text: "Dalla vigna al calice, celebriamo la passione per il vino."
        }
    ];

    return (
        <div>
            <motion.div 
                className="flex flex-col justify-center items-center py-8 bg-rosso rounded-2xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <img src="/vettoriale-beverahills-pesca.svg" alt="Bevera Hills" className="w-40 sm:w-52 md:w-72 xl:w-80" />
                <h2 className="text-2xl sm:text-4xl text-pesca text-center">
                    Ogni dettaglio conta,  <br /> ogni sorso <span className="corsivo">racconta </span>
                </h2>
            </motion.div>

            <div className="grid pt-8 grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                {vineyardDetails.map((item, index) => (
                    <motion.div 
                        key={index} 
                        className="flex-col items-center justify-center border-2 border-verde_scuro p-4 rounded-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img src={item.image} alt="Vigneto" className="rounded-2xl w-full" />
                        <h2 className="text-left font-medium text-2xl sm:text-3xl pt-4 md:text-2xl text-verde_scuro">
                            {item.text}
                        </h2>
                    </motion.div>
                ))}
            </div>

            <div className="grid md:pt-8 grid-cols-1 gap-6 md:gap-0 pt-32 md:grid-cols-2" >
                <motion.div 
                    className="relative flex items-center justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl text-center border-2 border-verde_scuro bg-verde_scuro text-verde_chiaro font-medium p-4 rounded-2xl">
                        <span className="relative z-20">Cinque ettari di vigneto </span> <br /><br /><span className="text-pesca">abbracciati</span><br /> <br /> dai rami del lago di Como.
                    </h2>
                    <img src="/lago.svg" alt="Lago" className="absolute -mt-72 md:-mt-60 lg:-mt-72 opacity-50" />
                </motion.div>
                <motion.video 
                    className="rounded-2xl" 
                    controls 
                    muted 
                    autoPlay
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <source src="VideoVigneto.mp4" type="video/mp4" />
                </motion.video>
            </div>
        </div>
    );
};

export default HomePage;