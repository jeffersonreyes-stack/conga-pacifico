import SecondaryHero from '@/components/SecondaryHero';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactoPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <SecondaryHero
        title="Contáctenos"
        subtitle="Estamos listos para ser su aliado estratégico. Cuéntenos sobre su proyecto."
      />

      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Contact Info Sidebar */}
          <div className="lg:w-1/3 space-y-8">
             <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                <h3 className="text-xl font-heading font-bold text-primary mb-6">Información Directa</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                     <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <Mail className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-sm text-slate-500 font-bold">Correo Electrónico</p>
                        <a href="mailto:congapacifico@gmail.com" className="text-slate-800 hover:text-accent font-medium transition-colors">
                           congapacifico@gmail.com
                        </a>
                     </div>
                  </div>

                  <div className="flex items-start space-x-4">
                     <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <Phone className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-sm text-slate-500 font-bold">Línea de Atención</p>
                        <a href="tel:+573012293970" className="text-slate-800 hover:text-accent font-medium transition-colors">
                           +57 301 229 3970
                        </a>
                     </div>
                  </div>

                  <div className="flex items-start space-x-4">
                     <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <MapPin className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-sm text-slate-500 font-bold">Oficina Principal</p>
                        <p className="text-slate-800">
                           av 6N # 14N - 31<br/>Cali, Valle del Cauca
                        </p>
                     </div>
                  </div>
                </div>
             </div>

             <div className="bg-primary text-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-heading font-bold mb-4">¿Por qué elegirnos?</h3>
                <ul className="space-y-3 text-slate-200">
                   <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Respuesta ágil y personalizada
                   </li>
                   <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Solvencia técnica comprobada
                   </li>
                   <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Compromiso con la seguridad
                   </li>
                </ul>
             </div>
          </div>

          {/* Form Area */}
          <div className="lg:w-2/3">
             <ContactForm />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
