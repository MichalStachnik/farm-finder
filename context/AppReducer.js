export default (state, action) => {
  switch (action.type) {
    case 'SET_FARMS':
      return {
        ...state,
        farms: [action.payload],
      };
    case 'SET_TOKEN':
      return {
        ...state,
        userToken: action.payload,
      };
    case 'SET_USER_ID':
      return {
        ...state,
        userId: action.payload,
      };
    case 'SET_USER_TYPE':
      return {
        ...state,
        userType: action.payload,
      };
    case 'SET_USER_EMAIL':
      return {
        ...state,
        userEmail: action.payload,
      };
  }
};
