import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import List from "./pages/List";



class App extends Component {
  state = {
    Home,
    Search
  };

  render() {
  return (

      <Router>
      <NavBar />
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/list" component={List} />
        <Route path="/search" component={Search} />
      </div>
      </Router>


  );
}

}

export default App;

