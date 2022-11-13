import React from "react";
import Login from "./components/Login";
import Nav from "./components/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Action from "./components/Action";
import Comedy from "./components/Comedy";
import War from "./components/War";
import Anime from "./components/Anime";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/action-adventure" component={Action} />
        <Route exact path="/comedy" component={Comedy} />
        <Route exact path="/anime" component={Anime} />
        <Route exact path="/war" component={War} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
