import { Building } from 'lucide-react';
import { useState } from 'react';
import { industries } from '../../data/industries';

interface IndustrySearchProps {
  onIndustrySelect?: (industry: string) => void;
}

export default function IndustrySearch({ onIndustrySelect }: IndustrySearchProps) {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleIndustrySelect = (industry: string) => {
    setSelectedIndustry(industry);
    setIsDropdownOpen(false);
    onIndustrySelect?.(industry);
  };

  return (
    <div className="relative flex-1">
      <div className="relative">
        <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-sea-300 focus:outline-none focus:border-sea-500 text-left bg-white"
        >
          {selectedIndustry || 'Wybierz branżę...'}
        </button>
      </div>

      {isDropdownOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => handleIndustrySelect(industry.name)}
              className="w-full px-4 py-2 text-left hover:bg-sea-50"
            >
              {industry.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}