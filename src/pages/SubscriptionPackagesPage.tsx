import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import PaymentGateway from '../components/payment/PaymentGateway';
import { useAuth } from '../contexts/AuthContext';
import FAQSection from '../components/faq/FAQSection';

const packages = [
  {
    id: 'basic',
    name: 'Podstawowy',
    price: 29,
    duration: '30 dni',
    features: [
      'Jedno ogłoszenie',
      'Podstawowa widoczność',
      'Kontakt przez formularz',
      'Statystyki wyświetleń'
    ]
  },
  {
    id: 'featured',
    name: 'Wyróżniony',
    price: 55,
    duration: '30 dni',
    popular: true,
    features: [
      'Jedno ogłoszenie',
      'Wyróżnienie na liście',
      'Priorytetowa pozycja w wynikach',
      'Kontakt przez formularz',
      'Szczegółowe statystyki',
      'Wsparcie priorytetowe'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 100,
    duration: '3 miesiące',
    features: [
      'Jedno ogłoszenie',
      'Wyróżnienie na liście',
      'Najwyższa pozycja w wynikach',
      'Kontakt przez formularz',
      'Zaawansowane statystyki',
      'Wsparcie VIP',
      'Promocja w newsletterze'
    ]
  }
];

export default function SubscriptionPackagesPage() {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<typeof packages[0] | null>(null);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handlePackageSelect = (pkg: typeof packages[0]) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    setSelectedPackage(pkg);
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    navigate('/add-listing');
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
    setSelectedPackage(null);
  };

  if (showPayment && selectedPackage) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16">
        <PaymentGateway
          amount={selectedPackage.price}
          onSuccess={handlePaymentSuccess}
          onCancel={handlePaymentCancel}
        />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section with Background */}
          <div className="relative py-12 mb-12 rounded-2xl overflow-hidden bg-gradient-to-r from-sea-600 to-sea-800">
            <div className="relative z-10 text-center">
              <h1 className="text-3xl font-bold text-white mb-4">
                Wybierz pakiet ogłoszeniowy
              </h1>
              <p className="text-lg text-sea-100">
                Dopasuj odpowiedni pakiet do swoich potrzeb i zwiększ szanse na sprzedaż
              </p>
            </div>
          </div>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl ${
                  pkg.popular 
                    ? 'ring-2 ring-sea-500 shadow-xl' 
                    : 'border border-gray-200 shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-sea-500 text-white shadow-md">
                      <Star className="w-4 h-4 mr-1" />
                      Najpopularniejszy
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="mt-4 mb-6">
                      <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-gray-600"> PLN</span>
                      <p className="text-sm text-gray-500 mt-1">{pkg.duration}</p>
                    </div>

                    <ul className="space-y-3 text-left mb-8">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-sea-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handlePackageSelect(pkg)}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                        pkg.popular
                          ? 'bg-sea-600 text-white hover:bg-sea-700 shadow-md'
                          : 'bg-white text-sea-600 border-2 border-sea-600 hover:bg-sea-50'
                      }`}
                    >
                      Wybierz pakiet
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center text-gray-600">
            <p>Wszystkie ceny są cenami netto. Do każdego pakietu należy doliczyć podatek VAT.</p>
            <p className="mt-2">
              Potrzebujesz indywidualnej oferty?{' '}
              <a href="mailto:contact@ksbiznes.pl" className="text-sea-600 hover:text-sea-700">
                Skontaktuj się z nami
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}