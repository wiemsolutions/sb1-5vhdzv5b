import { loadStripe, Stripe } from '@stripe/stripe-js';
import { config, isConfigValid } from './env';

let stripePromise: Promise<Stripe | null>;

export const getStripe = async (): Promise<Stripe | null> => {
  if (!isConfigValid()) {
    return null;
  }

  if (!stripePromise) {
    stripePromise = loadStripe(config.stripe.publishableKey);
  }

  try {
    const stripe = await stripePromise;
    if (!stripe) {
      throw new Error('Failed to initialize Stripe');
    }
    return stripe;
  } catch (error) {
    console.error('Error loading Stripe:', error);
    return null;
  }
};