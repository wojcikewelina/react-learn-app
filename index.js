import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/headre";

import Bread from "./wiews/Bread";
import Home from "./wiews/home";
import BeerPage from "./wiews/bearPage";

import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
          <Route exact path = "/" component={Home}/>
          <Route path="/beers" component={BeerPage}/>
          <Route path='/bread' component={Bread}/>
          </Switch >
        </BrowserRouter>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
