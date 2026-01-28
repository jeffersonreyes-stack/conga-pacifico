import SecondaryHero from '@/components/SecondaryHero';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ProyectosPage() {
  const cases = [
    {
      title: "Gestión de Riesgo Urbano (Cali)",
      ally: "Alcaldía de Cali / DAGMA / CVC (Convenio 0095).",
      challenge: "Intervención de arbolado en riesgo en zonas de alta densidad urbana.",
      solution: "Cuadrillas especializadas con equipos de altura (Res. 0312).",
      results: [
        "✅ 0 Accidentes de Trabajo.",
        "✅ Georreferenciación Total.",
        "✅ Paz Social (Sin conflictos)."
      ],
      image: "/images/tala1.png",
      alt: "Gestión de Riesgo Urbano"
    },
    {
      title: "Restauración de Ecosistemas (Dagua)",
      ally: "CVC (Convenio 0037).",
      challenge: "Protección de fuentes hídricas en zona rural.",
      solution: "Gestión integral del ciclo biológico y articulación comunitaria.",
      results: [
        "✅ 100% de Cumplimiento.",
        "✅ Vivero Especializado.",
        "✅ Apropiación Real (Comunidad vinculada)."
      ],
      image: "/images/servicios1.png",
      alt: "Restauración de Ecosistemas"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <SecondaryHero
        title="Trayectoria que Genera Confianza"
        subtitle="Más de 24 años combinando precisión técnica y gestión social en el Pacífico colombiano."
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

                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                    <span className="font-bold text-primary">Aliado:</span> {project.ally}
                  </p>
                  <p>
                    <span className="font-bold text-primary">Desafío:</span> {project.challenge}
                  </p>
                  <p>
                    <span className="font-bold text-primary">Solución:</span> {project.solution}
                  </p>
                  <div>
                    <span className="font-bold text-primary block mb-2">Resultados:</span>
                    <ul className="list-none space-y-1 pl-4">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-center">
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
