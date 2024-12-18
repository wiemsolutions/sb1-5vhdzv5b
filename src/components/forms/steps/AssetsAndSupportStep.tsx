interface AssetsAndSupportStepProps {
  data: any;
  updateData: (data: any) => void;
}

const assetOptions = [
  'Wyposażenie i sprzęt',
  'Meble i wystrój',
  'Pojazdy',
  'Zapasy magazynowe',
  'Baza klientów',
  'Strona internetowa',
  'Znaki towarowe',
  'Licencje i pozwolenia',
  'Kontrakty i umowy',
  'Systemy IT'
];

export default function AssetsAndSupportStep({ data, updateData }: AssetsAndSupportStepProps) {
  const handleAssetChange = (asset: string) => {
    const newAssets = data.assets.includes(asset)
      ? data.assets.filter((a: string) => a !== asset)
      : [...data.assets, asset];
    updateData({ assets: newAssets });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Aktywa wchodzące w skład sprzedaży
        </label>
        <div className="grid grid-cols-2 gap-4">
          {assetOptions.map((asset) => (
            <label key={asset} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={data.assets.includes(asset)}
                onChange={() => handleAssetChange(asset)}
                className="rounded border-gray-300 text-sea-600 focus:ring-sea-500"
              />
              <span className="text-sm text-gray-700">{asset}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Okres przejściowy
        </label>
        <select
          value={data.transitionPeriod}
          onChange={(e) => updateData({ transitionPeriod: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
        >
          <option value="1">1 miesiąc</option>
          <option value="2">2 miesiące</option>
          <option value="3">3 miesiące</option>
          <option value="6">6 miesięcy</option>
        </select>
      </div>

      <div className="space-y-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={data.training}
            onChange={(e) => updateData({ training: e.target.checked })}
            className="rounded border-gray-300 text-sea-600 focus:ring-sea-500"
          />
          <span className="text-sm text-gray-700">
            Oferuję szkolenie dla nowego właściciela
          </span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={data.ongoingSupport}
            onChange={(e) => updateData({ ongoingSupport: e.target.checked })}
            className="rounded border-gray-300 text-sea-600 focus:ring-sea-500"
          />
          <span className="text-sm text-gray-700">
            Oferuję dalsze wsparcie konsultacyjne
          </span>
        </label>
      </div>
    </div>
  );
}