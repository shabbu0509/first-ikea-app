import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import userInputAction from "../../store/user-input/user-input.action";

import "./formInput.styles.scss";

function FormInput() {
  const [toggleButton, setToggleButton] = useState(false);
  //const [textAreaValue, setTextAreaValue] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleButton ? setToggleButton(false) : setToggleButton(true);
  };

  useEffect(() => {
    dispatch(userInputAction(toggleButton));
  }, [toggleButton]);

  return (
    <div className="form-container">
      <p>*Kindly fill either the single or multiple market information</p>
      <p className="p-tag">For single market, provide information</p>
      <form onSubmit={handleSubmit} className="input-area">
        <div className="form-field">
          <div className="text-area label-wrapper label-wrapper--text-input">
            <label for="example-id" title="Enter item No.">
              Enter item No.
            </label>
            <div className="text-area__wrapper">
              <textarea
                className="text"
                id="example-id"
                aria-describedby="helper-msg-id"
                aria-required="false"
                type="text"
                placeholder="Example &#10; 00455378 &#10; 00478718 &#10;"
              ></textarea>
            </div>
          </div>
          <div className="form-field__content">
            <span
              id="helper-msg-id"
              aria-hidden="false"
              className="form-field__message-wrapper"
              type=""
            >
              <span className="form-field__message">(Max of 1000 items)</span>
            </span>
          </div>
        </div>
        <div className="text-field">
          <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
            <label for="example-id"  title="Enter market">
              Enter market
            </label>
            <div className="input-field__wrapper">
              <input
                className="input-text"
                type="text"
                id="example-id"
                aria-required="false"
                placeholder="Example:SE"
              />
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button
            aria-disabled="false"
            type="submit"
            className="btn btn--small btn--primary"
          >
            <span className="btn__inner">
              <span className="btn__label">Submit</span>
            </span>
          </button>
          <button
            aria-disabled="false"
            type="button"
            className="btn btn--small btn--secondary"
          >
            <span className="btn__inner">
              <span className="btn__label">Clear</span>
            </span>
          </button>
        </div>
      </form>

      <hr className="demo-divider__hr-horizonta2" />
    </div>
  );
}

export default FormInput;
