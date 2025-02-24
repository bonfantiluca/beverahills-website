import React from "react";
import { motion } from "framer-motion";
export const revalidate=0;
const ContattiPage =  () => {

    return (
        <div className="grid grid-cols-2 space-x-8" >
            <motion.div 
                className="mt-16 p-8 rounded-2xl text-center shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-semibold  mb-4">Azienda Agricola Beverahills <br /> di Bonfanti Giuseppe</h2>
                <p className="text-lg  font-semibold">Via Santuario Inferiore 9, Barzago, LC</p>
            </motion.div>
            <motion.div 
                className="mt-16 p-8 rounded-2xl text-center shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-semibold mb-4">Contattaci</h2>
                <p className="text-lg ">Email: <a href="mailto:info@beverahills.it" className="text-rosso font-semibold underline">info@beverahills.com</a></p>
                <p className="text-lg mt-2">Telefono: <a href="tel:+393358347925" className="font-semibold text-rosso">+39 335 834 7925</a></p>
            </motion.div>
        </div>
        
    );
    };
export default ContattiPage;