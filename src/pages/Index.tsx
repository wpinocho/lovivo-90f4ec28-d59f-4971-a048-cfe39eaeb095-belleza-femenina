import React from 'react';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import Categories from '@/components/Categories';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { sampleProducts } from '@/data/products';

const Index = () => {
  console.log('Index page rendered');
  
  // Filtrar productos destacados
  const featuredProducts = sampleProducts.filter(product => product.isBestSeller || product.isNew);
  const newProducts = sampleProducts.filter(product => product.isNew);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <HeroBanner />
        <Categories />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid 
            products={featuredProducts} 
            title="Productos Destacados" 
          />
          
          <ProductGrid 
            products={newProducts} 
            title="Nuevos Productos" 
          />
          
          <ProductGrid 
            products={sampleProducts} 
            title="Todos los Productos" 
          />
        </main>
        
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;