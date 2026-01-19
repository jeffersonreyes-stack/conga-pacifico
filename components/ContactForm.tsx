'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission logic
    setTimeout(() => setStatus('success'), 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center shadow-lg max-w-2xl mx-auto">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">¡Mensaje Enviado!</h3>
        <p className="text-green-700">
          Su solicitud ha sido recibida correctamente. Nuestro equipo técnico se pondrá en contacto con usted en breve para iniciar la evaluación.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-green-700 font-semibold hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nombre Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Juan Pérez"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Empresa / Organización</label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Nombre de su empresa"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Correo Corporativo</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="juan@empresa.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Teléfono de Contacto</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="+57 300 123 4567"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Detalle de su Requerimiento</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          placeholder="Describa brevemente su proyecto o la necesidad técnica..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-accent hover:bg-orange-600 text-white font-heading font-bold py-4 px-12 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center mx-auto"
        >
          <Send className="w-5 h-5 mr-2" />
          Enviar Solicitud
        </button>
        <p className="mt-4 text-xs text-slate-500">
          Sus datos serán tratados confidencialmente bajo nuestra política de privacidad.
        </p>
      </div>
    </form>
  );
}
