import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CONGA PACIFICO | Ingeniería Ambiental y Gestión del Riesgo",
  description: "Socio Estratégico de Ingeniería Ambiental y Gestión del Riesgo para grandes constructoras y multinacionales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${openSans.variable} font-body antialiased bg-slate-50 text-slate-900 flex flex-col min-h-screen`}
      >
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
