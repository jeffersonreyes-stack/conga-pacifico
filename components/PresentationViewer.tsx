'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  type: 'image' | 'pdf';
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface PresentationViewerProps {
  slides: Slide[];
  title: string;
}

export default function PresentationViewer({ slides, title }: PresentationViewerProps) {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!fullscreen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') setFullscreen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [fullscreen, next, prev]);

  const slide = slides[current];

  return (
    <>
      {/* Inline Viewer */}
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="bg-primary/5 px-6 py-4 flex items-center justify-between border-b border-slate-200">
          <h3 className="font-heading font-bold text-primary text-lg">{title}</h3>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500 font-medium">
              {current + 1} / {slides.length}
            </span>
            <button
              onClick={() => setFullscreen(true)}
              className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              title="Ver en pantalla completa"
            >
              <Maximize2 size={18} />
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Slide Content */}
          <div className="relative w-full aspect-[16/9] bg-slate-100">
            {slide.type === 'image' ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            ) : (
              <iframe
                src={`${slide.src}#toolbar=0&navpanes=0`}
                className="w-full h-full border-0"
                title={slide.alt}
              />
            )}
          </div>

          {/* Navigation Arrows */}
          {slides.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg text-primary transition-all hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg text-primary transition-all hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Slide Info */}
        <div className="px-6 py-5 border-t border-slate-200">
          <h4 className="font-heading font-bold text-primary text-lg mb-1">{slide.title}</h4>
          <p className="text-slate-600 text-sm leading-relaxed">{slide.description}</p>
        </div>

        {/* Thumbnail Navigation */}
        {slides.length > 1 && (
          <div className="px-6 pb-5 flex gap-3 overflow-x-auto">
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === current
                    ? 'border-accent shadow-md scale-105'
                    : 'border-slate-200 opacity-60 hover:opacity-100'
                }`}
              >
                {s.type === 'image' ? (
                  <Image src={s.src} alt={s.alt} fill className="object-cover" sizes="96px" />
                ) : (
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">PDF</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col"
          >
            {/* Fullscreen Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-black/90">
              <div>
                <h3 className="font-heading font-bold text-white text-lg">{slide.title}</h3>
                <p className="text-slate-400 text-sm">{current + 1} / {slides.length}</p>
              </div>
              <button
                onClick={() => setFullscreen(false)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Fullscreen Content */}
            <div className="flex-1 relative">
              {slide.type === 'image' ? (
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-contain p-4"
                  sizes="100vw"
                  priority
                />
              ) : (
                <iframe
                  src={slide.src}
                  className="w-full h-full border-0"
                  title={slide.alt}
                />
              )}

              {slides.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
            </div>

            {/* Fullscreen Thumbnails */}
            {slides.length > 1 && (
              <div className="flex justify-center gap-3 px-6 py-4 bg-black/90">
                {slides.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === current
                        ? 'border-accent shadow-md'
                        : 'border-white/20 opacity-50 hover:opacity-100'
                    }`}
                  >
                    {s.type === 'image' ? (
                      <Image src={s.src} alt={s.alt} fill className="object-cover" sizes="80px" />
                    ) : (
                      <div className="w-full h-full bg-white/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">PDF</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
