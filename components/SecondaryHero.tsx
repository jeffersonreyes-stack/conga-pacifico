import React from 'react';

interface SecondaryHeroProps {
  title: string;
  subtitle?: string;
}

export default function SecondaryHero({ title, subtitle }: SecondaryHeroProps) {
  return (
    <section className="relative py-24 bg-primary text-white overflow-hidden mt-16 md:mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
