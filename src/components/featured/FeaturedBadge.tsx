import { Star, Clock } from 'lucide-react';
import { isFeaturedActive } from '../../utils/listingUtils';

interface FeaturedBadgeProps {
  featuredUntil: string | null;
}

export default function FeaturedBadge({ featuredUntil }: FeaturedBadgeProps) {
  if (!featuredUntil || !isFeaturedActive(featuredUntil)) return null;

  const daysLeft = Math.ceil(
    (new Date(featuredUntil).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-0.5 rounded-full text-xs font-medium md:text-sm md:px-3 md:py-1 flex items-center">
      <span className="relative">
        <span className="animate-ping absolute -left-1 -top-1 h-3 w-3 rounded-full bg-amber-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400 mr-1.5"></span>
      </span>
      <Star className="w-3.5 h-3.5 mr-1" />
      <span>Wyróżnione</span>
      <Clock className="w-3.5 h-3.5 ml-1.5 mr-1" />
      <span>{daysLeft}d</span>
    </div>
  );
}