import React from "react";

import "./daily-analysis.styles.scss";

import Header from "../../components/header/header.component";
import NavTab from "../../components/navTabs/navtabs.component";
import FormInput from "../../components/formInput/formInput.component";
import SpreadSheetArea from "../../components/spreadsheet-area/spreadsheet-area.component";

const DailyAnalysisPage = () => {
  return (
    <div>
      <Header />
      <hr class="demo-divider__hr-horizontal" />
      <NavTab />
      <hr class="demo-divider__hr-horizontal1" />
      <FormInput />
      <b>OR</b>
      <SpreadSheetArea />
    </div>
  );
};

export default DailyAnalysisPage;
