import { Building2, Landmark, ShieldCheck } from 'lucide-react';

export default function SocialProof() {
  const partners = [
    { name: 'CVC', icon: <Landmark size={32} /> }, // Placeholder: Regional Environmental Authority
    { name: 'DAGMA', icon: <ShieldCheck size={32} /> }, // Placeholder: Local Authority
    { name: 'Alcaldía de Cali', icon: <Building2 size={32} /> }, // Placeholder: City Hall
  ];

  return (
    <div className="w-full bg-slate-50 border-b border-slate-200 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <p className="text-center text-slate-400 font-heading text-sm uppercase tracking-widest mb-6">
          Entidades y Aliados que confían en nuestro rigor
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center space-x-3 group">
              <div className="text-slate-500 group-hover:text-primary transition-colors">
                {partner.icon}
              </div>
              <span className="text-xl md:text-2xl font-heading font-bold text-slate-400 group-hover:text-slate-600 uppercase">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
