import Image from 'next/image';

export default function SocialProof() {
  const partners = [
    { name: 'CVC', logo: '/images/logo-cvc.png', width: 120, height: 60 },
    { name: 'DAGMA', logo: '/images/logo-dagma.png', width: 100, height: 50 },
    { name: 'Alcaldía de Cali', logo: '/images/logo-alcaldia.png', width: 80, height: 80 },
  ];

  return (
    <div className="w-full bg-slate-50 border-b border-slate-200 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <p className="text-center text-slate-400 font-heading text-sm uppercase tracking-widest mb-6">
          Entidades y Aliados que confían en nuestro rigor
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((partner, index) => (
            <div key={index} className="relative group transition-all duration-300">
              <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain h-16 w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
