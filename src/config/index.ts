export * from './portal';

export const isProduction = process.env.NODE_ENV !== 'development';
export const pathPrefix = isProduction ? `/api` : '';
export const domain = process.env.REACT_APP_API_AUTH ?? window?.location?.origin ?? '127.0.0.1';
