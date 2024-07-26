/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

interface IResponseApi<T> {
  status: number;
  success: boolean;
  totalRow: number;
  message: string;
  data: T;
}
