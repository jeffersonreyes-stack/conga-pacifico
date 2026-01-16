'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/portada-principal.png"
          alt="Ingeniería Ambiental en Infraestructura"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
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
            Ingeniería Ambiental y Gestión del Riesgo para <span className="text-accent">Infraestructura Crítica</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
            24 años blindando operaciones con rigor técnico, seguridad industrial y licencia social. No somos voluntariado, somos ingeniería.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="#contacto"
              className="bg-accent hover:bg-orange-600 text-white font-heading font-bold py-4 px-8 rounded-md transition-all transform hover:-translate-y-1 shadow-lg text-center"
            >
              Solicitar Evaluación Técnica
            </Link>
            <Link
              href="#servicios"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-heading font-bold py-4 px-8 rounded-md transition-all text-center"
            >
              Explorar Soluciones
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
