'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function ImageLightbox({ image, allImages, onClose, onNext, onPrev }) {
  const currentIndex = allImages.findIndex((img) => img.id === image.id);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext(currentIndex);
      if (e.key === 'ArrowLeft') onPrev(currentIndex);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center animate-fade-in">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-cyan-400 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Main Image */}
      <div className="relative w-full h-full max-w-4xl max-h-[80vh] flex items-center justify-center px-4">
        <Image
          src={image.image}
          alt={image.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={() => onPrev(currentIndex)}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-cyan-400 transition-colors"
        aria-label="Previous image"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={() => onNext(currentIndex)}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-cyan-400 transition-colors"
        aria-label="Next image"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm font-semibold">
        {currentIndex + 1} / {allImages.length}
      </div>

      {/* Image Info */}
      <div className="absolute bottom-6 left-6 text-white max-w-sm">
        <h3 className="text-lg font-bold mb-1">{image.title}</h3>
        <p className="text-sm text-gray-300">{image.description}</p>
      </div>
    </div>
  );
}
