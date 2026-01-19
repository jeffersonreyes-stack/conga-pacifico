'use client';

import Link from 'next/link';

export default function LeadMagnet() {
  return (
    <section className="bg-primary py-24 text-white">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight">
          Transformamos la responsabilidad ambiental en un activo de confianza para su organización.
        </h2>

        <div className="flex justify-center">
          <Link
             href="/contacto"
             className="bg-accent hover:bg-orange-600 text-white font-heading font-bold py-4 px-10 rounded-md transition-all transform hover:-translate-y-1 shadow-lg text-lg"
           >
             Hable con un especialista
           </Link>
        </div>
      </div>
    </section>
  );
}
