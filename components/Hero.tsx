'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center bg-slate-900 pt-20 md:pt-0 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <Image
          src="/images/hero3.png"
          alt="Imagen principal de fondo"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-12 text-center">
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 font-bold text-sm mb-6 tracking-wider uppercase backdrop-blur-sm">
            Socio Estratégico Industrial
          </span>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Gestión Ambiental Responsable: El complemento estratégico para la excelencia de sus proyectos.
          </h1>

          <p className="font-body text-lg text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
            En un contexto caracterizado por marcos normativos diversos y crecientes expectativas sociales, aseguramos la continuidad operativa y fortalecemos el Goodwill de su empresa. Mitigamos riesgos operativos y evitamos sobrecostos mediante una planificación adecuada y un acompañamiento experto ante las Corporaciones y Entidades Ambientales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/servicios"
              className="bg-accent hover:bg-orange-600 text-white font-heading font-bold py-4 px-8 rounded-md transition-all transform hover:-translate-y-1 shadow-lg text-center"
            >
              Conozca nuestras soluciones
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
