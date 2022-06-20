import React from "react";

import "./daily-analysis.styles.scss";

import Header from "../../components/header/header.component";
import NavTab from "../../components/navTabs/navtabs.component";
import FormInput from "../../components/formInput/formInput.component";

const DailyAnalysisPage = () => {
  return (
    <div>
      <Header />
      <hr class="demo-divider__hr-horizontal" />
      <NavTab />
      <hr class="demo-divider__hr-horizontal1" />
      <FormInput />
      <b>OR</b>
    </div>
  );
};

export default DailyAnalysisPage;
