import SecondaryHero from '@/components/SecondaryHero';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LeadMagnet from '@/components/LeadMagnet';

export default function ServiciosPage() {
  const services = [
    {
      title: "Ejecución de Compensaciones Ambientales",
      text: "Cumplimiento técnico que garantiza el cierre de expedientes. Diseñamos e implementamos medidas correctivas con altos estándares de supervivencia biológica. Incluye: Restauración Ecológica, Conservación Estratégica (aislamientos) y Monitoreo Técnico.",
      image: "/images/service-restoration.png"
    },
    {
      title: "Paisajismo Ambiental y Restaurativo",
      text: "Integración funcional entre obra gris y entorno verde. Más allá de la estética, creamos infraestructura verde resiliente. Especialistas en Bioingeniería para control de taludes, diseño funcional de corredores biológicos y mantenimiento técnico especializado.",
      image: "/images/service-silviculture.png"
    },
    {
      title: "Gestión de Trámites y Derechos Ambientales",
      text: "Su departamento externo de ingeniería legal-ambiental. Actuamos como facilitadores técnicos para destrabar la operación. Gestión de concesiones de aguas, permisos de vertimientos, aprovechamiento forestal (CVC/DAGMA) y elaboración de DAA/PMA.",
      image: "/images/service-licensing.png"
    },
    {
      title: "Gestión Social y Educación Ambiental",
      text: "Licencia social para operar sin interrupciones. Mitigamos el riesgo reputacional articulando su proyecto con el territorio mediante talleres de apropiación con JAC, líderes locales y capacitación normativa para su personal.",
      image: "/images/service-social.png"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <SecondaryHero
        title="Soluciones Ambientales Estratégicas para Infraestructura y Territorio"
        subtitle="Transformamos sus obligaciones ambientales en activos de sostenibilidad. Integramos ingeniería civil, rigor ambiental y gestión social para asegurar la viabilidad de sus proyectos ante la ley y la comunidad."
      />

      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.text}
              imageSrc={service.image}
              imageAlt={service.title}
            />
          ))}
        </div>
      </section>

      <LeadMagnet />
      <Footer />
    </main>
  );
}
