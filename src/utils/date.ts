import { format } from "date-fns";

export const formatDate = (date) => {
  const getYear = date.substring(0, 4);
  const getMonth = date.substring(4, 6);
  const getDay = date.substring(6, 8);
  const getHour = date.substring(9, 11);
  const getMinute = date.substring(11, 13);
  const getSeconds = date.substring(13, 15);

  const fullDate = `${getYear}-${getMonth}-${getDay}T${getHour}:${getMinute}:${getSeconds}.000Z`

  const parsedDate = format(new Date(fullDate), 'dd/MM/yyyy');

  return parsedDate;
}