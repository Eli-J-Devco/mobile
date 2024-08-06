/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

/* eslint-disable @typescript-eslint/no-explicit-any */

export type AppContextType = {
  isLoading: boolean;
  isAuth: boolean;
  user: any;
};

export enum Types {
  INITIAL = 'INITIAL',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

type ActionMapType<M extends {[index: string]: any}> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {type: Key}
    : {
        type: Key;
        payload: M[Key];
      };
};

type Payload = {
  [Types.INITIAL]: {
    isAuth: boolean;
    user: any;
  };
  [Types.LOGIN]: {
    isAuth: boolean;
    user: any;
  };
  [Types.LOGOUT]: {
    isAuth: boolean;
    user: any;
  };
};

export type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

export type AppProviderType = {
  isAuth: boolean;
  user: any;
  loginFnc: () => void;
  logoutFnc: () => void;
};
