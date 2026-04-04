import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experiencia y Presentaciones | CONGA PACIFICO',
  description:
    'Conoce nuestra trayectoria, casos de éxito y presentaciones sobre gestión ambiental, arbolado urbano y propuestas de valor B2B.',
};

export default function ExperienciaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
