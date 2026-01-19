import SecondaryHero from '@/components/SecondaryHero';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';

export default function ProyectosPage() {
  const cases = [
    {
      title: "Gestión en Entornos Urbanos de Alta Complejidad",
      text: "En alianza con entidades locales, hemos gestionado el riesgo arbóreo en zonas densamente pobladas de Cali. Este reto demostró nuestra capacidad para armonizar la seguridad operativa con las expectativas de la comunidad, logrando intervenciones seguras y socialmente validadas que protegen la infraestructura pública y privada.",
      image: "/images/tala1.png",
      alt: "Intervención arbórea urbana"
    },
    {
      title: "Restauración Ecológica en Áreas Rurales",
      text: "En la cuenca de la Quebrada Tanque Viejo (Dagua), lideramos procesos de restauración activa y conservación de fuentes hídricas. Mediante la implementación de viveros comunitarios y aislamientos estratégicos, logramos no solo metas ambientales, sino el fortalecimiento del tejido social, consolidando la confianza entre la comunidad y las entidades promotoras.",
      image: "/images/servicios1.png", // Restoration
      alt: "Restauración ecológica rural"
    },
    {
      title: "Un Modelo Adaptable",
      text: "Nuestra trayectoria demuestra versatilidad. Desde la precisión requerida en la silvicultura urbana hasta la visión a largo plazo de la restauración rural, CONGA PACÍFICO adapta su gestión a las necesidades específicas de cada territorio, asegurando siempre que la inversión ambiental contribuya positivamente al éxito global del proyecto.",
      image: "/images/tala2.png", // Using another tala image as general fieldwork representation
      alt: "Equipo técnico en campo"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <SecondaryHero
        title="Experiencia en Contextos Diversos"
        subtitle="Resultados que demuestran nuestra capacidad de adaptación y compromiso con la calidad en entornos urbanos y rurales."
      />

      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="space-y-24">
          {cases.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2 w-full relative h-[400px] rounded-xl overflow-hidden shadow-2xl group">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4">
                   Caso de Estudio {index + 1}
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">{project.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {project.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
