
import React from "react";
const nutritionalLabels = {
    it: {
        nutrient: "Nutriente",
        per100ml: "Per 100 ml",
        energy: "Energia",
        fat: "Grassi",
        di_cui_saturi: "Di cui saturi",
        carbohydrates: "Carboidrati",
        di_cui_zuccheri: "Di cui zuccheri",
        protein: "Proteine",
        sale: "Sale"
    },
    en: {
        nutrient: "Nutrient",
        per100ml: "Per 100 ml",
        energy: "Energy",
        fat: "Fat",
        di_cui_saturi: "of which saturates",
        carbohydrates: "Carbohydrates",
        di_cui_zuccheri: "of which sugars",
        protein: "Protein",
        sale: "Salt"
    },
    de: {
        nutrient: "Nährstoff",
        per100ml: "Pro 100 ml",
        energy: "Energie",
        fat: "Fett",
        di_cui_saturi: "davon gesättigte Fettsäuren",
        carbohydrates: "Kohlenhydrate",
        di_cui_zuccheri: "davon Zucker",
        protein: "Eiweiß",
        sale: "Salz"
    },
    es: {
        nutrient: "Nutriente",
        per100ml: "Por 100 ml",
        energy: "Energía",
        fat: "Grasas",
        di_cui_saturi: "de las cuales saturadas",
        carbohydrates: "Carbohidratos",
        di_cui_zuccheri: "de los cuales azúcares",
        protein: "Proteínas",
        sale: "Sal"
    }
};

const NutritionalTable = ({ product, lang = "it" }) => {
    const labels = nutritionalLabels[lang] || nutritionalLabels.en;

    return (
        <div className="mt-2 md:mt-6 w-full">
            <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-2 py-2 text-left">{labels.nutrient}</th>
                        <th className="border border-gray-300 px-2 py-2 text-left">{labels.per100ml}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 px-2 py-2">{labels.energy}</td>
                        <td className="border border-gray-300 px-2 py-2">{product.energy}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-2 py-2">{labels.fat}</td>
                        <td className="border border-gray-300 px-2 py-2">{product.fat}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-2 py-2">{labels.di_cui_saturi}</td>
                        <td className="border border-gray-300 px-2 py-2">{product.di_cui_saturi}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-2 py-2">{labels.carbohydrates}</td>
                        <td className="border border-gray-300 px-2 py-2">{product.carbohydrates}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-2 py-2">{labels.di_cui_zuccheri}</td>
                        <td className="border border-gray-300 px-2 py-2">{product.di_cui_zuccheri}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-2 py-2">{labels.protein}</td>
                        <td className="border border-gray-300 px-2 py-2">{product.protein}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-2 py-2">{labels.sale}</td>
                        <td className="border border-gray-300 px-2 py-2">{product.sale}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};


export default NutritionalTable;
