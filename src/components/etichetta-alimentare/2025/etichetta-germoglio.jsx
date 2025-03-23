import React, { useState } from "react";
import Info from "../components/info";
import NutritionalTable from "../components/nutritionalTable";
import AmbientalTable from "../components/ambientalTable";

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
    }
};

const productData = {
    name: "Germoglio",
    image: "https://picsum.photos/500",
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
    environmentalInfo: [
        { category: "Bottiglia", material: "Vetro", code: "GL70", waste: "Raccolta vetro" },
        { category: "Tappo", material: "Sughero", code: "FOR51", waste: "Organico" },
        { category: "Capsula", material: "Alluminio", code: "ALU41", waste: "Raccolta metalli" },
        { category: "Gabbietta", material: "Ferro", code: "FE40", waste: "Raccolta metalli" }
    ]
};


const EtichettaAlimentareGermoglio = ({ lang = "it" }) => {
    const [product] = useState(productData);

    return (
        <div className="bg-white flex">
                <div className="flex flex-col items-center justify-center text-center ">
                    <img src={product.image} alt={product.name} className="h-full max-h-[500px]" />
                    <div className="mt-10 lg:mt-5 w-full">
                        <Info data={product}/>
                    </div>
                    <h1 className="text-2xl font-bold my-4">{translations[lang].ingredients}</h1>
                    <p>{product.ingredients}</p>
                    <h1 className="text-2xl font-bold my-4 w-full">{translations[lang].nutrition}</h1>
                    <NutritionalTable product={product.nutritionalValues} />
                    <h1 className="text-2xl font-bold my-4 w-full">{translations[lang].environment}</h1>
                    <AmbientalTable product={product.environmentalInfo} lang={lang} />
                </div>
        </div>
    );
};

export default EtichettaAlimentareGermoglio;
