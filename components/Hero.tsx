'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 border-x-2 border-primary/30 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
        <Image
          src="/images/portada-principal.png"
          alt="Ingeniería Ambiental en Infraestructura"
          fill
          className="object-contain object-center"
          priority
        />
        {/* Dark Overlay for Readability - Adjusted for vignette effect mostly, but keeping light overlay for text contrast if needed.
            User asked for specific shadow/border on container.
            The image is now object-contain on black.
            The text is over it. We might need a gradient behind text if image doesn't cover it.
            But user requested 'object-contain'.
        */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 font-bold text-sm mb-6 tracking-wider uppercase backdrop-blur-sm">
            Socio Estratégico Industrial
          </span>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Gestión Ambiental Responsable: El complemento estratégico para la excelencia de sus proyectos.
          </h1>

          <p className="font-body text-lg md:text-xl text-slate-200 mb-10 max-w-3xl leading-relaxed">
            En un contexto caracterizado por marcos normativos diversos y crecientes expectativas sociales, aseguramos la continuidad operativa y fortalecemos el Goodwill de su empresa. Mitigamos riesgos operativos y evitamos sobrecostos mediante una planificación adecuada y un acompañamiento experto ante las Corporaciones y Entidades Ambientales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/servicios"
              className="bg-accent hover:bg-orange-600 text-white font-heading font-bold py-4 px-8 rounded-md transition-all transform hover:-translate-y-1 shadow-lg text-center"
            >
              Conozca nuestras soluciones
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
