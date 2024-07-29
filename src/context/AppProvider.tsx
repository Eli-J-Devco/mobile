/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {
  createContext,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import {
  ActionsType,
  AppContextType,
  AppProviderType,
  Types,
} from '../types/app-provider';

const initalState: AppContextType = {
  isLoading: false,
  isAuth: false,
  user: null,
};

const reducer = (state: AppContextType, action: ActionsType) => {
  if (action.type === Types.INITIAL) {
    return {
      ...state,
      isAuth: action.payload.isAuth,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGIN) {
    return {
      ...state,
      isAuth: action.payload.isAuth,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      isAuth: action.payload.isAuth,
      user: action.payload.user,
    };
  }

  return state;
};

export const AppContext = createContext<AppProviderType | null>(null);

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: FC<AppProviderProps> = props => {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    dispatch({
      type: Types.INITIAL,
      payload: {
        isAuth: false,
        user: null,
      },
    });
  }, []);

  const loginFnc = useCallback(() => {
    console.log('---loginFnc---');
    dispatch({
      type: Types.LOGIN,
      payload: {
        isAuth: true,
        user: {
          name: 'Nguyen Trong Qui',
        },
      },
    });
  }, []);

  const logoutFnc = useCallback(() => {
    console.log('---logoutFnc---');
    dispatch({
      type: Types.LOGOUT,
      payload: {
        isAuth: false,
        user: null,
      },
    });
  }, []);

  const memoizedValue = useMemo(
    () => ({
      isAuth: state.isAuth,
      user: state.user,
      loginFnc,
      logoutFnc,
    }),
    [state.isAuth, state.user, loginFnc, logoutFnc],
  );

  return (
    <AppContext.Provider value={memoizedValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
