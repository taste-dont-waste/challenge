export const toKB = (value: string) => {
  const sizeInBytes = 3 * Math.ceil(value.length / 4);
  const sizeInKB = sizeInBytes / 1000;

  return sizeInKB <= 1000;
};
