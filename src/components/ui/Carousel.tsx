import { useRef, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode;
  showControls?: boolean;
  itemWidth?: number;
  gap?: number;
  className?: string;
  controlClassName?: string;
}

export default function Carousel({
  children,
  showControls = true,
  itemWidth = 280,
  gap = 12,
  className = '',
  controlClassName = ''
}: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = itemWidth + gap;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      {showControls && (
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-white shadow-md text-sea-600 hover:bg-sea-50 md:p-2 ${controlClassName}`}
          aria-label="Przewiń w lewo"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      )}

      <div
        ref={scrollRef}
        className={`flex overflow-x-auto scrollbar-hide snap-x snap-mandatory ${className}`}
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          gap: `${gap}px`
        }}
      >
        {children}
      </div>

      {showControls && (
        <button
          onClick={() => scroll('right')}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-white shadow-md text-sea-600 hover:bg-sea-50 md:p-2 ${controlClassName}`}
          aria-label="Przewiń w prawo"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      )}
    </div>
  );
}