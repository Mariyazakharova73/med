import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export function formatUnixDate(timestamp: number, pattern: string = 'dd.MM.yyyy HH:mm:ss'): string {
  const date = new Date(timestamp * 1000);
  return format(date, pattern, { locale: ru });
}
