import React from "react";

import "./formInput.styles.scss";

function FormInput() {
  return (
    <div className="form-container">
      <p>*Kindly fill either the single or multiple market information</p>
      <p className="p-tag">For single market, provide information</p>
      <div className="input-area">
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
              ></textarea>
              <span class="text-area__border"></span>
            </div>
          </div>
          <div class="form-field__content">
            <span
              id="helper-msg-id"
              aria-hidden="false"
              class="form-field__message-wrapper"
              type=""
            >
              <span class="form-field__message">(Max of 100 items)</span>
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
              />
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button
            aria-disabled="false"
            type="button"
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
      </div>

      <hr class="demo-divider__hr-horizonta2" />
    </div>
  );
}

export default FormInput;
