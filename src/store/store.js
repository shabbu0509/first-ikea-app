import { createStore, compose, applyMiddleware } from "redux";

import { rootReducer } from "./root-reducer";

import logger from "redux-logger";
import thunk from "redux-thunk";

const middleWare = [logger, thunk];

const composedMiddleWares = compose(applyMiddleware(...middleWare));

export const store = createStore(rootReducer, undefined, composedMiddleWares);
