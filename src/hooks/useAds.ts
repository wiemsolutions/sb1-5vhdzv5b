import { useState, useEffect } from 'react';

export const useAds = (adCode: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadAd = async () => {
      try {
        // Here you would typically initialize your ad network's script
        // For example, if using Google AdSense:
        if (window.adsbygoogle) {
          await (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
        setIsLoaded(true);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load advertisement'));
      }
    };

    loadAd();
  }, [adCode]);

  return { isLoaded, error };
};