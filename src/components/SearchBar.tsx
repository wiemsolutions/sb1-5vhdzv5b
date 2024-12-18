import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useGoogleMapsScript } from '../hooks/useGoogleMapsScript';
import LocationSearch from './search/LocationSearch';
import IndustrySearch from './search/IndustrySearch';
import { useState } from 'react';

export default function SearchBar() {
  const isGoogleMapsLoaded = useGoogleMapsScript();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    location: '',
    category: ''
  });

  const handleLocationSelect = ({ lat, lng }: { lat: number; lng: number }) => {
    setSearchParams(prev => ({ ...prev, location: `${lat},${lng}` }));
  };

  const handleIndustrySelect = (industry: string) => {
    setSearchParams(prev => ({ ...prev, category: industry }));
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchParams.location) params.append('location', searchParams.location);
    if (searchParams.category) params.append('category', searchParams.category);
    
    navigate({
      pathname: '/listings',
      search: params.toString()
    });
  };

  return (
    <div className="max-w-4xl w-full mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {isGoogleMapsLoaded ? (
          <LocationSearch onLocationSelect={handleLocationSelect} />
        ) : (
          <div className="flex-1 animate-pulse bg-gray-200 rounded-lg h-[50px]" />
        )}
        <IndustrySearch onIndustrySelect={handleIndustrySelect} />
        
        <button 
          onClick={handleSearch}
          className="px-8 py-3 bg-sea-600 text-white rounded-lg hover:bg-sea-700 flex items-center justify-center whitespace-nowrap"
        >
          <Search className="w-5 h-5" />
          <span className="ml-2">Szukaj</span>
        </button>
      </div>
    </div>
  );
}