import SecondaryHero from '@/components/SecondaryHero';
import { Users, GraduationCap, MessageCircle, CheckCircle } from 'lucide-react';

export default function GestionSocialPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <SecondaryHero
        title="Licencia Social y Fortalecimiento del Goodwill"
        subtitle="Construimos relaciones de confianza con las comunidades para mitigar riesgos operativos y reputacionales."
      />
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              En un entorno de crecientes expectativas sociales, la viabilidad de un proyecto depende de su aceptación en el territorio. En CONGA PACÍFICO, facilitamos el diálogo constructivo entre su empresa y las comunidades, transformando la vecindad en una alianza estratégica para la sostenibilidad.
            </p>
          </div>

          {/* Services List */}
          <div className="grid gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Estrategias de Apropiación Social</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Implementamos metodologías participativas con Juntas de Acción Comunal (JAC) y líderes locales para socializar el alcance de los proyectos, gestionando expectativas y generando confianza legítima.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Educación Ambiental Empresarial</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Diseñamos talleres a la medida para sus colaboradores y grupos de interés en temas como biodiversidad, cambio climático y economía circular, fortaleciendo la cultura corporativa.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Canalización de Inquietudes</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Actuamos como un puente efectivo para la gestión temprana de solicitudes comunitarias, evitando que las dudas se conviertan en conflictos que afecten la continuidad operativa.
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
                  Convertimos la gestión social en un activo reputacional, asegurando un entorno armonioso que permite el desarrollo fluido de sus actividades.
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
