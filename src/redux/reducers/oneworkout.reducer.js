const oneworkoutReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_ONE_WORKOUT':
      return action.payload;
    
    default:
      return state;
  }
};


export default oneworkoutReducer;
