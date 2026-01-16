'use client';

import { MapPin, Layers, FileText, Activity } from 'lucide-react';

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
              <div className="relative h-[400px] bg-slate-900 w-full group">
                 {/* Stylized Map Elements */}
                 <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                 }}></div>

                 {/* Map Nodes */}
                 {[
                   { top: '30%', left: '40%', status: 'success' },
                   { top: '50%', left: '60%', status: 'warning' },
                   { top: '20%', left: '70%', status: 'success' },
                   { top: '70%', left: '30%', status: 'alert' },
                   { top: '60%', left: '80%', status: 'success' },
                 ].map((node, i) => (
                   <div
                    key={i}
                    className="absolute cursor-pointer transform hover:scale-125 transition-transform"
                    style={{ top: node.top, left: node.left }}
                   >
                     <div className={`w-4 h-4 rounded-full border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.5)] ${
                       node.status === 'success' ? 'bg-green-500 shadow-green-500/50' :
                       node.status === 'warning' ? 'bg-yellow-500 shadow-yellow-500/50' : 'bg-red-600 shadow-red-600/50'
                     }`}></div>
                     {/* Tooltip Simulation */}
                     <div className="absolute left-6 top-0 bg-slate-900 border border-slate-600 p-2 rounded w-32 opacity-0 hover:opacity-100 transition-opacity pointer-events-none z-20">
                        <div className="h-1 w-12 bg-slate-700 mb-1"></div>
                        <div className="h-1 w-8 bg-slate-700"></div>
                     </div>
                   </div>
                 ))}

                 {/* Floating UI Panel */}
                 <div className="absolute top-4 right-4 w-48 bg-slate-900/90 backdrop-blur border border-slate-700 rounded p-3 text-xs space-y-2">
                    <div className="flex justify-between text-slate-400">
                      <span>Progreso Total</span>
                      <span className="text-white">87%</span>
                    </div>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-accent h-full w-[87%]"></div>
                    </div>
                    <div className="pt-2 border-t border-slate-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-slate-300">Aprobado</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <span className="text-slate-300">Riesgo Alto</span>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
