import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX } from './constants';

export const validators = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  password: (password: string): boolean => {
    return password.length >= PASSWORD_MIN_LENGTH && PASSWORD_REGEX.test(password);
  },

  passwordMatch: (password: string, confirmPassword: string): boolean => {
    return password === confirmPassword;
  },

  required: (value: any): boolean => {
    if (typeof value === 'string') return value.trim().length > 0;
    if (typeof value === 'number') return true;
    if (Array.isArray(value)) return value.length > 0;
    if (value === null || value === undefined) return false;
    if (typeof value === 'object') return Object.keys(value).length > 0;
    return true;
  },

  minLength: (value: string, min: number): boolean => {
    return value.length >= min;
  },

  maxLength: (value: string, max: number): boolean => {
    return value.length <= max;
  },

  phone: (phone: string): boolean => {
    const phoneRegex = /^(\+213|0)[5-7]\d{8}$/;
    return phoneRegex.test(phone);
  },

  numeric: (value: string): boolean => {
    return /^\d+$/.test(value);
  },

  alphanumeric: (value: string): boolean => {
    return /^[a-zA-Z0-9]+$/.test(value);
  },

  url: (value: string): boolean => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  },

  studentId: (id: string): boolean => {
    return /^\d{10}$/.test(id);
  },

  employeeId: (id: string): boolean => {
    return /^[A-Z]{3}\d{4}$/.test(id);
  },
};

export const getPasswordStrength = (password: string): 'weak' | 'medium' | 'strong' => {
  let score = 0;
  
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  
  if (score <= 2) return 'weak';
  if (score <= 4) return 'medium';
  return 'strong';
};

export const validateForm = <T extends Record<string, any>>(
  data: T,
  rules: Partial<Record<keyof T, ((value: any) => boolean)[]>>
): Record<keyof T, string[]> => {
  const errors: Partial<Record<keyof T, string[]>> = {};

  Object.keys(rules).forEach((key) => {
    const fieldRules = rules[key as keyof T];
    const value = data[key as keyof T];

    if (fieldRules) {
      fieldRules.forEach((rule) => {
        if (!rule(value)) {
          if (!errors[key as keyof T]) {
            errors[key as keyof T] = [];
          }
          errors[key as keyof T]?.push(`Invalid ${String(key)}`);
        }
      });
    }
  });

  return errors as Record<keyof T, string[]>;
};