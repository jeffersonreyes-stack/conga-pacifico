import SecondaryHero from '@/components/SecondaryHero';
import { Trees, Network, Wrench, CheckCircle } from 'lucide-react';

export default function GestionForestalPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <SecondaryHero
        title="Infraestructura Verde: Funcionalidad y Resiliencia"
        subtitle="Integramos la ingeniería civil con soluciones basadas en la naturaleza para proteger su infraestructura y mejorar el entorno."
      />
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              El paisajismo moderno va más allá de la estética; es una herramienta funcional para la estabilidad de sus obras. Creamos entornos que dialogan armónicamente con su infraestructura gris, aportando servicios ecosistémicos como la regulación térmica, el control de erosión y el bienestar visual para sus colaboradores y comunidades vecinas.
            </p>
          </div>

          {/* Services List */}
          <div className="grid gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                  <Trees className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Bioingeniería y Control de Taludes</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Utilizamos técnicas de cobertura vegetal y manejo de suelos para estabilizar laderas y prevenir la erosión, protegiendo vías y edificaciones de movimientos en masa superficiales.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                  <Network className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Corredores Biológicos Funcionales</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Diseño de franjas de vegetación que conectan ecosistemas fragmentados, cumpliendo con requerimientos de sostenibilidad urbana e industrial.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Mantenimiento Técnico Especializado</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Gestión integral de zonas verdes corporativas, asegurando que el diseño original perdure en el tiempo y mantenga sus funciones ecológicas y estéticas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Us */}
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 flex items-start gap-6">
              <CheckCircle className="w-12 h-12 text-accent flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-heading font-bold mb-4">¿Por qué elegirnos?</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Combinamos la visión del arquitecto con el conocimiento del ingeniero forestal para entregar áreas verdes que son activos valorizables, no gastos operativos.
                </p>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
