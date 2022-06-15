import React from "react";
import { ReactComponent as Logo } from "../../assets/icon_logo.svg";
import { GrMailOption, GrHomeRounded } from "react-icons/gr";

import "./header.styles.scss";

function Header() {
  return (
    <div className="header">
      <Logo />
      <div className="sub-topic">
        <h1>CRIPF</h1>
        <p>Showability and Buyability</p>
      </div>
      <div className="other-details">
        <GrMailOption />
        <p className="mail"> cripf.tools.gibl@ikea.com</p>
        <GrHomeRounded />
      </div>
    </div>
  );
}

export default Header;
