export const getDate = (date) =>
  date ? new Date(Number(date)).toDateString() : new Date().toDateString();
