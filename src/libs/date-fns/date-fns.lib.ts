import { formatDate } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formattedPublishedLastDate(date: Date) {
  return formatDate(date, 'dd MMM yyyy', {
    locale: ptBR,
  });
}
