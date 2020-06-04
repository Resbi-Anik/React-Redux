const initState = {
  count: null,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "inc":
      return {
        ...state,
        count: action.body,
      };
    case "reduce":
      return {
        ...state,
        count: action.body,
      };
    default:
      return state;
  }
};

export default rootReducer;
