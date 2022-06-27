import initialTokenActionTypes from "./initial-token.actiontypes";

const setInitialToken = (initialToken) => ({
  type: initialTokenActionTypes.SET_INITIAL_TOKEN,
  payload: initialToken,
});
