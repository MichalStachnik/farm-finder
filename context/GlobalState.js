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

  function setUserId(userId) {
    dispatch({
      type: 'SET_USER_ID',
      payload: userId,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        farms: state.farms,
        setFarms,
        setToken,
        userToken: state.userToken,
        setUserId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
