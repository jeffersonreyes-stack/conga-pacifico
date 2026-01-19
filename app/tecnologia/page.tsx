import SecondaryHero from '@/components/SecondaryHero';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TechEvidence from '@/components/TechEvidence';
import { MapPin, BarChart3, FileCheck } from 'lucide-react';

export default function TecnologiaPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-900 text-white">
      <Header />

      {/* Custom Hero for Tech Page to match dark theme */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden mt-16 md:mt-20 border-b border-slate-800">
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(27, 77, 62, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(27, 77, 62, 0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
         }}></div>
         <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
               Trazabilidad y Evidencia Técnica
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
               Información precisa para fortalecer la confianza entre los diferentes actores del proyecto.
            </p>
         </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 container mx-auto px-4 md:px-8">

        {/* Reuse the TechEvidence Component (The Dashboard visual) */}
        <div className="mb-24">
           <TechEvidence />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {/* Feature 1 */}
           <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-accent transition-colors group">
              <MapPin className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Georreferenciación y Control</h3>
              <p className="text-slate-300 leading-relaxed">
                 Utilizamos tecnología de posicionamiento global (GPS) para documentar cada intervención. Ya sea una poda urbana o una siembra rural, cada actividad queda registrada con coordenadas precisas, permitiendo una auditoría transparente y facilitando la presentación de informes ante las autoridades y la interventoría.
              </p>
           </div>

           {/* Feature 2 */}
           <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-primary transition-colors group">
              <BarChart3 className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Visualización de Datos</h3>
              <p className="text-slate-300 leading-relaxed">
                 Transformamos los datos de campo en insumos valiosos para la toma de decisiones. Entregamos reportes compatibles con plataformas como Google Earth (archivos KMZ), lo que permite visualizar el avance físico de las compensaciones o intervenciones en tiempo real. Esta claridad en la información es fundamental para asegurar la correcta ejecución presupuestal y técnica.
              </p>
           </div>

           {/* Feature 3 */}
           <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-accent transition-colors group">
              <FileCheck className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Respaldo Documental</h3>
              <p className="text-slate-300 leading-relaxed">
                 Más allá de la ejecución física, garantizamos la integridad de la información. Nuestros sistemas de registro del "antes, durante y después" constituyen un soporte sólido que valida el cumplimiento de las crecientes expectativas sociales y normativas sobre la gestión ambiental del proyecto.
              </p>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
