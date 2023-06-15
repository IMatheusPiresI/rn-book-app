export const formatDateEN = (date: string) => {
  const regex = /(\d{4})-(\d{2})-(\d{2})/;
  const output = date.replace(regex, '$1/$2/$3');

  return output;
};
