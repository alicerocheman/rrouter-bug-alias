import { ENV } from "~/constants/config";

const isProd = (env: string): boolean => ["production", "prod"].includes(env);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const safeLog: (...args: any[]) => void = (...args) => {
  if (!isProd(ENV)) {
    // eslint-disable-next-line no-console
    console.log(...args);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const safeWarn: (...args: any[]) => void = (...args) => {
  if (!isProd(ENV)) {
    // eslint-disable-next-line no-console
    console.warn(...args);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const safeTable: (...args: any[]) => void = (...args) => {
  if (!isProd(ENV)) {
    // eslint-disable-next-line no-console
    console.table(...args);
  }
};
