const activeCityReducer = (state = null, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return null;
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'SET_ACTIVE_CITY':
      return action.payload;
    default:
      return state;
  }
};

export default activeCityReducer;
