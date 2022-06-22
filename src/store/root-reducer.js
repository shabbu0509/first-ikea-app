import { combineReducers } from "redux";

import userInputReducer from "./user-input/user-input.reducer";

export const rootReducer = combineReducers({
  user: userInputReducer,
});
