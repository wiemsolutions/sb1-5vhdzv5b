import { useEffect, useState } from 'react';
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_LIBRARIES } from '../config/constants';

declare global {
  interface Window {
    google: any;
    initGoogleMaps?: () => void;
  }
}

const SCRIPT_ID = 'google-maps-script';
const CALLBACK_NAME = 'initGoogleMaps';

let isScriptLoading = false;
let isScriptLoaded = false;

export function useGoogleMapsScript() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isScriptLoaded || window.google) {
      setIsLoaded(true);
      return;
    }

    if (isScriptLoading) {
      window[CALLBACK_NAME] = () => {
        isScriptLoaded = true;
        setIsLoaded(true);
      };
      return;
    }

    if (!GOOGLE_MAPS_API_KEY) {
      console.error('Google Maps API key is not configured');
      return;
    }

    isScriptLoading = true;
    window[CALLBACK_NAME] = () => {
      isScriptLoaded = true;
      setIsLoaded(true);
    };
    
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=${GOOGLE_MAPS_LIBRARIES.join(',')}&callback=${CALLBACK_NAME}&v=weekly`;
    script.async = true;
    script.defer = true;
    script.nonce = document.querySelector('meta[name="csp-nonce"]')?.getAttribute('content') || '';
    
    document.head.appendChild(script);

    return () => {
      window[CALLBACK_NAME] = undefined;
    };
  }, []);

  return isLoaded;
}