/**
 * @description This function is used to get random number between o and x
 * @author qui.nguyen 2024-08-15
 * @param { x: number}
 * @returns  number
 */

export const getRandomNumber = (x: number): number => {
  return Math.floor(Math.random() * x);
};
