import { DATE_FORMAT, DATETIME_FORMAT, TIME_FORMAT } from './constants';

export const formatters = {
  date: (date: Date | string, format: string = DATE_FORMAT): string => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    
    return format
      .replace('YYYY', String(year))
      .replace('MM', month)
      .replace('DD', day);
  },

  time: (date: Date | string, format: string = TIME_FORMAT): string => {
    const d = new Date(date);
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');
    
    return format
      .replace('HH', hours)
      .replace('mm', minutes)
      .replace('ss', seconds);
  },

  datetime: (date: Date | string, format: string = DATETIME_FORMAT): string => {
    const d = new Date(date);
    return formatters.date(d, format.split(' ')[0]) + ' ' + formatters.time(d, format.split(' ')[1]);
  },

  currency: (amount: number, currency: string = 'DZD'): string => {
    return new Intl.NumberFormat('fr-DZ', {
      style: 'currency',
      currency,
    }).format(amount);
  },

  number: (num: number, decimals: number = 2): string => {
    return new Intl.NumberFormat('fr-DZ', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(num);
  },

  percentage: (value: number, decimals: number = 1): string => {
    return `${formatters.number(value * 100, decimals)}%`;
  },

  phone: (phone: string): string => {
    // Format: +213 XX XXX XXX
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('213')) {
      return `+213 ${cleaned.slice(3, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`;
    }
    return phone;
  },

  fullName: (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
  },

  truncate: (text: string, length: number = 100, suffix: string = '...'): string => {
    if (text.length <= length) return text;
    return text.substring(0, length) + suffix;
  },

  capitalize: (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  },

  titleCase: (text: string): string => {
    return text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  },

  fileSize: (bytes: number): string => {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let size = bytes;
    let unitIndex = 0;
    
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }
    
    return `${formatters.number(size, 2)} ${units[unitIndex]}`;
  },
};

export const gradeFormatter = (grade: number): string => {
  if (grade >= 16) return 'Excellent';
  if (grade >= 14) return 'Very Good';
  if (grade >= 12) return 'Good';
  if (grade >= 10) return 'Pass';
  return 'Fail';
};

export const getGradeColor = (grade: number): string => {
  if (grade >= 16) return 'text-green-600';
  if (grade >= 14) return 'text-blue-600';
  if (grade >= 12) return 'text-yellow-600';
  if (grade >= 10) return 'text-orange-600';
  return 'text-red-600';
};