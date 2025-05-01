import React from "react";

const infoTranslations = {
    it: {
        denominazione: "Denominazione",
        vitigno: "Vitigno",
        annata: "Annata",
        gradazione: "Gradazione",
        affinamento: "Affinamento",
        regione: "Regione",
        paese: "Prodotto in",
        formato: "Formato"
    },
    en: {
        denominazione: "Name of origin",
        vitigno: "Grape variety",
        annata: "Vintage",
        gradazione: "Alcohol content",
        affinamento: "Aging",
        regione: "Region",
        paese: "Produced in",
        formato: "Size"
    },
    de: {
        denominazione: "Ursprungsbezeichnung",
        vitigno: "Rebsorte",
        annata: "Jahrgang",
        gradazione: "Alkoholgehalt",
        affinamento: "Ausbau",
        regione: "Region",
        paese: "Hergestellt in",
        formato: "Flaschengröße"
    },
    es: {
        denominazione: "Denominación",
        vitigno: "Variedad de uva",
        annata: "Año",
        gradazione: "Graduación alcohólica",
        affinamento: "Crianza",
        regione: "Región",
        paese: "Producido en",
        formato: "Formato"
    }
};


const Info = ({ data, lang = "it" }) => {
    const labels = infoTranslations[lang] || infoTranslations.en;

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <p className="text-lg text-gray-500">Beverahills</p>
            <hr className="my-4" />
            <div className="text-sm sm:text-base text-center">
                {[
                    { key: "denominazione", value: data.denominazione },
                    { key: "vitigno", value: data.vitigno },
                    { key: "annata", value: data.annata },
                    { key: "gradazione", value: `${data.gradazione}%` },
                    // { key: "aromi", value: data.aromi },
                    { key: "affinamento", value: data.affinamento },
                    { key: "regione", value: data.regione },
                    { key: "paese", value: data.paese },
                    { key: "formato", value: `${data.size} L` }
                ].map(({ key, value }) => (
                    <div key={key} className="flex items-center gap-x-4">
                        <h3 className="font-medium text-black">{labels[key]}:</h3>
                        <h3 className="font-semibold text-black">{value}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Info;
