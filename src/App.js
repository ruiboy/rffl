import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import FflMenu from "./components/menu/FflMenu"
import TeamBuilder from "./components/teambuilder/TeamBuilder";
import Sandbox from "./components/sandbox/Sandbox";

function App() {

  return (
    <BrowserRouter>
      <FflMenu />
      <Route path="/teambuilder" component={TeamBuilder} />
      <Route path="/sandbox" component={Sandbox} />
    </BrowserRouter>
  );
}

export default App;
