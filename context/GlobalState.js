import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  farms: [],
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

  return (
    <GlobalContext.Provider
      value={{
        farms: state.farms,
        setFarms,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
