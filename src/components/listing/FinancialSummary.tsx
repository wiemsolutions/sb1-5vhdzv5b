import { FeaturedListing } from '../../data/featuredListings';
import { TrendingUp, DollarSign, PieChart, ArrowUpRight } from 'lucide-react';

interface FinancialSummaryProps {
  listing: FeaturedListing;
}

export default function FinancialSummary({ listing }: FinancialSummaryProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Podsumowanie finansowe
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <TrendingUp className="w-5 h-5 text-sea-600 mr-2" />
            <h3 className="font-semibold">Przychody</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">{listing.monthlyRevenue}/mies.</p>
          <p className="text-sm text-gray-600 mt-1">Stabilny wzrost rok do roku</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <DollarSign className="w-5 h-5 text-sea-600 mr-2" />
            <h3 className="font-semibold">Zysk operacyjny</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">{listing.yearlyProfit}/rok</p>
          <p className="text-sm text-gray-600 mt-1">Marża na poziomie 25%</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold mb-3">Struktura kosztów</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Koszty pracownicze</span>
            <span className="font-medium">35%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Koszty operacyjne</span>
            <span className="font-medium">25%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Marketing i sprzedaż</span>
            <span className="font-medium">15%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Pozostałe koszty</span>
            <span className="font-medium">25%</span>
          </div>
        </div>
      </div>
    </div>
  );
}