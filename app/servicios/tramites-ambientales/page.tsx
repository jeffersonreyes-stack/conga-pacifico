import SecondaryHero from '@/components/SecondaryHero';

export default function TramitesAmbientalesPage() {
  return (
    <main>
      <SecondaryHero title="Trámites y Licenciamiento" subtitle="Seguridad Jurídica" />
      <div className="container mx-auto px-4 md:px-8 py-16">
        <article className="prose lg:prose-xl mx-auto text-slate-700">
          <p className="lead text-xl mb-8">
            Gestión integral de permisos ante autoridades ambientales (CVC, DAGMA, ANLA). Evite sanciones.
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
