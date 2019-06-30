import { BrowserRouter, Route, Switch } from "react-router-dom";

import Construcao from "./modules/Construcao";
import Home from "./modules/Home";
import { Provider } from "react-redux";
import React from "react";
import Store from "./store";
import Viagem from "./modules/Viagem";
import { render } from "react-dom";

render(
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/viagem"} component={Viagem} />
        <Route exact path={"/depoimento"} component={Construcao} />
        <Route exact path={"/suporte"} component={Construcao} />
        <Route exact path={"/ajude"} component={Construcao} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
