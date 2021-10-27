import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import FflMenu from "./components/menu/FflMenu"
import TeamBuilder from "./components/teambuilder/TeamBuilder";

function App() {

  return (
    <BrowserRouter>
      <FflMenu />
      <Route path="/teambuilder" component={TeamBuilder} />
    </BrowserRouter>
  );
}

export default App;
