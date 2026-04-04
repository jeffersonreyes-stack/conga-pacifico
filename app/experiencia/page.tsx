'use client';

import SecondaryHero from '@/components/SecondaryHero';
import Footer from '@/components/Footer';
import PresentationViewer from '@/components/PresentationViewer';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Play,
  ShieldCheck,
  Users,
  MapPin,
  FileText,
  Award,
  ArrowRight,
} from 'lucide-react';

const propuestaSlides = [
  {
    type: 'image' as const,
    src: '/presentaciones/infografia-propuesta-valor.png',
    alt: 'Infografía Propuesta de Valor B2B',
    title: 'Propuesta de Valor Estratégica B2B',
    description:
      'Portafolio integral de servicios ambientales: desde compensaciones y paisajismo hasta licenciamiento y educación ambiental. Más de 140 árboles en riesgo intervenidos en el Convenio 095 con la CVC en Cali.',
  },
  {
    type: 'image' as const,
    src: '/presentaciones/infografia-convenio-0095.png',
    alt: 'Infografía Convenio 0095 - Gestión de Arbolado Urbano',
    title: 'Gestión de Arbolado Urbano — Convenio 0095',
    description:
      '141 árboles en riesgo intervenidos, 84 tocones y raíces extraídos, 84 nuevos árboles sembrados. Proyecto ejecutado con estricto plan de SST, socialización comunitaria y georreferenciación total.',
  },
  {
    type: 'pdf' as const,
    src: '/presentaciones/Riesgo_Cero_Resultado_Garantizado.pdf',
    alt: 'Presentación Riesgo Cero, Resultado Garantizado',
    title: 'Riesgo Cero, Resultado Garantizado',
    description:
      'Presentación completa de nuestra metodología para minimizar riesgos operativos y garantizar resultados en proyectos ambientales de alta complejidad.',
  },
  {
    type: 'pdf' as const,
    src: '/presentaciones/Infraestructura_Riesgo_y_Cumplimiento.pdf',
    alt: 'Presentación Infraestructura, Riesgo y Cumplimiento',
    title: 'Infraestructura, Riesgo y Cumplimiento',
    description:
      'Análisis detallado de gestión de infraestructura con enfoque en mitigación de riesgo y cumplimiento normativo para el sector constructor.',
  },
];

const resultados = [
  {
    icon: ShieldCheck,
    valor: '0',
    label: 'Accidentes de Trabajo',
    detalle: 'Estricto plan SST con EPP y protocolos',
  },
  {
    icon: Users,
    valor: '100%',
    label: 'Socialización Comunitaria',
    detalle: 'Reuniones con JAL, JAC y líderes locales',
  },
  {
    icon: MapPin,
    valor: '100%',
    label: 'Georreferenciación',
    detalle: 'Todas las intervenciones con coordenadas GPS',
  },
  {
    icon: Award,
    valor: '24+',
    label: 'Años de Experiencia',
    detalle: 'En el Pacífico colombiano',
  },
];

export default function ExperienciaPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <SecondaryHero
        title="Experiencia que Habla por Sí Misma"
        subtitle="Resultados concretos, metodología probada y evidencia documental de nuestra gestión ambiental integral."
      />

      {/* Resultados Destacados */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4">
            Resultados Cuantificables
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Cifras que Respaldan Nuestra Gestión
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Cada proyecto ejecutado con la rigurosidad técnica y compromiso social que
            nos distingue como socios estratégicos ambientales.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {resultados.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <item.icon size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-heading font-bold text-accent mb-1">
                {item.valor}
              </div>
              <div className="text-sm font-heading font-semibold text-primary mb-1">
                {item.label}
              </div>
              <div className="text-xs text-slate-500">{item.detalle}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-bold mb-4">
              Video Documental
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              De Obra a Modelo de Negocio
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Un recorrido visual por la ejecución del Convenio 0095: cómo transformamos la gestión
              de arbolado urbano en un modelo replicable de excelencia operativa, seguridad y
              compromiso comunitario.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <video
                controls
                preload="metadata"
                className="w-full aspect-video bg-black"
                poster="/images/tala1.png"
              >
                <source
                  src="https://d2ldmbozza14uy.cloudfront.net/video/De_Obra_a_Modelo_de_Negocio.mp4"
                  type="video/mp4"
                />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                <Play size={16} className="text-accent" />
                <span>Gestión de Arbolado Urbano</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                <ShieldCheck size={16} className="text-accent" />
                <span>Seguridad y Salud en el Trabajo</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                <Users size={16} className="text-accent" />
                <span>Socialización Comunitaria</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                <MapPin size={16} className="text-accent" />
                <span>Georreferenciación GPS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentaciones Section */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4">
            Documentación y Presentaciones
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Nuestra Propuesta de Valor al Detalle
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Explora nuestras infografías y presentaciones. Usa las flechas o haz clic en
            pantalla completa para una mejor visualización.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <PresentationViewer
            slides={propuestaSlides}
            title="Presentaciones Conga Pacífico"
          />
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4">
              Casos de Estudio
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Proyectos Emblemáticos
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Intervenciones de alta complejidad ejecutadas con éxito y cero accidentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/tala1.png"
                  alt="Gestión de Riesgo Urbano"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold mb-3">
                  Convenio 0095
                </div>
                <h3 className="font-heading font-bold text-primary text-xl mb-2">
                  Gestión de Riesgo Urbano — Cali
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Intervención de arbolado en riesgo en zonas de alta densidad urbana. Aliado: Alcaldía de
                  Cali / DAGMA / CVC.
                </p>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li>✅ 0 Accidentes de Trabajo</li>
                  <li>✅ Georreferenciación Total</li>
                  <li>✅ Paz Social (Sin conflictos)</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/servicios1.png"
                  alt="Restauración de Ecosistemas"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-3">
                  Convenio 0037
                </div>
                <h3 className="font-heading font-bold text-primary text-xl mb-2">
                  Restauración de Ecosistemas — Dagua
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Protección de fuentes hídricas en zona rural con gestión integral del ciclo
                  biológico. Aliado: CVC.
                </p>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li>✅ 100% de Cumplimiento</li>
                  <li>✅ Vivero Especializado</li>
                  <li>✅ Comunidad vinculada</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-md transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              Ver Todos los Proyectos
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            ¿Listo para trabajar con un socio estratégico?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Nuestra experiencia, tecnología y compromiso están al servicio de su próximo
            proyecto ambiental. Hablemos.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-10 rounded-md transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            Solicitar Consulta
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
