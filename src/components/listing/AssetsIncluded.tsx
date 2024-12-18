import { FeaturedListing } from '../../data/featuredListings';
import { Check } from 'lucide-react';

interface AssetsIncludedProps {
  listing: FeaturedListing;
}

export default function AssetsIncluded({ listing }: AssetsIncludedProps) {
  const assets = [
    'Pełne wyposażenie i sprzęt',
    'Baza klientów i kontakty biznesowe',
    'Strona internetowa i systemy IT',
    'Znaki towarowe i własność intelektualna',
    'Kontrakty i umowy',
    'Zapasy magazynowe'
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Aktywa w cenie
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {assets.map((asset, index) => (
          <div key={index} className="flex items-center">
            <Check className="w-5 h-5 text-sea-600 mr-2 flex-shrink-0" />
            <span className="text-gray-600">{asset}</span>
          </div>
        ))}
      </div>
    </div>
  );
}