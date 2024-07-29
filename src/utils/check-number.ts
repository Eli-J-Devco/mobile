export const checkIfStringIsNumber = (value: string) => {
  return /^[0-9]+$/.test(value);
};

export const checkIfStringIsNumberFloatAndSpace = (value: string) => {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(value);
};
