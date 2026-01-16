'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      id: 'silviculture',
      title: 'Gestión Silvicultural Urbana',
      subtitle: 'Talas de Alto Riesgo',
      desc: 'Intervención experta en entornos complejos. Equipo certificado para trabajo en alturas y manejo de especies protegidas.',
      image: '/images/tala1.png',
      highlight: true,
    },
    {
      id: 'restoration',
      title: 'Restauración Ecológica',
      subtitle: 'Compensación Ambiental',
      desc: 'Diseño y ejecución de planes de restauración. Recuperación de ecosistemas degradados con base científica.',
      image: '/images/servicios1.png',
      highlight: false,
    },
    {
      id: 'licensing',
      title: 'Trámites y Licenciamiento',
      subtitle: 'Seguridad Jurídica',
      desc: 'Gestión integral de permisos ante autoridades ambientales (CVC, DAGMA, ANLA). Evite sanciones.',
      image: '/images/servicios2.png',
      highlight: false,
    },
    {
      id: 'social',
      title: 'Gestión Social',
      subtitle: 'Infraestructura',
      desc: 'Socialización de proyectos, actas de vecindad y resolución de conflictos comunitarios para viabilizar obras.',
      image: '/images/servicios3.png',
      highlight: false,
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Soluciones Integrales para Infraestructura
            </h2>
            <p className="text-slate-600 font-body text-lg">
              Desde el trámite legal hasta la ejecución en campo, cubrimos todo el ciclo de vida ambiental de su proyecto.
            </p>
          </div>
          <button className="hidden md:flex items-center text-accent font-bold hover:text-orange-700 transition-colors mt-4 md:mt-0">
            Ver todos los servicios <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 ${
                service.highlight ? 'ring-2 ring-accent ring-offset-2' : ''
              }`}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">
                    {service.subtitle}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white mb-2 leading-tight group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {service.desc}
                </p>
                <a href="#" className="text-primary font-bold text-sm hover:underline inline-flex items-center">
                  Más información <ArrowRight className="ml-1 w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center text-accent font-bold hover:text-orange-700 transition-colors">
            Ver todos los servicios <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
