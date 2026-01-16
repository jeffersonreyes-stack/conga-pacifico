'use client';

import { Download } from 'lucide-react';
import { useState } from 'react';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    if(email) setStatus('success');
  };

  return (
    <section className="bg-primary py-20 text-white">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Evite Sanciones Ambientales en su Próximo Proyecto
        </h2>
        <p className="text-slate-200 text-lg mb-8">
          Descargue gratis nuestro análisis técnico: <br className="hidden md:block"/>
          <strong className="text-white">"Los 5 Errores Comunes en Licenciamiento que generan Multas Millonarias"</strong>.
        </p>

        {status === 'success' ? (
          <div className="bg-white/10 border border-white/20 p-6 rounded-lg inline-block">
            <p className="font-bold text-xl mb-2">¡Gracias por su interés!</p>
            <p className="text-slate-200">El reporte ha sido enviado a {email}.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Ingrese su correo corporativo"
              className="w-full md:w-96 px-6 py-4 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-accent hover:bg-orange-600 text-white font-heading font-bold py-4 px-8 rounded-md transition-colors flex items-center justify-center shadow-lg"
            >
              <Download className="mr-2 w-5 h-5" />
              Descargar Análisis
            </button>
          </form>
        )}

        <p className="mt-6 text-xs text-slate-400">
          Respetamos su privacidad. Política de Tratamiento de Datos Personales.
        </p>
      </div>
    </section>
  );
}
