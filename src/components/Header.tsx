import React from 'react';
import { ShoppingBag, Search, Heart, User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  console.log('Header rendered, total items:', totalItems);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-pink-600">BeautyStore</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar productos de belleza..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
              <User className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors relative">
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-3">
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Maquillaje</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Cuidado de la Piel</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Cabello</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Fragancias</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Ofertas</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;