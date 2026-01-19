'use client';

import { MapPin, Layers, FileText, Activity } from 'lucide-react';
import Image from 'next/image';

export default function TechEvidence() {
  return (
    <section id="tecnologia" className="py-20 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Map Effect (CSS Pattern) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="text-accent w-5 h-5 animate-pulse" />
              <span className="text-accent font-bold tracking-widest uppercase text-sm">Auditoría en Tiempo Real</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Transparencia Radical: <br />
              <span className="text-slate-400">Control Total de su Proyecto.</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              No espere al final del mes para saber qué pasa en obra. Entregamos reportes georreferenciados compatibles con
              <strong className="text-white"> Google Earth Pro</strong> y dashboards interactivos para su interventoría.
            </p>

            <ul className="space-y-4">
              {[
                { icon: MapPin, text: "Georreferenciación precisa de cada individuo arbóreo." },
                { icon: Layers, text: "Capas de análisis de riesgo y restricciones ambientales." },
                { icon: FileText, text: "Expedientes digitales listos para auditoría ANLA/CVC." },
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="mt-1 bg-white/10 p-1 rounded">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-slate-200">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* UI Simulation Component */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-lg overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl">
              {/* Fake Browser Header */}
              <div className="bg-slate-900 px-4 py-2 flex items-center space-x-2 border-b border-slate-700">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-slate-800 text-xs text-slate-400 py-1 px-3 rounded inline-block w-64 truncate">
                    conga-dashboard.internal/project-view/map
                  </div>
                </div>
              </div>

              {/* Map Interface Area */}
              <div className="relative h-[400px] bg-slate-900 w-full group overflow-hidden">
                 <Image
                   src="/images/dashboard-georeferenciacion.png"
                   alt="Dashboard de Georreferenciación CONGA - Control de Proyectos"
                   fill
                   className="object-contain"
                   sizes="(max-width: 768px) 100vw, 50vw"
                 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
