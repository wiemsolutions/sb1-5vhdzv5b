import { Link } from 'react-router-dom';

export default function ListingDisclaimer() {
  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600">
      <p className="mb-4">
        <strong className="text-gray-900">ZASTRZEŻENIE:</strong> ksBiznes.pl nie jest powiązany z firmą ani jej nie posiada, ani nie ponosi żadnej odpowiedzialności prawnej za jej sprzedaż. Wszelkie zapytania, negocjacje i transakcje należy kierować do wymienionego właściciela lub przedstawiciela, którego dane kontaktowe podano w opisie ogłoszenia. Nie gwarantujemy dokładności informacji ani powodzenia negocjacji.
      </p>
      <p>
        Korzystając z naszych usług, akceptujesz naszą{' '}
        <Link to="/privacy" className="text-sea-600 hover:text-sea-700">
          politykę prywatności
        </Link>{' '}
        oraz{' '}
        <Link to="/terms" className="text-sea-600 hover:text-sea-700">
          regulamin
        </Link>
        . Serwis jest regulowany zgodnie z obowiązującymi przepisami prawa.
      </p>
    </div>
  );
}