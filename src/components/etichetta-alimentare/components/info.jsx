import React from "react";
const Info = ({ data }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <p className="text-lg text-gray-500">Beverahills</p>
            <hr className="my-4" />
            <div className={`text-sm sm:text-base  "text-center"`}>
                {[
                    { label: "Denominazione", value: data.denominazione },
                    { label: "Vitigno", value: data.vitigno },
                    { label: "Annata", value: data.annata },
                    { label: "Gradazione", value: `${data.gradazione}%` },
                    // { label: "Aromi", value: data.aromi },
                    { label: "Affinamento", value: data.affinamento },
                    { label: "Regione", value: data.regione },
                    { label: "Prodotto in", value: data.paese },
                    { label: "Formato", value: `${data.size} L` },
                ].map(({ label, value }) => (
                    <div
                        key={label}
                        className={`flex items-center gap-x-4`}
                    >
                        <h3 className="font-medium text-black">{label}:</h3>
                        <h3 className="font-semibold text-black">{value}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Info;
