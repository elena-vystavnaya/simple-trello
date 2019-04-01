import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import ListPage from "./components/list/ListPage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/list" component={ListPage} />
      </Router>
    );
  }
}
