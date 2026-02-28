export const APP_NAME = 'University Platform';
export const APP_VERSION = '1.0.0';

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

export const ROLES = {
  STUDENT: 'STUDENT',
  DELEGATE: 'DELEGATE',
  TEACHER: 'TEACHER',
  SPECIALITE_CHEF: 'SPECIALITE_CHEF',
  DEPARTEMENT_CHEF: 'DEPARTEMENT_CHEF',
  ADMIN_FACULTY: 'ADMIN_FACULTY',
  ADMIN_SUPER: 'ADMIN_SUPER',
  ASSIGNMENT_MANAGER: 'ASSIGNMENT_MANAGER',
  COMMITTEE_MEMBER: 'COMMITTEE_MEMBER',
  COMMITTEE_PRESIDENT: 'COMMITTEE_PRESIDENT',
} as const;

export const ROLE_LABELS: Record<string, string> = {
  [ROLES.STUDENT]: 'Student',
  [ROLES.DELEGATE]: 'Delegate',
  [ROLES.TEACHER]: 'Teacher',
  [ROLES.SPECIALITE_CHEF]: 'Specialité Chef',
  [ROLES.DEPARTEMENT_CHEF]: 'Département Chef',
  [ROLES.ADMIN_FACULTY]: 'Faculty Admin',
  [ROLES.ADMIN_SUPER]: 'Super Admin',
  [ROLES.ASSIGNMENT_MANAGER]: 'Assignment Manager',
  [ROLES.COMMITTEE_MEMBER]: 'Committee Member',
  [ROLES.COMMITTEE_PRESIDENT]: 'Committee President',
};

export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const TOKEN_STORAGE_KEY = 'accessToken';
export const REFRESH_TOKEN_STORAGE_KEY = 'refreshToken';

export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const TIME_FORMAT = 'HH:mm';

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  PAGE_SIZES: [10, 25, 50, 100],
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;