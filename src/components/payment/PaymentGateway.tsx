import { useState } from 'react';
import { CreditCard, Building2, ArrowRight } from 'lucide-react';
import { useStripe } from '../../hooks/useStripe';
import { sendAdminNotification } from '../../utils/emailNotifications';

interface PaymentGatewayProps {
  amount: number;
  onSuccess: () => void;
  onCancel: () => void;
  packageName?: string;
  userName?: string;
  userEmail?: string;
}

export default function PaymentGateway({ 
  amount, 
  onSuccess, 
  onCancel,
  packageName = 'Standard',
  userName = '',
  userEmail = ''
}: PaymentGatewayProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const { stripe, isLoading, error } = useStripe();

  const paymentMethods = [
    {
      id: 'stripe',
      name: 'Karta płatnicza',
      icon: CreditCard,
      description: 'Zapłać kartą kredytową lub debetową'
    },
    {
      id: 'p24',
      name: 'Przelewy24',
      icon: Building2,
      description: 'Szybki przelew przez Przelewy24'
    }
  ];

  const handlePayment = async () => {
    if (!stripe) {
      console.error('Stripe has not been initialized');
      return;
    }

    try {
      // Here you would typically create a payment intent on your backend
      // and then use stripe.confirmPayment()
      
      // Send admin notification about new subscription
      await sendAdminNotification('newSubscriber', {
        packageName,
        userName,
        userEmail,
        amount
      });

      onSuccess();
    } catch (err) {
      console.error('Payment failed:', err);
    }
  };

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        Wystąpił błąd podczas ładowania systemu płatności. Spróbuj ponownie później.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Wybierz metodę płatności
      </h2>

      <div className="space-y-4 mb-8">
        {paymentMethods.map((method) => {
          const Icon = method.icon;
          return (
            <label
              key={method.id}
              className={`block relative rounded-lg border p-4 cursor-pointer hover:border-sea-500 transition-colors ${
                selectedMethod === method.id
                  ? 'border-sea-500 ring-2 ring-sea-500'
                  : 'border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="payment-method"
                value={method.id}
                className="sr-only"
                checked={selectedMethod === method.id}
                onChange={() => setSelectedMethod(method.id)}
              />
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Icon className={`w-6 h-6 ${
                    selectedMethod === method.id ? 'text-sea-600' : 'text-gray-400'
                  }`} />
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">{method.name}</p>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </div>
              </div>
            </label>
          );
        })}
      </div>

      <div className="border-t pt-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm text-gray-600">Kwota do zapłaty</p>
            <p className="text-2xl font-bold text-gray-900">
              {amount.toLocaleString('pl-PL', {
                style: 'currency',
                currency: 'PLN'
              })}
            </p>
          </div>
          <button
            onClick={onCancel}
            className="text-gray-600 hover:text-gray-900"
          >
            Anuluj
          </button>
        </div>

        <button
          onClick={handlePayment}
          disabled={!selectedMethod || isLoading}
          className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium ${
            selectedMethod && !isLoading
              ? 'bg-sea-600 hover:bg-sea-700'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          {isLoading ? 'Ładowanie...' : 'Zapłać'}
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        Płatność jest bezpieczna i szyfrowana. Klikając "Zapłać" akceptujesz{' '}
        <a href="/terms" className="text-sea-600 hover:text-sea-700">
          regulamin
        </a>{' '}
        i{' '}
        <a href="/privacy" className="text-sea-600 hover:text-sea-700">
          politykę prywatności
        </a>
        .
      </div>
    </div>
  );
}