import React from "react";
import Header from "../header/header.component";
import NavTab from "../navTabs/navtabs.component";

function PageContainer() {
  return (
    <div>
      <Header />
      <hr class="demo-divider__hr-horizontal" />
      <NavTab />
    </div>
  );
}

export default PageContainer;
