import { industries } from '../../../data/industries';
import LocationSearch from '../../search/LocationSearch';

interface BusinessInfoStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function BusinessInfoStep({ data, updateData }: BusinessInfoStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tytuł ogłoszenia
        </label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => updateData({ title: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
          placeholder="np. Dochodowa restauracja w centrum miasta"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Kategoria
        </label>
        <select
          value={data.category}
          onChange={(e) => updateData({ category: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
        >
          <option value="">Wybierz kategorię</option>
          {industries.map((industry) => (
            <option key={industry.id} value={industry.name}>
              {industry.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Opis firmy
        </label>
        <textarea
          value={data.description}
          onChange={(e) => updateData({ description: e.target.value })}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
          placeholder="Opisz swoją firmę, model biznesowy, historię i potencjał rozwoju..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Lokalizacja
        </label>
        <LocationSearch
          onLocationSelect={(location) => updateData({ location: location })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rok założenia
          </label>
          <input
            type="number"
            value={data.established}
            onChange={(e) => updateData({ established: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
            placeholder="np. 2015"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Liczba pracowników
          </label>
          <input
            type="number"
            value={data.employees}
            onChange={(e) => updateData({ employees: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
            placeholder="np. 10"
          />
        </div>
      </div>
    </div>
  );
}