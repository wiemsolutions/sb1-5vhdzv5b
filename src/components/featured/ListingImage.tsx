import CategoryIcon from '../categories/CategoryIcon';

interface ListingImageProps {
  image: string;
  title: string;
  category: string;
  categoryIcon: string;
  isFeatured?: boolean;
}

export default function ListingImage({ image, title, category, categoryIcon, isFeatured }: ListingImageProps) {
  return (
    <div className="relative h-40 md:h-48">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {isFeatured && (
        <div className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-0.5 rounded-full text-xs font-medium md:text-sm md:px-3 md:py-1 flex items-center">
          <span className="relative">
            <span className="animate-ping absolute -left-1 -top-1 h-3 w-3 rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400 mr-1.5"></span>
          </span>
          Wyróżnione
        </div>
      )}
      <div className="absolute top-3 right-3 bg-sea-600 text-white px-2 py-0.5 rounded-full text-xs font-medium md:text-sm md:px-3 md:py-1 md:top-4 md:right-4 flex items-center">
        <CategoryIcon icon={categoryIcon} className="w-3.5 h-3.5 mr-1.5 md:w-4 md:h-4" />
        {category}
      </div>
    </div>
  );
}