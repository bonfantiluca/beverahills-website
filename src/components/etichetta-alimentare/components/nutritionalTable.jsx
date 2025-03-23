
import React from "react";

const NutritionalTable= ({ product }) => {
    console.log(product);
    return (
        <div className="mt-2 md:mt-6 w-full">
            <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-2 py-2 text-left">Nutriente</th>
                        <th className="border border-gray-300 px-2 py-2 text-left">Per 100 ml</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 px-2 py-2">Energia</td>
                        <td className="border border-gray-300 px-2 py-2">{product.energy}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-2 py-2">Grassi</td>
                        <td className="border border-gray-300 px-2 py-2">{product.fat}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-2 py-2">Di cui saturi</td>
                        <td className="border border-gray-300 px-2 py-2">{product.di_cui_saturi}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-2 py-2">Carboidrati</td>
                        <td className="border border-gray-300 px-2 py-2">{product.carbohydrates}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-2 py-2">Di cui zuccheri</td>
                        <td className="border border-gray-300 px-2 py-2">{product.di_cui_zuccheri}</td>
                    </tr>
                    
                    <tr>
                        <td className="border border-gray-300 px-2 py-2">Proteine</td>
                        <td className="border border-gray-300 px-2 py-2">{product.protein}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-2 py-2">Sale</td>
                        <td className="border border-gray-300 px-2 py-2">{product.sale}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default NutritionalTable;
