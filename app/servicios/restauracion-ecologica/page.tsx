import SecondaryHero from '@/components/SecondaryHero';
import { Leaf, Shield, Activity, CheckCircle } from 'lucide-react';

export default function RestauracionEcologicaPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <SecondaryHero
        title="Cumplimiento Efectivo y Cierre de Expedientes Ambientales"
        subtitle="Transformamos sus obligaciones normativas en ecosistemas sostenibles, garantizando la aprobación técnica por parte de la autoridad ambiental."
      />
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              Entendemos que el objetivo final de una compensación ambiental no es solo sembrar, sino lograr el cierre exitoso de los expedientes regulatorios. En CONGA PACÍFICO, diseñamos e implementamos medidas correctivas con rigor científico, asegurando altas tasas de supervivencia y una integración real con los ecosistemas estratégicos del territorio.
            </p>
          </div>

          {/* Services List */}
          <div className="grid gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Restauración Ecológica Activa</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Implementación de núcleos forestales con especies nativas adaptadas, diseñados para acelerar la recuperación de áreas degradadas y cumplir con las cuotas de biomasa exigidas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Conservación Estratégica (Aislamientos)</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Instalación técnica de cerramientos (postes inmunizados y alambre) para la protección de rondas hídricas y zonas de recarga, garantizando la regeneración natural sin perturbaciones externas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Monitoreo y Mantenimiento</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Realizamos un seguimiento periódico (plateo, fertilización, resiembra) para asegurar que los indicadores de prendimiento cumplan con los estándares de la CVC, DAGMA y otras corporaciones.
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
                  Garantizamos la inversión de su empresa mediante una ejecución trazable y efectiva, minimizando el riesgo de glosas o rechazos por parte de los entes de control.
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
