import React from 'react';
import { Palette, Sparkles, Scissors, Heart } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      name: 'Maquillaje',
      icon: Palette,
      description: 'Labiales, bases, sombras y más',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      name: 'Cuidado de la Piel',
      icon: Sparkles,
      description: 'Cremas, serums y tratamientos',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      name: 'Cabello',
      icon: Scissors,
      description: 'Shampoos, mascarillas y styling',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Fragancias',
      icon: Heart,
      description: 'Perfumes y colonias exclusivas',
      color: 'bg-rose-100 text-rose-600'
    }
  ];

  console.log('Categories component rendered');

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explora Nuestras Categorías
          </h2>
          <p className="text-lg text-gray-600">
            Encuentra todo lo que necesitas para tu rutina de belleza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;