import React, { useState } from "react";
import "./navtabs.styles.scss";

import "@ingka/svg-icon/style.scss";
import "@ingka/button/style.scss";
import "@ingka/focus/style.scss";

import { NavLink } from "react-router-dom";

function NavTab() {
  return (
    <div className="nav-container">
      <NavLink
        name="nav_1"
        className={(navData) => (navData.isActive ? "active-link" : "nav-link")}
        to="/"
      >
        Daily Analysis
      </NavLink>
      <NavLink
        name="nav_2"
        className={(navData) => (navData.isActive ? "active-link" : "nav-link")}
        to="/ART_SPRView"
        ac
      >
        ART SPR view
      </NavLink>
      <NavLink name="nav_3" className="nav-link" to="/PIP_Monitoring_V1">
        PIP Monitoring - V1
      </NavLink>
      <NavLink name="nav_4" className="nav-link" to="/PIP_Monitoring_V2">
        PIP Monitoring - V2
      </NavLink>
      <NavLink name="nav_4" className="nav-link" to="/PIP_Monitoring_V2">
        Price change
      </NavLink>
      <NavLink name="nav_5" className="nav-link" to="/DigitalAPIHealthCheck">
        Digital API health check
      </NavLink>
      {/* 
        <ul>
          <NavLink to="/">
            <li>Daily Analysis</li>
          </NavLink>
          <NavLink>
            <li>ART SPR view</li>
          </NavLink>
          <NavLink>
            <li>PIP Monitoring - V1</li>
          </NavLink>
          <NavLink>
            <li>PIP Monitoring - V2</li>
          </NavLink>
          <NavLink>
            <li>Digital API health check</li>
          </NavLink>
        </ul>
      </nav> */}
    </div>
  );
}

export default NavTab;
