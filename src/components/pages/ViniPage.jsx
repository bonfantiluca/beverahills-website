import React from "react";

export const revalidate=0;
const ViniPage =  () => {

    return (
        <div >
          <h2 className="text-4xl font-extrabold text-gray-800 titolo mb-4 text-center">Il nostro vino.</h2>
          <img
                    src="beverahills_vini_1.jpg"
                    alt="Vigneto Beverahills"
                    className="w-full rounded-2xl shadow-lg py-8"
                />
        </div>
        
    );
    };
export default ViniPage;