import { useState, useEffect } from 'react';
import { Stripe } from '@stripe/stripe-js';
import { getStripe } from '../config/stripe';

export const useStripe = () => {
  const [stripe, setStripe] = useState<Stripe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const initStripe = async () => {
      try {
        const stripeInstance = await getStripe();
        setStripe(stripeInstance);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load Stripe'));
      } finally {
        setIsLoading(false);
      }
    };

    initStripe();
  }, []);

  return { stripe, isLoading, error };
};