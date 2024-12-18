import { FeaturedListing } from '../../data/featuredListings';
import { Users, Calendar, TrendingUp, Building2, DollarSign, Briefcase } from 'lucide-react';

interface KeyDetailsProps {
  listing: FeaturedListing;
}

export default function KeyDetails({ listing }: KeyDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Kluczowe informacje
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex items-start">
          <DollarSign className="w-5 h-5 text-sea-600 mr-2 mt-0.5" />
          <div>
            <div className="text-sm text-gray-600">Cena</div>
            <div className="font-semibold">{listing.price}</div>
          </div>
        </div>
        <div className="flex items-start">
          <TrendingUp className="w-5 h-5 text-sea-600 mr-2 mt-0.5" />
          <div>
            <div className="text-sm text-gray-600">Przychód miesięczny</div>
            <div className="font-semibold">{listing.monthlyRevenue}</div>
          </div>
        </div>
        <div className="flex items-start">
          <Users className="w-5 h-5 text-sea-600 mr-2 mt-0.5" />
          <div>
            <div className="text-sm text-gray-600">Pracownicy</div>
            <div className="font-semibold">{listing.employees}</div>
          </div>
        </div>
        <div className="flex items-start">
          <Calendar className="w-5 h-5 text-sea-600 mr-2 mt-0.5" />
          <div>
            <div className="text-sm text-gray-600">Rok założenia</div>
            <div className="font-semibold">{listing.established}</div>
          </div>
        </div>
        <div className="flex items-start">
          <Building2 className="w-5 h-5 text-sea-600 mr-2 mt-0.5" />
          <div>
            <div className="text-sm text-gray-600">Nieruchomość</div>
            <div className="font-semibold">Wynajem</div>
          </div>
        </div>
        <div className="flex items-start">
          <Briefcase className="w-5 h-5 text-sea-600 mr-2 mt-0.5" />
          <div>
            <div className="text-sm text-gray-600">Branża</div>
            <div className="font-semibold">{listing.category}</div>
          </div>
        </div>
      </div>
    </div>
  );
}