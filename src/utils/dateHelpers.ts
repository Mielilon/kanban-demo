import dayjs from 'dayjs';

export const formatPeriod = (startDate: string, dueDate: string) => {
  if (startDate === dayjs(new Date()).format('DD/MM/YYYY') && dueDate) {
    return `Due day: ${dueDate}`;
  } if (startDate && dueDate) {
    return `${startDate} – ${dueDate}`;
  } if (startDate && !dueDate) {
    return `Start date: ${startDate}`;
  }
  return 'No date';
};
