export const API_CONFIG = {
  WEB_API_URL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  MOBILE_API_URL: import.meta.env.VITE_MOBILE_API_URL || 'http://10.0.2.2:8000',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
};

export const AUTH_STORAGE_KEYS = {
  TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token',
  USER: 'auth_user',
};

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'Your session has expired. Please log in again.',
  GENERIC_ERROR: 'An unexpected error occurred. Please try again.',
};

export const SOCKET_EVENTS = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  ERROR: 'error',
  STREAM_START: 'stream:start',
  STREAM_END: 'stream:end',
  USER_JOIN: 'user:join',
  USER_LEAVE: 'user:leave',
  CONTENT_UPDATE: 'content:update',
  ANALYTICS_UPDATE: 'analytics:update',
};