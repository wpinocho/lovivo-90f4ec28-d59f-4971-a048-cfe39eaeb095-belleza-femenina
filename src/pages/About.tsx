import React from 'react';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Award, Users, Sparkles, Star, Clock, Shield, Truck } from 'lucide-react';

const About = () => {
  console.log('About page rendered');

  const values = [
    {
      icon: Heart,
      title: 'Pasión por la Belleza',
      description: 'Creemos que cada mujer merece sentirse hermosa y segura de sí misma.'
    },
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Seleccionamos cuidadosamente productos de las mejores marcas del mundo.'
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Construimos una comunidad donde las mujeres se apoyan y celebran su belleza.'
    },
    {
      icon: Sparkles,
      title: 'Innovación',
      description: 'Siempre buscamos las últimas tendencias y productos innovadores.'
    }
  ];

  const team = [
    {
      name: 'María González',
      role: 'Fundadora & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'Con más de 15 años en la industria de la belleza, María fundó BeautyStore con la visión de democratizar el acceso a productos de belleza de alta calidad.'
    },
    {
      name: 'Ana Rodríguez',
      role: 'Directora de Productos',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Experta en cosmetología con certificaciones internacionales. Ana se encarga de seleccionar cada producto que ofrecemos.'
    },
    {
      name: 'Carmen López',
      role: 'Especialista en Cuidado de la Piel',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face',
      description: 'Dermatóloga certificada que nos ayuda a elegir los mejores productos para el cuidado de la piel.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Clientas Satisfechas' },
    { number: '500+', label: 'Productos Premium' },
    { number: '5', label: 'Años de Experiencia' },
    { number: '98%', label: 'Satisfacción del Cliente' }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Productos Auténticos',
      description: 'Garantizamos la autenticidad de todos nuestros productos'
    },
    {
      icon: Truck,
      title: 'Envío Gratuito',
      description: 'Envío gratis en compras superiores a $50'
    },
    {
      icon: Clock,
      title: 'Atención 24/7',
      description: 'Soporte al cliente disponible las 24 horas'
    },
    {
      icon: Star,
      title: 'Garantía de Calidad',
      description: 'Devolución gratuita si no estás satisfecha'
    }
  ];

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sobre Nosotros
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Descubre la historia detrás de BeautyStore y nuestra pasión por realzar tu belleza natural
              </p>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Nuestra Historia
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    BeautyStore nació en 2019 con una misión simple pero poderosa: hacer que los productos de belleza de alta calidad sean accesibles para todas las mujeres. Comenzamos como una pequeña tienda online y hemos crecido hasta convertirnos en una de las tiendas de belleza más confiables del país.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    Nuestra fundadora, María González, después de años trabajando en la industria cosmética, se dio cuenta de que muchas mujeres no tenían acceso a productos de calidad a precios justos. Así nació BeautyStore, con el compromiso de ofrecer solo los mejores productos, cuidadosamente seleccionados por nuestro equipo de expertos.
                  </p>
                  <p className="text-lg text-gray-600">
                    Hoy, más de 50,000 mujeres confían en nosotros para sus necesidades de belleza, y seguimos creciendo con la misma pasión y dedicación del primer día.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                    alt="Nuestra historia"
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-pink-500 text-white p-6 rounded-lg shadow-lg">
                    <p className="text-2xl font-bold">2019</p>
                    <p className="text-sm">Año de fundación</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Nuestros Valores
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Los principios que guían cada decisión que tomamos y cada producto que seleccionamos
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                      <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 bg-pink-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <p className="text-4xl md:text-5xl font-bold mb-2">
                      {stat.number}
                    </p>
                    <p className="text-lg opacity-90">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Nuestro Equipo
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Conoce a las expertas que hacen posible que tengas acceso a los mejores productos de belleza
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-pink-600 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  ¿Por Qué Elegir BeautyStore?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Nos comprometemos a ofrecerte la mejor experiencia de compra en belleza
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                ¿Lista para Descubrir tu Belleza?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Únete a miles de mujeres que ya confían en BeautyStore para realzar su belleza natural
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Ver Productos
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  Contáctanos
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default About;