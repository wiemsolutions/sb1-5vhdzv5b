import Cookies from 'js-cookie';

export const COOKIE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_PREFERENCES: 'user_preferences',
  CONSENT: 'cookie_consent',
  LAST_SEARCH: 'last_search',
  VIEWED_LISTINGS: 'viewed_listings',
  THEME: 'theme',
  LANGUAGE: 'language',
} as const;

export const COOKIE_OPTIONS = {
  secure: true,
  sameSite: 'strict',
  expires: 365, // 1 year
} as const;

export const setCookie = (key: keyof typeof COOKIE_KEYS, value: any) => {
  Cookies.set(COOKIE_KEYS[key], JSON.stringify(value), COOKIE_OPTIONS);
};

export const getCookie = (key: keyof typeof COOKIE_KEYS) => {
  const value = Cookies.get(COOKIE_KEYS[key]);
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

export const removeCookie = (key: keyof typeof COOKIE_KEYS) => {
  Cookies.remove(COOKIE_KEYS[key]);
};

export const clearAllCookies = () => {
  Object.values(COOKIE_KEYS).forEach(key => {
    Cookies.remove(key);
  });
};