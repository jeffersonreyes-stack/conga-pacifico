import SecondaryHero from '@/components/SecondaryHero';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LeadMagnet from '@/components/LeadMagnet';

export default function ServiciosPage() {
  const services = [
    {
      title: "Gestión de Trámites y Cumplimiento Normativo",
      text: "Entendemos la diversidad de elementos regulatorios actuales. Realizamos la gestión integral de permisos ante las diferentes Corporaciones Autónomas Regionales y Entidades Ambientales competentes. Nuestro soporte abarca desde licencias y permisos de vertimientos hasta la gestión de aprovechamiento forestal, asegurando que su proyecto cumpla con los requisitos exigidos para evitar contratiempos administrativos.",
      image: "/images/service-licensing.png"
    },
    {
      title: "Intervención Silvicultural y Paisajismo Técnico",
      text: "La excelencia en ingeniería requiere una planificación adecuada del entorno verde. Ejecutamos talas, podas y traslados con una planificación rigurosa que busca mitigar riesgos operativos y evitar sobrecostos por imprevistos. Transformamos áreas verdes en activos estéticos y funcionales que complementan la calidad de su infraestructura.",
      image: "/images/service-silviculture.png"
    },
    {
      title: "Compensaciones Ambientales Efectivas",
      text: "Convertimos las obligaciones de compensación en oportunidades para fortalecer la sostenibilidad. Diseñamos y ejecutamos planes de restauración ecológica que no solo cumplen la norma, sino que generan confianza entre los actores involucrados y aportan valor real a los ecosistemas estratégicos.",
      image: "/images/service-restoration.png"
    },
    {
      title: "Gestión Social y Educación Ambiental",
      text: "Fortalecemos el Goodwill de su empresa. A través de metodologías participativas y educación ambiental empresarial, construimos relaciones de confianza con las comunidades y stakeholders, facilitando la licencia social necesaria para la continuidad de sus actividades.",
      image: "/images/service-social.png"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <SecondaryHero
        title="Soluciones Integrales para la Sostenibilidad del Proyecto"
        subtitle="Acompañamiento técnico experto para navegar marcos normativos diversos y asegurar la viabilidad de sus operaciones."
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
