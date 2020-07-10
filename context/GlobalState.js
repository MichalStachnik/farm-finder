import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  farms: [],
  userToken: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function setFarms(farms) {
    dispatch({
      type: 'SET_FARMS',
      payload: farms,
    });
  }

  function setToken(token) {
    dispatch({
      type: 'SET_TOKEN',
      payload: token,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        farms: state.farms,
        setFarms,
        userToken: state.userToken,
        setToken,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
