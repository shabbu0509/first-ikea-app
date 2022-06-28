import axios from "axios";

import initialTokenActionTypes from "./initial-token.actiontypes";

var bodyFormData = new FormData();
bodyFormData.append("user", "cripf");
bodyFormData.append("password", "api");

const getTokenRequest = () => {
  return {
    type: initialTokenActionTypes.INITIAL_TOKEN_LOADING,
  };
};

const getTokenSuccess = (token) => {
  return {
    type: initialTokenActionTypes.INITIAL_TOKEN_SUCCESS,
    payload: token,
  };
};

const getTokenFailure = (errorMsg) => {
  return {
    type: initialTokenActionTypes.INITIAL_TOKEN_ERROR,
    payload: errorMsg,
  };
};

const initialToken = () => {
  return (dispatch) => {
    dispatch(getTokenRequest);
    axios({
      method: "post",
      url: "https://buyabletool-u5ngogn2ia-ew.a.run.app/User",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((getData) => {
        const token = getData.data;
        dispatch(getTokenSuccess(token));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getTokenFailure(errorMsg));
      });
  };
};

export default initialToken;
