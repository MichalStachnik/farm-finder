import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  farms: [],
  userToken: null,
  userType: null,
  userEmail: null,
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

  function setUserType(userType) {
    dispatch({
      type: 'SET_USER_TYPE',
      payload: userType,
    });
  }

  function setUserEmail(userEmail) {
    dispatch({
      type: 'SET_USER_EMAIL',
      payload: userEmail,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        setFarms,
        farms: state.farms,
        setToken,
        userToken: state.userToken,
        setUserId,
        setUserType,
        userType: state.userType,
        setUserEmail,
        userEmail: state.userEmail,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
