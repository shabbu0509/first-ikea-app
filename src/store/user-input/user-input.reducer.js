import userInputActionTypes from "./user-input.actiontypes";

const INITIAL_STATE = {
  toggleButton: false,
};

const userInputReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userInputActionTypes.SET_BUTTON_TOGGLE:
      return { ...state, toggleButton: action.payload };
    default:
      return state;
  }
};

export default userInputReducer;
