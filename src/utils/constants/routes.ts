export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  ADMIN: '/admin',
  PROFESSIONAL: '/professional',
  INVESTOR: '/investor',
  SERVICES: '/services',
  SAME_DAY_SERVICES: '/same-day-services',
  VIDEOS: '/browse-videos',
  CONSULTATION: '/consultation',
  STUDENTS: '/registered-students',
  CLIENT: '/registered-clients',
  STUDENT: '/student',
  CLIENT_DETAIL: '/client-details',
} as const;

export const PROTECTED_ROUTES = [
  ROUTES.DASHBOARD,
  ROUTES.ADMIN,
  ROUTES.PROFESSIONAL,
  ROUTES.INVESTOR,
  ROUTES.CLIENT,
  ROUTES.STUDENT,
  ROUTES.SAME_DAY_SERVICES,
];

export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.LOGIN,
  ROUTES.REGISTER,
  ROUTES.SERVICES,
  ROUTES.VIDEOS,
];