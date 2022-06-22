import userInputActionTypes from "./user-input.actiontypes";

const userInputAction = (buttonToggle) => ({
  type: userInputActionTypes.SET_BUTTON_TOGGLE,
  payload: buttonToggle,
});

export default userInputAction;
