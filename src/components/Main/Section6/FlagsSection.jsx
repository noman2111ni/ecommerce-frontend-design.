import React from 'react';
import flagsData from './flagsData'; // Adjust path if needed

const FlagsSection = () => {
    return (
        <div className="py-5">
            <h2 className="text-2xl font-semibold mb-6 ">Supplier by region</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {flagsData.map((country, index) => (
                    <div
                        key={index}
                        className="flex items-center p-2 border border-gray-400  hover:shadow-lg rounded-sm  "
                    >
                        <img
                            src={country.flag}
                            alt={country.name}
                            className="w-18 h-12 object-contain mb-2"
                        />
                        <div className='mb-2'>
                            <h3 className="text-sm font-semibold">{country.name}</h3>
                            <p className="text-xs text-gray-600">{country.capital}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlagsSection;
