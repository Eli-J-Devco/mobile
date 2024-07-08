export const checkIfStringIsNumber = (value: any) => {
  return /^[0-9]+$/.test(value);
};

export const checkIfStringIsNumberFloatAndSpace = (value: any) => {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(value);
};
