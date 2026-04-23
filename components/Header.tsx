'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md transition-all duration-300 py-4 shadow-md border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative h-20 w-40 md:h-24 md:w-56">
            <Image
              src="/images/logo.png"
              alt="CONGA PACIFICO Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-heading font-bold text-primary text-xl md:text-3xl group-hover:text-accent transition-colors tracking-tight">
            CONGA PACIFICO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Inicio', path: '/' },
            { name: 'Servicios', path: '/servicios' },
            { name: 'Trazabilidad y Tecnología', path: '/tecnologia' },
            { name: 'Experiencia', path: '/experiencia' },
            { name: 'Proyectos', path: '/proyectos' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="font-heading font-semibold text-primary hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="bg-accent hover:opacity-90 text-white font-bold py-2 px-6 rounded-md transition-all transform hover:-translate-y-0.5 shadow-lg"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-4">
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Servicios', path: '/servicios' },
                { name: 'Trazabilidad y Tecnología', path: '/tecnologia' },
                { name: 'Experiencia', path: '/experiencia' },
                { name: 'Proyectos', path: '/proyectos' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="font-heading font-medium text-slate-800 hover:text-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="bg-accent text-white font-bold py-3 px-6 rounded-md text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
