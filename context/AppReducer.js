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
  }
};
