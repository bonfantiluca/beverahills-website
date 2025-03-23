import React from "react";

const translations = {
    it: {
        environment: "Etichetta ambientale",
        category: "Categoria",
        material: "Materiale",
        code: "Codice",
        waste: "Destinazione Rifiuto"
    },
    en: {
        category: "Category",
        material: "Material",
        code: "Code",
        waste: "Waste Destination"
    }
};


const AmbientalTable = ({ product, lang }) => {

    return(
        <div className="mt-2 md:mt-6">
             <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                            <tr>
                                <th className="px-1 py-2 border-b">{translations[lang].category}</th>
                                <th className="px-1 py-2 border-b">{translations[lang].material}</th>
                                <th className="px-1 py-2 border-b">{translations[lang].code}</th>
                                <th className="px-1 py-2 border-b">{translations[lang].waste}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-1 py-2 border-b">{item.category}</td>
                                    <td className="px-1 py-2 border-b">{item.material}</td>
                                    <td className="px-1 py-2 border-b">{item.code}</td>
                                    <td className="px-1 py-2 border-b">{item.waste}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table> 
                    </div>
    );
    
};  

export default AmbientalTable;