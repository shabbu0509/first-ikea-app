import { combineReducers } from "redux";

import userInputReducer from "./user-input/user-input.reducer";
import initialTokenReducer from "./initial-token/initial-token.reducer";

export const rootReducer = combineReducers({
  user: userInputReducer,
  token: initialTokenReducer,
});
