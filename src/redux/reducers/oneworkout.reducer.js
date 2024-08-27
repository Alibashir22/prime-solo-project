const oneworkoutReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_ONE_WORKOUT':
      return action.payload;
      case 'CLEAR_WORKOUT':
        return null
    
    default:
      return state;
  }
};


export default oneworkoutReducer;
