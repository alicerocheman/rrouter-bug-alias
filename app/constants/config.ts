const env = typeof window !== 'undefined' ? import.meta.env : process.env;

export const getEnv = (name: string, defaultValue: string): string => {
  return env[name] ?? defaultValue;
};

export const ENV = getEnv('VITE_ENV', 'production');

export const NODE_ENV = getEnv('NODE_ENV', 'production');

/**
 * Locales
 */
export const BRAND = getEnv('VITE_BRAND', 'en');
export const BASE_LOCALE = getEnv('VITE_BASE_LOCALE', 'en');
export const OTHER_LOCALES: string[] = JSON.parse(getEnv('VITE_OTHER_LOCALES', '[]'));

