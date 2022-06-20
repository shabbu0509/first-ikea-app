import "./App.css";

import DailyAnalysisPage from "./pages/daily-analysis/daily-analysis.page";
import PIP_Monitoring_V1 from "./pages/PIP-Monitoring-V1/PIP-Monitoring-V1.page";
import PIP_Monitoring_V2 from "./pages/PIP-Monitoring-V2/PIP-Monitoring-V2.page";
import DigitalAPIHealthCheck from "./pages/Digital-API-Health-check/Digital-API-Health-check.page";
import ART_SPRView from "./pages/ART_SPR-view/ART_SPR-view.page";

import { Routes, Route } from "react-router-dom";

function App() {
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
        <Route path="/ART_SPRView" element={<DailyAnalysisPage />} />
      </Routes>
    </div>
  );
}

export default App;
