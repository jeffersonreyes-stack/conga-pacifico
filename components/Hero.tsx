'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row bg-slate-900 pt-20 md:pt-0">
      {/* Left Column: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-12 z-20 bg-slate-900 relative order-2 md:order-1">
         <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 font-bold text-sm mb-6 tracking-wider uppercase backdrop-blur-sm">
            Socio Estratégico Industrial
          </span>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Gestión Ambiental Responsable: El complemento estratégico para la excelencia de sus proyectos.
          </h1>

          <p className="font-body text-lg text-slate-300 mb-10 leading-relaxed">
            En un contexto caracterizado por marcos normativos diversos y crecientes expectativas sociales, aseguramos la continuidad operativa y fortalecemos el Goodwill de su empresa. Mitigamos riesgos operativos y evitamos sobrecostos mediante una planificación adecuada y un acompañamiento experto ante las Corporaciones y Entidades Ambientales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/servicios"
              className="bg-accent hover:bg-orange-600 text-white font-heading font-bold py-4 px-8 rounded-md transition-all transform hover:-translate-y-1 shadow-lg text-center"
            >
              Conozca nuestras soluciones
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Image */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative bg-slate-900 order-1 md:order-2">
         <Image
          src="/images/portada-principal.png"
          alt="Operario en la palma"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient Overlay for Fusion: Dark to Transparent from Left to Right */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
