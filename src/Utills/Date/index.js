export const getDay = (today) => {
  const day = today.getDay();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  return `${year}-${month}-${date}`;
};

export const getTime = (today) => {
  const hour = today.getHours();
  const minutes = today.getMinutes();
  return `${hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
};
