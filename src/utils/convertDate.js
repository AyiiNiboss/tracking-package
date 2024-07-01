// utils/convertDate.js
import { parse, format } from 'date-fns';
import id from 'date-fns/locale/id';

export const convertDate = (dateString) => {
  const parsedDate = parse(dateString, 'yyyy-MM-dd HH:mm:ss', new Date());
  const formattedDate = format(parsedDate, 'dd MMMM yyyy HH:mm:ss', { locale: id });
  return formattedDate;
};
