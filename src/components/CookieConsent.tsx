import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { getCookie, setCookie } from '../utils/cookies';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = getCookie('CONSENT');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie('CONSENT', { accepted: true, date: new Date().toISOString() });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-gray-600 text-sm">
              Używamy plików cookie, aby zapewnić najlepszą jakość korzystania z naszej witryny. 
              Kontynuując przeglądanie strony, zgadzasz się na ich wykorzystanie zgodnie z naszą{' '}
              <Link to="/privacy" className="text-sea-600 hover:text-sea-700">
                polityką prywatności
              </Link>.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-sea-600 text-white rounded-lg hover:bg-sea-700 text-sm font-medium whitespace-nowrap"
            >
              Akceptuję
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-gray-400 hover:text-gray-600"
              aria-label="Zamknij"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}