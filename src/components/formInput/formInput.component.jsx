import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import userInputAction from "../../store/user-input/user-input.action";

import "./formInput.styles.scss";

const FORM_FEILDS = {
  textarea: null,
  market: "",
};

function FormInput() {
  const [toggleButton, setToggleButton] = useState(false);
  const [formInput, setFormInput] = useState(FORM_FEILDS);
  const { textarea, market } = formInput;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

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
        <div class="form-field">
          <div class="text-area label-wrapper label-wrapper--text-input">
            <label for="example-id" class="" title="Enter item No.">
              Enter item No.
            </label>
            <div class="text-area__wrapper">
              <textarea
                className="text"
                id="example-id"
                aria-describedby="helper-msg-id"
                aria-required="false"
                type="text"
                placeholder="Example &#10; 00455378 &#10; 00478718 &#10;"
                name="textarea"
                onChange={handleChange}
                value={textarea}
              ></textarea>
            </div>
          </div>
          <div class="form-field__content">
            <span
              id="helper-msg-id"
              aria-hidden="false"
              class="form-field__message-wrapper"
              type=""
            >
              <span class="form-field__message">(Max of 1000 items)</span>
            </span>
          </div>
        </div>
        <div class="text-field">
          <div class="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
            <label for="example-id" class="" title="Enter market">
              Enter market
            </label>
            <div class="input-field__wrapper">
              <input
                className="input-text"
                type="text"
                id="example-id"
                aria-required="false"
                placeholder="Example:SE"
                name="market"
                onChange={handleChange}
                value={market}
              />
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button
            aria-disabled="false"
            type="submit"
            class="btn btn--small btn--primary"
          >
            <span class="btn__inner">
              <span class="btn__label">Submit</span>
            </span>
          </button>
          <button
            aria-disabled="false"
            type="button"
            class="btn btn--small btn--secondary"
          >
            <span class="btn__inner">
              <span class="btn__label">Clear</span>
            </span>
          </button>
        </div>
      </form>

      <hr class="demo-divider__hr-horizonta2" />
    </div>
  );
}

export default FormInput;
