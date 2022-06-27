import React from "react";

import "./spreadsheet-area.styles.scss";

const SpreadSheetArea = () => {
  return (
    <div className="spreadsheet-container">
      <p>
        For multiple markets, please download the template, and upload with item
        & market information
      </p>
      <span>Step 1</span>
      <div className="btn-1">
        <button
          aria-disabled="false"
          type="button"
          class="btn btn--small btn--secondary"
        >
          <span className="btn__inner">
            <span className="btn__label">Download template</span>
          </span>
        </button>
      </div>
      <span>Step 2</span>
      <div className="drag-drop">
        <p>
          Drag files here or click to upload in the same format <br></br>
          Maximum file size 5MB
        </p>
      </div>
    </div>
  );
};

export default SpreadSheetArea;
