import "./App.css";

import PageContainer from "./components/pageContainer/pageContainer.component";

import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import NavTab from "./components/navTabs/navtabs.component";
import FormInput from "./components/formInput/formInput.component";

function App() {
  return (
    <div className="App">
      <Header />
      <hr class="demo-divider__hr-horizontal" />
      <NavTab />
      <hr class="demo-divider__hr-horizontal1" />
      <FormInput />
      <b>OR</b>
    </div>
  );
}

export default App;
