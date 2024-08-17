const oneworkoutReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ONE_WORKOUT':
      return action.payload;
    
    default:
      return state;
  }
};


export default oneworkoutReducer;
