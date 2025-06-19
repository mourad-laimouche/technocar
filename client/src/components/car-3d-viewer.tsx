import { useEffect, useRef, useState } from 'react';
import { Car } from '@/data/cars';

interface Car3DViewerProps {
  car: Car;
}

export default function Car3DViewer({ car }: Car3DViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const images = [car.image, ...car.gallery];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRotating) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRotating, images.length]);

  const handleManualRotation = (direction: 'left' | 'right') => {
    setIsRotating(false);
    if (direction === 'left') {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    } else {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl overflow-hidden">
      {/* Ambient Lighting Effects */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* 3D Container */}
      <div 
        ref={containerRef}
        className="relative w-full h-full"
        style={{ 
          perspective: '1200px',
          perspectiveOrigin: '50% 50%'
        }}
      >
        {/* 3D Photo Cube */}
        <div 
          className="absolute inset-4 transition-all duration-1000 ease-out transform-gpu"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(${currentImageIndex * 90}deg)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 backface-hidden"
              style={{
                transform: `rotateY(${index * 90}deg) translateZ(150px)`,
                backfaceVisibility: 'hidden'
              }}
            >
              <img
                src={image}
                alt={`${car.name} - Vue ${index + 1}`}
                className="w-full h-full object-contain"
                style={{
                  filter: `
                    brightness(1.1) 
                    contrast(1.05) 
                    saturate(1.1)
                    drop-shadow(0 20px 40px rgba(255,215,0,0.4))
                  `
                }}
              />
              {/* Realistic lighting overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,215,0,0.1) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.2) 100%)'
                }}
              />
            </div>
          ))}
        </div>

        {/* 3D Reflection Effect */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 opacity-30"
          style={{
            background: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)`,
            transform: 'scaleY(-1) translateY(100%)',
            transformOrigin: 'bottom'
          }}
        >
          <img
            src={images[currentImageIndex]}
            alt=""
            className="w-full h-full object-contain filter blur-sm"
          />
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <button
          onClick={() => handleManualRotation('left')}
          className="pointer-events-auto bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
          aria-label="Rotation gauche"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => handleManualRotation('right')}
          className="pointer-events-auto bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
          aria-label="Rotation droite"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* 3D Controls Panel */}
      <div className="absolute top-4 right-4 space-y-2">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            isRotating 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-black/50 text-white hover:bg-black/70'
          }`}
        >
          {isRotating ? 'Pause 3D' : 'Auto 3D'}
        </button>

        {/* TechnoCars 3D Badge */}
        <div className="bg-primary/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary font-semibold border border-primary/30">
          Vue 3D Interactive
        </div>
      </div>

      {/* View Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsRotating(false);
              setCurrentImageIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-primary scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Vue ${index + 1}`}
          />
        ))}
      </div>

      {/* 3D Effects Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-full h-1/3 opacity-20"
          style={{
            background: 'linear-gradient(180deg, rgba(255,215,0,0.1) 0%, transparent 100%)'
          }}
        />
      </div>
    </div>
  );
}