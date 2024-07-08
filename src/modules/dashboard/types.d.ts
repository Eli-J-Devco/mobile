/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

interface IDashboardPortfolio {
  id: number;
  name: string;
  percentage: number;
  children: {
    title: string;
    value: number;
  }[];
}
