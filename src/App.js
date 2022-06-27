import "./App.css";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import DailyAnalysisPage from "./pages/daily-analysis/daily-analysis.page";
import PIP_Monitoring_V1 from "./pages/PIP-Monitoring-V1/PIP-Monitoring-V1.page";
import PIP_Monitoring_V2 from "./pages/PIP-Monitoring-V2/PIP-Monitoring-V2.page";
import DigitalAPIHealthCheck from "./pages/Digital-API-Health-check/Digital-API-Health-check.page";
import ART_SPRView from "./pages/ART_SPR-view/ART_SPR-view.page";
import PriceChange from "./pages/price-change/price-change.component";

import { Routes, Route } from "react-router-dom";

import axios, { Axios } from "axios";
import { colourSwitchOffPressed } from "@ingka/variables";
import { useState } from "react";

function App() {
  const [intialToken, setInitialToken] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .post(`https://buyabletool-u5ngogn2ia-ew.a.run.app/User`, {
        Username: "cripf",
        Password: "api",
        headers: new Headers({
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept, Authorization",
          "Access-Control-Request-Method": "GET, POST, DELETE, PUT, OPTIONS",
        }),
      })
      .then((getData) => {
        console.log(getData.data);
        dispatch(setInitialToken(getData.data));
      });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DailyAnalysisPage />} />
        <Route path="/PIP_Monitoring_V1" element={<PIP_Monitoring_V1 />} />
        <Route path="/PIP_Monitoring_V2" element={<PIP_Monitoring_V2 />} />
        <Route
          path="/DigitalAPIHealthCheck"
          element={<DigitalAPIHealthCheck />}
        />
        <Route path="/ART_SPRView" element={<ART_SPRView />} />
        <Route path="/price_change" element={<PriceChange />} />
      </Routes>
    </div>
  );
}

export default App;
