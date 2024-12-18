import { MapPin } from 'lucide-react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

interface LocationSearchProps {
  onLocationSelect?: (location: { lat: number; lng: number }) => void;
}

export default function LocationSearch({ onLocationSelect }: LocationSearchProps) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ['(cities)'],
      componentRestrictions: { country: 'pl' },
    },
    debounce: 300,
  });

  const handleLocationSelect = async (description: string) => {
    setValue(description, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address: description });
      const { lat, lng } = await getLatLng(results[0]);
      onLocationSelect?.({ lat, lng });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="relative flex-1">
      <div className="relative">
        <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Wpisz lokalizację..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-sea-300 focus:outline-none focus:border-sea-500"
          disabled={!ready}
        />
      </div>
      
      {status === 'OK' && (
        <ul className="absolute z-10 w-full bg-white mt-1 rounded-lg shadow-lg border border-gray-200">
          {data.map(({ place_id, description }) => (
            <li
              key={place_id}
              onClick={() => handleLocationSelect(description)}
              className="px-4 py-2 hover:bg-sea-50 cursor-pointer"
            >
              {description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}