interface FinancialInfoStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function FinancialInfoStep({ data, updateData }: FinancialInfoStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Cena sprzedaży
        </label>
        <div className="relative">
          <input
            type="text"
            value={data.price}
            onChange={(e) => updateData({ price: e.target.value })}
            className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
            placeholder="1 000 000"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            PLN
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Miesięczny przychód
        </label>
        <div className="relative">
          <input
            type="text"
            value={data.monthlyRevenue}
            onChange={(e) => updateData({ monthlyRevenue: e.target.value })}
            className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
            placeholder="100 000"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            PLN
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Roczny zysk
        </label>
        <div className="relative">
          <input
            type="text"
            value={data.yearlyProfit}
            onChange={(e) => updateData({ yearlyProfit: e.target.value })}
            className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
            placeholder="500 000"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            PLN
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Wartość inwentarza
        </label>
        <div className="relative">
          <input
            type="text"
            value={data.inventory}
            onChange={(e) => updateData({ inventory: e.target.value })}
            className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
            placeholder="200 000"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            PLN
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Status nieruchomości
        </label>
        <select
          value={data.realEstate}
          onChange={(e) => updateData({ realEstate: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
        >
          <option value="lease">Wynajem</option>
          <option value="owned">Własność</option>
          <option value="optional">Opcjonalny zakup</option>
        </select>
      </div>
    </div>
  );
}