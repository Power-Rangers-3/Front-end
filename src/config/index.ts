export * from './portal';

export const domain = window?.location?.hostname ?? process?.env?.REACT_APP_API_AUTH ?? '127.0.0.1';
export const baseUrl = `${domain}/api`;
