import React, { useState } from 'react';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  console.log('Contact page rendered');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      details: ['Av. Belleza 123, Piso 5', 'Centro Comercial Plaza Rosa', 'Ciudad de México, CDMX 01234'],
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Phone,
      title: 'Teléfonos',
      details: ['+52 (55) 1234-5678', '+52 (55) 8765-4321', 'WhatsApp: +52 (55) 9999-0000'],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Mail,
      title: 'Correos Electrónicos',
      details: ['info@beautystore.com', 'ventas@beautystore.com', 'soporte@beautystore.com'],
      color: 'bg-rose-100 text-rose-600'
    },
    {
      icon: Clock,
      title: 'Horarios de Atención',
      details: ['Lunes a Viernes: 9:00 AM - 8:00 PM', 'Sábados: 10:00 AM - 6:00 PM', 'Domingos: 11:00 AM - 5:00 PM'],
      color: 'bg-blue-100 text-blue-600'
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@beautystore_mx',
      url: 'https://instagram.com/beautystore_mx',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'BeautyStore México',
      url: 'https://facebook.com/beautystoremx',
      color: 'bg-blue-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      handle: '@BeautyStoreMX',
      url: 'https://twitter.com/beautystoremx',
      color: 'bg-sky-500'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      handle: '+52 (55) 9999-0000',
      url: 'https://wa.me/5255999900000',
      color: 'bg-green-500'
    }
  ];

  const subjects = [
    'Consulta General',
    'Información de Productos',
    'Estado de Pedido',
    'Devoluciones y Cambios',
    'Soporte Técnico',
    'Colaboraciones',
    'Quejas y Sugerencias'
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
                Contáctanos
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Estamos aquí para ayudarte. Ponte en contacto con nosotros a través de cualquiera de nuestros canales
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Información de Contacto
                </h2>
                <p className="text-lg text-gray-600">
                  Múltiples formas de comunicarte con nosotros
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                      <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {info.title}
                      </h3>
                      <div className="space-y-2">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Social Media */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Síguenos en Redes Sociales
                </h2>
                <p className="text-lg text-gray-600">
                  Mantente al día con las últimas tendencias y ofertas
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {socialMedia.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className={`w-16 h-16 ${social.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {social.name}
                      </h3>
                      <p className="text-gray-600">
                        {social.handle}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Envíanos un Mensaje
                </h2>
                <p className="text-lg text-gray-600">
                  ¿Tienes alguna pregunta? Completa el formulario y te responderemos pronto
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="+52 (55) 1234-5678"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Asunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      >
                        <option value="">Selecciona un asunto</option>
                        {subjects.map((subject, index) => (
                          <option key={index} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensaje</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Nuestra Ubicación
                </h2>
                <p className="text-lg text-gray-600">
                  Visítanos en nuestra tienda física
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9234567890123!2d-99.1332!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDcnNTkuNSJX!5e0!3m2!1sen!2smx!4v1234567890123!5m2!1sen!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de BeautyStore"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        BeautyStore - Tienda Principal
                      </h3>
                      <p className="text-gray-600">
                        Av. Belleza 123, Piso 5, Centro Comercial Plaza Rosa
                      </p>
                      <p className="text-gray-600">
                        Ciudad de México, CDMX 01234
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">Estacionamiento disponible</p>
                      <p className="text-sm text-gray-500">Acceso para personas con discapacidad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default Contact;