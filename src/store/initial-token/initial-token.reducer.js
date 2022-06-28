import initialTokenActionTypes from "./initial-token.actiontypes";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: "",
};

const initialTokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case initialTokenActionTypes.INITIAL_TOKEN_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case initialTokenActionTypes.INITIAL_TOKEN_SUCCESS:
      let stringifiedToken = JSON.stringify(action.payload);
      let copyOfToken = JSON.parse(stringifiedToken);
      return {
        ...state,
        data: copyOfToken,
        loading: false,
      };
    case initialTokenActionTypes.INITIAL_TOKEN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default initialTokenReducer;
