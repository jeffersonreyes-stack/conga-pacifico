import SecondaryHero from '@/components/SecondaryHero';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ShieldCheck, HardHat, Activity } from 'lucide-react';

export default function SeguridadPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <SecondaryHero
        title="Cultura de Prevención y Excelencia Operativa"
        subtitle="Una adecuada planificación disminuye los riesgos y asegura la eficiencia financiera y operativa de cada intervención."
      />

      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Block 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-accent hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-accent">
              <HardHat size={32} />
            </div>
            <h3 className="text-xl font-heading font-bold text-primary mb-4">Planificación para la Mitigación de Riesgos</h3>
            <p className="text-slate-600 leading-relaxed">
              En CONGA PACÍFICO, la seguridad inicia antes de la operación. Evaluamos cada escenario para identificar y mitigar riesgos asociados a trabajos en alturas y manejo de maquinaria. Esta planificación detallada nos permite prevenir incidentes que podrían derivar en sobrecostos o retrasos en el cronograma de su proyecto.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-primary">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-heading font-bold text-primary mb-4">Estándares y Protocolos Rigurosos</h3>
            <p className="text-slate-600 leading-relaxed">
              Operamos bajo un Sistema de Gestión de Seguridad y Salud en el Trabajo (SGSST) alineado con los estándares vigentes (Resolución 0312). Nuestros protocolos de evaluación de probabilidad y consecuencia aseguran que cada tarea se ejecute bajo condiciones controladas, protegiendo a nuestro equipo y a su infraestructura.
            </p>
          </div>

          {/* Block 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-accent hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-accent">
              <Activity size={32} />
            </div>
            <h3 className="text-xl font-heading font-bold text-primary mb-4">Resultados que Generan Confianza</h3>
            <p className="text-slate-600 leading-relaxed">
              Nuestra gestión comprometida se refleja en indicadores de desempeño positivos, minimizando el ausentismo y manteniendo la continuidad operativa en entornos complejos. Esto se traduce en tranquilidad para nuestros aliados y en la certeza de que la dimensión ambiental no será una fuente de riesgos no controlados.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
