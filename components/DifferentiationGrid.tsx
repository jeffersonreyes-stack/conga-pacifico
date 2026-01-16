'use client';

import { Shield, FileCheck, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DifferentiationGrid() {
  const items = [
    {
      icon: <Shield className="w-10 h-10 text-accent" />,
      title: "Seguridad Industrial",
      stat: "0",
      subStat: "Accidentes / Enfermedades",
      desc: "Protocolos estrictos alineados con estándares internacionales.",
    },
    {
      icon: <FileCheck className="w-10 h-10 text-primary" />,
      title: "Rigor Técnico",
      stat: "100%",
      subStat: "Trazabilidad GIS",
      desc: "Reportes KMZ auditables y cumplimiento normativo garantizado.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Licencia Social",
      stat: "Conflictos",
      subStat: "Gestionados",
      desc: "Estrategias de mediación efectiva con comunidades impactadas.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-accent" />,
      title: "Impacto Real",
      stat: ">95%",
      subStat: "Nivel de Cumplimiento",
      desc: "Ejecución precisa que evita multas y retrasos en obra.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Por qué las grandes constructoras nos eligen
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-slate-100 rounded-lg bg-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-4 bg-white p-3 rounded-full inline-block shadow-sm group-hover:shadow-md transition-shadow">
                {item.icon}
              </div>
              <div className="mb-2">
                <span className="text-4xl font-heading font-bold text-slate-800 block">
                  {item.stat}
                </span>
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">
                  {item.subStat}
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-primary mt-4 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 font-body text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
