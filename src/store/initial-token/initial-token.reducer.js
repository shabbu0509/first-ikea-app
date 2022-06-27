import initialTokenActionTypes from "./initial-token.actiontypes";

const INITIAL_STATE = {
  initialToken: null,
};

const initialTokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case initialTokenActionTypes.SET_INITIAL_TOKEN:
      return { ...state, initialToken: action.payload };
    default:
      return state;
  }
};

export default initialTokenReducer;
