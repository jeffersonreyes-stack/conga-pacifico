import SecondaryHero from '@/components/SecondaryHero';

export default function RestauracionEcologicaPage() {
  return (
    <main>
      <SecondaryHero title="Restauración Ecológica" subtitle="Compensación Ambiental" />
      <div className="container mx-auto px-4 md:px-8 py-16">
        <article className="prose lg:prose-xl mx-auto text-slate-700">
          <p className="lead text-xl mb-8">
            Diseño y ejecución de planes de restauración. Recuperación de ecosistemas degradados con base científica.
          </p>
          {/* Placeholder for future content */}
          <div className="bg-slate-50 p-8 rounded-xl border border-dashed border-slate-300 text-center">
            <p className="text-slate-500 italic">Contenido detallado en redacción...</p>
          </div>
        </article>
      </div>
    </main>
  );
}
