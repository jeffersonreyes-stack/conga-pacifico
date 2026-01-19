'use client';

import { ClipboardCheck, Scale, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DifferentiationGrid() {
  const items = [
    {
      icon: <ClipboardCheck className="w-10 h-10 text-accent" />,
      title: "Complementamos su Calidad Técnica",
      desc: "La calidad en la ingeniería debe complementarse con una gestión ambiental responsable. No solo ejecutamos actividades; aportamos una planificación rigurosa que permite disminuir riesgos existentes —como los trabajos en alturas o sobrecostos por una inadecuada planificación— asegurando que su proyecto avance sin contratiempos financieros u operativos.",
    },
    {
      icon: <Scale className="w-10 h-10 text-primary" />,
      title: "Gestión Integral ante Entidades Ambientales",
      desc: "Entendemos la diversidad de elementos regulatorios que enfrentan sus proyectos. Brindamos soporte técnico especializado para la gestión de permisos y trámites ante las diversas Corporaciones Ambientales Regionales y demás autoridades competentes, abarcando todo el espectro normativo necesario para su operación.",
    },
    {
      icon: <Handshake className="w-10 h-10 text-accent" />,
      title: "Continuidad y Licencia Social",
      desc: "Fomentamos la confianza entre los diferentes actores involucrados. Nuestra gestión ayuda a consolidar relaciones armónicas con las comunidades, convirtiendo las crecientes expectativas sociales en oportunidades para fortalecer la sostenibilidad y asegurar la continuidad de sus operaciones a largo plazo.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Planificación, Mitigación y Confianza
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-slate-100 rounded-lg bg-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-6 bg-white p-4 rounded-full inline-block shadow-sm group-hover:shadow-md transition-shadow">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-slate-600 font-body text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
