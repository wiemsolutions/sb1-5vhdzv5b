import { useState, useCallback } from 'react';
import { getCookie, setCookie, removeCookie, COOKIE_KEYS } from '../utils/cookies';

export function useCookies<T = any>(key: keyof typeof COOKIE_KEYS) {
  const [value, setValue] = useState<T | null>(() => getCookie(key));

  const updateCookie = useCallback((newValue: T) => {
    setCookie(key, newValue);
    setValue(newValue);
  }, [key]);

  const deleteCookie = useCallback(() => {
    removeCookie(key);
    setValue(null);
  }, [key]);

  return {
    value,
    updateCookie,
    deleteCookie
  };
}