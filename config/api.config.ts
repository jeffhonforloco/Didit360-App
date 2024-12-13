import { API_CONFIG as BaseConfig } from './constants';

export const API_CONFIG = {
  ...BaseConfig,
  endpoints: {
    auth: {
      login: '/auth/login',
      register: '/auth/register',
      logout: '/auth/logout',
      refresh: '/auth/refresh',
      profile: '/auth/profile'
    },
    admin: {
      analytics: '/admin/analytics',
      users: '/admin/users',
      content: '/admin/content',
      streams: '/admin/streams',
      revenue: '/admin/revenue'
    }
  },
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};