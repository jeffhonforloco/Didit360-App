export const API_ROUTES = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    resetPassword: '/auth/reset-password',
    requestReset: '/auth/request-reset',
    verifyEmail: '/auth/verify-email',
    profile: '/auth/profile',
  },
  users: {
    base: '/users',
    single: (id: string) => `/users/${id}`,
  },
  settings: {
    profile: '/settings/profile',
    security: '/settings/security',
    notifications: '/settings/notifications',
  },
};