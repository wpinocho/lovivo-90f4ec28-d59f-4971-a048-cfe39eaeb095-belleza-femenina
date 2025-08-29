import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  console.log('Footer rendered');

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-pink-400 mb-4">BeautyStore</h3>
            <p className="text-gray-300 mb-4">
              Tu tienda de confianza para productos de belleza de alta calidad. 
              Realza tu belleza natural con nuestros productos seleccionados.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors">Sobre Nosotros</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Productos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Ofertas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Maquillaje</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Cuidado de la Piel</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Cabello</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Fragancias</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Accesorios</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-pink-400 mr-3" />
                <span className="text-gray-300">Av. Belleza 123, Ciudad</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-pink-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-pink-400 mr-3" />
                <span className="text-gray-300">info@beautystore.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 BeautyStore. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;