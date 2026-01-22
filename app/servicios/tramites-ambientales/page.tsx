import SecondaryHero from '@/components/SecondaryHero';
import { FileText, TreeDeciduous, BookOpen, CheckCircle } from 'lucide-react';

export default function TramitesAmbientalesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <SecondaryHero
        title="Seguridad Jurídica y Gestión de Permisos"
        subtitle="Su departamento externo de ingeniería legal-ambiental. Destrabamos procesos para asegurar la continuidad de su cronograma."
      />
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              La diversidad de marcos normativos puede convertirse en un cuello de botella para la operación. Actuamos como su aliado estratégico ante las Autoridades Ambientales (Corporaciones Autónomas, ANLA, DAGMA), gestionando con precisión técnica los instrumentos necesarios para la viabilidad legal de su proyecto.
            </p>
          </div>

          {/* Services List */}
          <div className="grid gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Concesiones y Permisos de Uso</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Trámite integral para concesiones de aguas (superficiales/subterráneas), permisos de vertimientos y ocupación de cauces, asegurando el acceso legal a los recursos necesarios para su operación.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                  <TreeDeciduous className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Aprovechamiento Forestal</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Gestión de permisos únicos, persistentes o domésticos. Realizamos el inventario forestal al 100%, la veda y la marcación técnica requerida para la autorización de intervenciones en cobertura vegetal.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Instrumentos de Manejo (DAA/PMA)</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Elaboración y actualización de Diagnósticos Ambientales de Alternativas y Planes de Manejo Ambiental, blindando su proyecto desde la fase de planificación.
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
                  Reducimos los tiempos de respuesta y minimizamos devoluciones gracias a la robustez técnica de nuestros expedientes y nuestro conocimiento profundo de los procedimientos institucionales.
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
