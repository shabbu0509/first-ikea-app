import React from "react";
import "./navtabs.styles.scss";

import "@ingka/svg-icon/style.scss";
import "@ingka/button/style.scss";
import "@ingka/focus/style.scss";

import Button from "@ingka/button";

import { Link } from "react-router-dom";

function NavTab() {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>Daily Analysis</li>
          <li>ART SPR view</li>
          <li>PIP Monitoring - V1</li>
          <li>PIP Monitoring - V2</li>
          <li>Digital API health check</li>
        </ul>
      </nav>

      {/* <Button type="primary" text="Button text" /> */}
    </div>
  );
}

export default NavTab;
