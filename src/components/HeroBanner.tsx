import React from 'react';

const HeroBanner = () => {
  console.log('HeroBanner rendered');

  return (
    <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Descubre tu Belleza
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Los mejores productos de belleza para realzar tu belleza natural. 
            Maquillaje, cuidado de la piel y más.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Ver Productos
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors">
              Ofertas Especiales
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-10 rounded-full"></div>
      </div>
    </div>
  );
};

export default HeroBanner;