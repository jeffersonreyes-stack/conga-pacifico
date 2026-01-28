import Footer from '@/components/Footer';
import TechEvidence from '@/components/TechEvidence';
import { MapPin, ShieldCheck, FileCheck } from 'lucide-react';

export default function TecnologiaPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-900 text-white">

      {/* Custom Hero for Tech Page to match dark theme */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden mt-16 md:mt-20 border-b border-slate-800">
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(27, 77, 62, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(27, 77, 62, 0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
         }}></div>
         <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
               Trazabilidad Digital y Transparencia Técnica
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
               En la era de los datos, la gestión ambiental debe ser auditable en tiempo real. En CONGA PACÍFICO hemos digitalizado nuestra operación para ofrecerle evidencia irrefutable y control total sobre sus inversiones ambientales.
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
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Georreferenciación de Precisión (GIS)</h3>
              <p className="text-slate-300 leading-relaxed">
                 Lo que no se mide y ubica, no existe. Documentamos cada intervención con coordenadas UTM precisas. Entregable: Archivos KMZ/KML compatibles con Google Earth Pro para auditoría remota.
              </p>
           </div>

           {/* Feature 2 */}
           <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-primary transition-colors group">
              <ShieldCheck className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Digitalización de Seguridad (SST)</h3>
              <p className="text-slate-300 leading-relaxed">
                 La seguridad industrial no es negociable. Migramos del papel a la nube con Checklists Digitales (ATS/Preoperacionales) con estampa de tiempo y GPS, eliminando errores y acelerando reportes HSEQ.
              </p>
           </div>

           {/* Feature 3 */}
           <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-accent transition-colors group">
              <FileCheck className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Registro &quot;Antes, Durante y Después&quot;</h3>
              <p className="text-slate-300 leading-relaxed">
                 Construimos una memoria técnica visual de cada actividad. Este acervo documental es su mejor respaldo ante requerimientos de las autoridades ambientales o consultas de la comunidad.
              </p>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
