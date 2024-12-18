export const config = {
  stripe: {
    publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY,
  },
  googleMaps: {
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  },
} as const;

export const isConfigValid = () => {
  const missingKeys: string[] = [];

  if (!config.stripe.publishableKey) {
    missingKeys.push('VITE_STRIPE_PUBLISHABLE_KEY');
  }
  if (!config.googleMaps.apiKey) {
    missingKeys.push('VITE_GOOGLE_MAPS_API_KEY');
  }

  if (missingKeys.length > 0) {
    console.error(`Missing required environment variables: ${missingKeys.join(', ')}`);
    return false;
  }

  return true;
};