import { FeaturedListing } from '../../data/featuredListings';

interface BusinessOverviewProps {
  listing: FeaturedListing;
}

export default function BusinessOverview({ listing }: BusinessOverviewProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Przegląd biznesu
      </h2>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-6">
          {listing.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Model biznesowy</h3>
            <p className="text-gray-600">
              Firma działa w modelu B2C, oferując wysokiej jakości produkty i usługi dla klientów indywidualnych.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Historia firmy</h3>
            <p className="text-gray-600">
              Założona w {listing.established} roku, firma systematycznie budowała swoją pozycję na rynku i bazę lojalnych klientów.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Potencjał rozwoju</h3>
            <p className="text-gray-600">
              Znaczący potencjał wzrostu poprzez ekspansję geograficzną i rozwój kanałów online.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Powód sprzedaży</h3>
            <p className="text-gray-600">
              Właściciel planuje przejście na emeryturę po wielu latach udanej działalności.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}