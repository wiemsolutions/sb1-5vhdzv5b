import { Handshake, GraduationCap, Clock } from 'lucide-react';

export default function SellerSupport() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Wsparcie sprzedającego
      </h2>
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-sea-50 p-2 rounded-lg mr-4">
            <Handshake className="w-6 h-6 text-sea-600" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Okres przejściowy</h3>
            <p className="text-gray-600">
              Sprzedający oferuje 3-miesięczny okres przejściowy, aby zapewnić płynne przekazanie biznesu.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-sea-50 p-2 rounded-lg mr-4">
            <GraduationCap className="w-6 h-6 text-sea-600" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Szkolenie</h3>
            <p className="text-gray-600">
              Kompleksowe szkolenie z zakresu operacji, procesów i relacji z klientami.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-sea-50 p-2 rounded-lg mr-4">
            <Clock className="w-6 h-6 text-sea-600" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Dostępność</h3>
            <p className="text-gray-600">
              Dodatkowe wsparcie konsultacyjne dostępne przez 6 miesięcy po przejęciu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}