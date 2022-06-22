import { createStore, compose, applyMiddleware } from "redux";

import { rootReducer } from "./root-reducer";

import logger from "redux-logger";

const middleWare = [logger];

const composedMiddleWares = compose(applyMiddleware(...middleWare));

export const store = createStore(rootReducer, undefined, composedMiddleWares);
