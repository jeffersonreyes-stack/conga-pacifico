import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ServiceCard({ title, description, imageSrc, imageAlt }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-slate-100 flex flex-col h-full">
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-heading font-bold text-primary mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed flex-1">{description}</p>
      </div>
    </div>
  );
}
