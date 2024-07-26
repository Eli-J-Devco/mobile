/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/
interface ITree {
  id: number;
  name: string;
  children?: ITree[];
}
