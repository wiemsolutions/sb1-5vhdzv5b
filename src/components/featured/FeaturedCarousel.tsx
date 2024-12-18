import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FeaturedCard from './FeaturedCard';

interface FeaturedListing {
  title: string;
  price: string;
  location: string;
  image: string;
}

interface FeaturedCarouselProps {
  listings: FeaturedListing[];
}

export default function FeaturedCarousel({ listings }: FeaturedCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 md:hidden">
        <button
          onClick={() => scroll('left')}
          className="p-2 rounded-full bg-white shadow-md text-sea-600 hover:bg-sea-50"
          aria-label="Poprzednia oferta"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide gap-6 px-4 snap-x snap-mandatory md:grid md:grid-cols-3"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {listings.map((listing, index) => (
          <div key={index} className="w-full flex-shrink-0 snap-start">
            <FeaturedCard listing={listing} />
          </div>
        ))}
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 md:hidden">
        <button
          onClick={() => scroll('right')}
          className="p-2 rounded-full bg-white shadow-md text-sea-600 hover:bg-sea-50"
          aria-label="Następna oferta"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}