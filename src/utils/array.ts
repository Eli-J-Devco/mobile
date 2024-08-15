/**
 * @description This function is useed to get the difference elements of array a compered to array b
 * @author qui.nguyen 2024-08-15
 * @param { parentArray: T[], subArray: T[]}
 * @returns  { T[] }
 */

export const getDifferenceArray = <T>(
  parentArray: T[],
  subArray: T[],
  field: keyof T,
): T[] => {
  return parentArray.filter(
    element => !subArray.some(sub => sub[field] === element[field]),
  );
};

/**
 * @description This function is useed to get the same elements of array a compered to array b
 * @author qui.nguyen 2024-08-15
 * @param { parentArray: T[], subArray: T[]}
 * @returns  { T[] }
 */

export const getSameArray = <T>(
  parentArray: T[],
  subArray: T[],
  field: keyof T,
): T[] => {
  return parentArray.filter(element =>
    subArray.some(sub => sub[field] === element[field]),
  );
};
