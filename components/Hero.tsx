'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-white pt-32 pb-16 flex items-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 flex flex-col justify-center max-w-2xl"
        >
          {/* Mobile Logo Visibility (Optional, just to reinforce the brand in the banner) */}
          <div className="mb-6 lg:hidden flex justify-start">
             <Image
              src="/images/logo-blanco.jpeg"
              alt="CONGA PACIFICO Logo"
              width={140}
              height={140}
              className="object-contain"
              priority
            />
          </div>

          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-primary border border-accent/20 font-bold text-sm mb-6 tracking-wider uppercase self-start">
            Socio Estratégico Industrial
          </span>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
            Gestión Ambiental Responsable
          </h1>

          <p className="font-body text-lg text-slate-600 mb-8 leading-relaxed">
            El complemento estratégico para la excelencia de sus proyectos. En un contexto de diversos marcos normativos y crecientes expectativas sociales, aseguramos su continuidad operativa y fortalecemos el Goodwill de su empresa. Mitigamos riesgos operativos mediante planificación adecuada ante las Entidades Ambientales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link
              href="/servicios"
              className="bg-primary hover:bg-accent text-white font-heading font-bold py-4 px-8 rounded-md transition-all transform hover:-translate-y-1 shadow-lg text-center"
            >
              Conozca nuestras soluciones
            </Link>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-50"
        >
          <Image
            src="/images/hero3.png"
            alt="Gestión Ambiental"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle green overlay to match the environmental theme */}
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
        </motion.div>

        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
}
