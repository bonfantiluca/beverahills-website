import React, { useState } from "react";
import Info from "../components/info";
import NutritionalTable from "../components/nutritionalTable";
import AmbientalTable from "../components/ambientalTable";

const europeanLanguages = {
    it: "Italiano", en: "English", de: "Deutsch", es: "Español"
};
const translations = {
    it: {
        title: "Etichetta Alimentare",
        not_found: "Prodotto non trovato",
        ingredients: "Ingredienti",
        nutrition: "Dichiarazione nutrizionale",
        environment: "Etichetta ambientale",
        category: "Categoria",
        material: "Materiale",
        code: "Codice Ambientale",
        waste: "Destinazione Rifiuto"
    },
    en: {
        title: "Food Label",
        not_found: "Product not found",
        ingredients: "Ingredients",
        nutrition: "Nutritional Declaration",
        environment: "Environmental Label",
        category: "Category",
        material: "Material",
        code: "Environmental Code",
        waste: "Waste Destination"
    },
    de: {
        title: "Lebensmittelkennzeichnung",
        not_found: "Produkt nicht gefunden",
        ingredients: "Zutaten",
        nutrition: "Nährwertdeklaration",
        environment: "Umweltkennzeichnung",
        category: "Kategorie",
        material: "Material",
        code: "Umweltcode",
        waste: "Abfallentsorgung"
    },
    es: {
        title: "Etiqueta Alimentaria",
        not_found: "Producto no encontrado",
        ingredients: "Ingredientes",
        nutrition: "Declaración nutricional",
        environment: "Etiqueta medioambiental",
        category: "Categoría",
        material: "Material",
        code: "Código Medioambiental",
        waste: "Destino del residuo"
    }
};

const productData = {
    name: "Germoglio",
    image: "../../germoglio.png",
    price: 12.99,
    denominazione: "Terre Lariane IGT Rosso",
    vitigno: "100% Pinot Nero",
    annata: "2024",
    gradazione: 12,
    aromi: "Frutti rossi, spezie, vaniglia",
    affinamento: "Acciaio",
    regione: "Lombardia",
    paese: "Italia",
    size: 0.75,
    ingredients: "Uva, Conservanti e antiossidanti: metabisolfito di potassio (E224), Agenti stabilizzanti: gomma arabica (E414), poliaspartato di potassio (E 456), Gas e gas d’imballaggio: azoto (E941). ",
    nutritionalValues: {
        energy: "281 kJ/ 68 kcal",
        fat: "0 g",
        di_cui_saturi: "0 g",
        carbohydrates: "0,7 g",
        di_cui_zuccheri: "0 g",
        protein: "0 g",
        sale: "0 g"
    },
    environmentalInfo: {
        it: [
            { category: "Bottiglia", material: "Vetro", code: "GL70", waste: "Raccolta vetro" },
            { category: "Tappo", material: "Sughero", code: "FOR51", waste: "Organico" },
            { category: "Capsula", material: "Alluminio", code: "ALU41", waste: "Raccolta metalli" },
            { category: "Gabbietta", material: "Ferro", code: "FE40", waste: "Raccolta metalli" }
        ],
        en: [
            { category: "Bottle", material: "Glass", code: "GL70", waste: "Glass collection" },
            { category: "Cork", material: "Cork", code: "FOR51", waste: "Organic" },
            { category: "Cap", material: "Aluminum", code: "ALU41", waste: "Metal collection" },
            { category: "Wire cage", material: "Iron", code: "FE40", waste: "Metal collection" }
        ],
        de: [
            { category: "Flasche", material: "Glas", code: "GL70", waste: "Glasentsorgung" },
            { category: "Korken", material: "Kork", code: "FOR51", waste: "Organisch" },
            { category: "Kapsel", material: "Aluminium", code: "ALU41", waste: "Metallentsorgung" },
            { category: "Drahtkorb", material: "Eisen", code: "FE40", waste: "Metallentsorgung" }
        ],
        es: [
            { category: "Botella", material: "Vidrio", code: "GL70", waste: "Recogida de vidrio" },
            { category: "Tapón", material: "Corcho", code: "FOR51", waste: "Orgánico" },
            { category: "Cápsula", material: "Aluminio", code: "ALU41", waste: "Recogida de metales" },
            { category: "Alambre", material: "Hierro", code: "FE40", waste: "Recogida de metales" }
        ]
    }
};


const EtichettaAlimentareGermoglio = () => {
    const [lang, setLang] = useState("it");
    const [product] = useState(productData);

    return (
        <div className="bg-white flex flex-col items-center">
            <div className="w-full max-w-md px-4">
                <select
                    className="w-full border border-gray-300 rounded-md p-2 mb-4"
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                >
                    {Object.entries(europeanLanguages).map(([code, label]) => (
                        <option key={code} value={code}>{label}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
                <img src={product.image} alt={product.name} className="h-full max-h-[500px]" />
                <div className="mt-2 lg:mt-2 w-full">
                    <Info data={product} lang={lang} />
                </div>
                <h1 className="text-2xl font-bold my-4 w-full">{translations[lang].ingredients}</h1>
                <p>{product.ingredients}</p>
                <h1 className="text-2xl font-bold my-4 w-full">{translations[lang].nutrition}</h1>
                <NutritionalTable product={product.nutritionalValues} lang={lang} />
                <h1 className="text-2xl font-bold my-4 w-full">{translations[lang].environment}</h1>
                <AmbientalTable product={product.environmentalInfo[lang]} lang={lang} />
            </div>
        </div>
    );
};

export default EtichettaAlimentareGermoglio;
