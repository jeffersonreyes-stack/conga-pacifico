import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/logo-conga-dark-2.png"
                  alt="CONGA PACIFICO"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-bold text-white text-lg tracking-tight">
                CONGA PACIFICO
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Ingeniería Ambiental y Gestión del Riesgo con altos estándares técnicos para el sector industrial y constructor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6">Navegación</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/servicios" className="hover:text-accent transition-colors">Servicios</Link></li>
              <li><Link href="/tecnologia" className="hover:text-accent transition-colors">Tecnología GIS</Link></li>
              <li><Link href="/proyectos" className="hover:text-accent transition-colors">Proyectos</Link></li>
              <li><Link href="/seguridad" className="hover:text-accent transition-colors">Seguridad</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span>av 6N # 14N - 31<br />Cali, Valle del Cauca</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>+57 320 6963982</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>congapacifico@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Certifications (Placeholders) */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6">Certificaciones</h4>
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center text-xs text-center p-1 border border-white/20">
                ISO 9001
              </div>
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center text-xs text-center p-1 border border-white/20">
                ISO 14001
              </div>
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center text-xs text-center p-1 border border-white/20">
                RUC
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} CONGA PACIFICO S.A.S. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <a href="#" className="hover:text-white">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
